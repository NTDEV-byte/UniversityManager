const { response } = require("express");
const { ObjectId } = require("mongodb");

class AdminAPI{

    ajouterEnseignant(app,UserModel){
        app.post('/api/admin/ajouterEnseignant' , async (req,res) => {
                const {nom,prenom,email,password,statut,role} =  req.body;
                const response = await UserModel.create([{nom , prenom , email, password,statut,role}])
                if(!response){
                    res.json({
                        success : false,
                        message : "Echec lors de l'ajout de l'enseignant !"
                    });
                }
                else{

                    res.json({
                        success : true,
                        message : "Enseignant ajouté !"
                    });
                }
        })
    }

    modifierEnseignant(app,UserModel){
        app.post('/api/admin/modifierEnseignant' , async (req,res) => {
               const user = await UserModel.findOneAndUpdate({"_id" : req.body.id} , {"nom" : req.body.nom , "prenom" : req.body.prenom  , "email" : req.body.email  , "statut" : req.body.statut , "role" : req.body.role , "uc" : req.body.uc } , {new : true});
               if(user){
                    res.json({
                        success : true,
                        message : "Utilisateur modifier avec succès"
                    });
                }
                else{
                res.json({
                    success : false,
                    message : "Utilisateur Introuvable !"
                    });
                    }
               })
    }

    supprimerEnseignant(app,UserModel){
        app.post('/api/admin/supprimerEnseignant' , async (req,res) => {
              const {id} = req.body;
              const response = await UserModel.deleteOne({"_id" : id})
              if(response){
                    console.log("Suppression Réussi !")
                    res.json({
                        success : true,

                    })
              }
              else{
                res.json({
                    success : false,

                })
                    console.log("Echec lors de la suppression !")
              }
        })
    }

    listeEnseignants(app,UserModel){
        app.post('/api/admin/listeEnseignant' , async (req,res) => {
            const resp =  await UserModel.find({role : 'Enseignant'});
            res.json(resp)
      })
    }

    inscriptionEnseignantModules(app,EnseignementModel){
         app.post('/api/admin/inscriptionEnseignantModules', async(req,res) => {
                    const {idEnseignant , modulesIDs} = req.body;
                    const success = true;
                    for(let i = 0; i < modulesIDs.length; i++){
                    const response = await EnseignementModel.create({"idEnseignant" : ObjectId(idEnseignant), "idEnseignement" : ObjectId(modulesIDs[i]),  nombreCM: 0 , nombreTD: 0 , nombreTP: 0})
                    if(response){
                            console.log("Ok !")
                    }
                    else{
                         success = false;
                    }
                }

                  res.json({success : success , message:  "Insertion success !"});
         })
    }

    desinscriptionEnseignantModules(app,EnseignementModel){
      app.post('/api/admin/desinscriptionEnseignantModules', async(req,res) => {
                 const {idEnseignant , modulesIDs} = req.body;
                 const success = true;
                 for(let i = 0; i < modulesIDs.length; i++){
                 const response = await EnseignementModel.deleteOne({"idEnseignant" : ObjectId(idEnseignant), "idEnseignement" : ObjectId(modulesIDs[i])})
                 if(response){
                         console.log("deleted module !")
                 }
                 else{
                      success = false;
                 }
             }
                 res.json({success : success , message:  "Désinscription avec succès !"});
      })
 }

  // added
     getALLEnseignementsDetailNombreGroupesCM_TD_TP(app,EnseignementModel){
      app.post('/api/admin/AllEnseignementGroupesDetail' , async (req,res) => {
        const response = await EnseignementModel.aggregate(
        [
          {$group : {_id: "$idEnseignement", totalCM :{ $sum : {"$toDouble" : "$groupeCM"}},totalTD :{ $sum : {"$toDouble" : "$groupeTD"}},totalTP :{ $sum : {"$toDouble" : "$groupeTP"}}     }}
        ])

        if(response){
            res.json(response)
        }
        else{
            res.json({success : false , message : "Echec lors de la récupération du detail CM TD TP"})
        }
    })
    }

    getEnseignementDetailNombreGroupesCM_TD_TP(app,EnseignementModel){
      app.post('/api/admin/EnseignementGroupeDetail' , async (req,res) => {
        const {idEnseignement} = req.body
        const response = await EnseignementModel.aggregate(
        [
          {$match : {"idEnseignement" : ObjectId(idEnseignement)}},
          {$group : {_id: "$idEnseignement", totalCM :{ $sum : {"$toDouble" : "$groupeCM"}},totalTD :{ $sum : {"$toDouble" : "$groupeTD"}},totalTP :{ $sum : {"$toDouble" : "$groupeTP"}}     }}
        ])
        if(response){
            res.json(response)
        }
        else{
            res.json({success : false , message : "Echec lors de la récupération du detail CM TD TP"})
        }
    })
    }

    getEnseignementPourvu(app,EnseignementModel){
      app.post('/api/admin/EnseignementPourvu' , async (req,res) => {
        const {idEnseignement} =req.body;
        const response = await EnseignementModel.aggregate(
          [
          {$match : {"idEnseignement" : ObjectId(idEnseignement)}},
          {$group : {_id: "$idEnseignement", totalCM :{ $sum : {"$toDouble" : "$groupeCM"}},totalTD :{ $sum : {"$toDouble" : "$groupeTD"}},totalTP :{ $sum :    {"$toDouble" : "$groupeTP"}}     }},
          {$lookup : {from : 'formations' , localField: '_id' , foreignField: '_id' , as : 'details'}}
         ])
        if(response){
            res.json(response)
        }
        else{
            res.json({success : false , message : "Echec lors de la récupération du detail CM TD TP"})
        }
    })
    }


    getALLEnseignementsPourvus(app,EnseignementModel){
      app.post('/api/admin/AllEnseignementsPourvus' , async (req,res) => {
        const response = await EnseignementModel.aggregate([
          {$group : {_id: "$idEnseignement", totalCM :{ $sum : {"$toDouble" : "$groupeCM"}},totalTD :{ $sum : {"$toDouble" : "$groupeTD"}},totalTP :{ $sum :    {"$toDouble" : "$groupeTP"}}     }},
          {$lookup : {from : 'formations' , localField: '_id' , foreignField: '_id' , as : 'details'}}
         ])
        if(response){
            res.json(response)
        }
        else{
            res.json({success : false , message : "Echec lors de la récupération du detail CM TD TP"})
        }
    })
    }


}

module.exports = AdminAPI;
