const { ObjectId } = require("mongodb");

class EnseignantAPI {

    getEnseignantInformationById(app,UserModel){
            app.post("/api/enseignant/informations" , async (req,res) => {
                      const {enseignantID} = req.body;
                      const response = await UserModel.findOne({"_id" : enseignantID})
                      if(response){
                          res.json(response);
                      }
                      else{
                        res.json({success: false , message : "Echec lors de la récupération des information de l'enseignant !"})
                      }
            })
   }

    getListModulesEnseignees(app,UserModel){
            app.post("/api/enseignant/modulesEnseignee" , async (req,res) => {
              const {enseignantID} = req.body;
              const response = await UserModel.aggregate(
              [
                  {$match : {"_id" : ObjectId(enseignantID)}},
                  {$lookup: {from : "enseignements", localField :  "_id" ,foreignField : "idEnseignant", as : "teaches"}},
                  {$lookup: {from : "formations" , localField : "teaches.idEnseignement" , foreignField : "_id", as : "modulesEnseignee" }}
              ])
              if(response){
                  res.json(response[0].modulesEnseignee);
              }
              else{
                res.json({success: false , message : "Echec lors de la récupération des information de l'enseignant !"})
              }
            })
    }

    inscriptionEnseignantModule(app,EnseignementModel){
      app.post("/api/enseignant/inscriptionEnseignantEnseignement" , async (req,res) => {
        const {idEnseignant,idEnseignement,nombreCM,nombreTD,nombreTP} = req.body;
        console.log("NombreCM : "+ nombreCM);
          const response = await EnseignementModel.create({idEnseignant: idEnseignant , idEnseignement: idEnseignement, groupeCM: nombreCM , groupeTD: nombreTD , groupeTP: nombreTP})
          if(response){
              res.json({success: true , message : "Enseignant Inscrit dans le module avec succès !"});
          }
          else{
            res.json({success: false , message : "Echec lors de l'inscription de l'enseignant dans le module !"})
          }
        })
    }

    getEnseignementsPrisEnCharges(app,EnseignementModel){
      app.post("/api/enseignant/EnseignementsPrisEnCharge" , async (req,res) => {
        const {idEnseignant} = req.body;
        const response = await EnseignementModel.aggregate(
          [{$match : {idEnseignant : ObjectId(idEnseignant)}},
           {$lookup : {from : "formations" , localField: "idEnseignement" , foreignField: "_id" , as: "teaches"}}
          ])
          if(response){
              res.json(response);
          }
          else{
            res.json({success: false , message : "Enseignement introuvables !"})
          }
      })
  }

  desinscireEnseignement(app,EnseignementModel){
    app.post("/api/enseignant/DesinscriptionEnseignement" , async (req,res) => {
      const {idEnseignement} = req.body;
      const response = await EnseignementModel.deleteOne({"_id" : idEnseignement})
        if(response){
          res.json({success: true , message : " Désinscription de l'enseignement réussie !"})
        }
        else{
          res.json({success: false , message : "Désinscription de l'enseignement echouée !"})
        }
    })
}
  renseignementUC(app,UserModel){
    app.post("/api/enseignant/ReseignementUC" , async (req,res) => {
      const {idEnseignant,uc} = req.body;
      const response = await UserModel.findOneAndUpdate({"_id" : idEnseignant} , {"uc" : uc})
        if(response){
          res.json({success: true , message : " Renseignement des UC's réussie !"})
        }
        else{
          res.json({success: false , message : "Renseignement des UC echouée !"})
        }
    })
  }

  recapitulatifEnseignant(app,UserModel) {
    app.post('/api/enseignant/RecapitulatifEnseignant' , async (req,res) => {
            const{idEnseignant} = req.body;

            const response = await UserModel.aggregate(
            [
            {$match:  {"_id": ObjectId(idEnseignant)}},
            {$lookup: {from: 'enseignements', localField: '_id' , foreignField: 'idEnseignant' , as : 'EnseignementsT'}},
            {$lookup: {from: 'formations', localField: 'EnseignementsT.idEnseignement' , foreignField: '_id' , as: 'EnseignementEnseignee'}}
            ])
            if(response){
                res.json(response)
            }
            else{
                res.json({success : false , message : "Echec lors de l'édition du récapitulatif"})
            }
    })
 }


  getEnseignementGroupeDetailsEnseignant(app,UserModel) {
    app.post('/api/enseignant/EnseignementGroupeDetail' , async (req,res) => {
            const{idEnseignant} = req.body;
            const response = await UserModel.aggregate(
            [
            {$match:  {"_id": ObjectId(idEnseignant)}},
            {$lookup: {from: 'enseignements', localField: '_id' , foreignField: 'idEnseignant' , as : 'EnseignementsT'}},
            {$lookup: {from: 'formations', localField: 'EnseignementsT.idEnseignement' , foreignField: '_id' , as: 'EnseignementEnseignee'}}
            ])
            if(response){
                res.json(response)
            }
            else{
                res.json({success : false , message : "Echec lors de l'édition du récapitulatif"})
            }
    })
 }





}



module.exports = EnseignantAPI;
