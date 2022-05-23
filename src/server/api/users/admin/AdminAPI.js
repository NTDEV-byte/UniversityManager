const { ObjectId } = require("mongodb");

class AdminAPI{


    testRequete(app,UserModel){
        app.post('/jointure' , async (req , res) => {
               console.log("Route jointure called !")

           // const response = EnseignementModel.create({"idEnseignant" : ObjectId(), "idEnseignement" : ObjectId()});
            

          const response = await UserModel.aggregate(
                [
                    {$match: {role : 'enseignant'}},
                    {$lookup : {from : 'enseignements' , localField: '_id' , foreignField: 'idEnseignant' , as : 'teaches'},},
                    {$unwind : "$teaches"},
                    {$lookup : {from : 'formations' , localField: 'teaches.idEnseignement', foreignField: '_id' , as: 'sortie'}}
                
                ]
                ) 

           if(response){
            console.log(response)   
            res.json(response)
                } 
        })
    }

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
               const user = await UserModel.findOneAndUpdate({"_id" : req.body.id} , {"nom" : req.body.nom , "prenom" : req.body.prenom  , "email" : req.body.email  , "statut" : req.body.statut , "role" : req.body.role } , {new : true});
               console.log(user);
               if(user){
                console.log("User Found !")
                console.log(user)
                    res.json({
                        success : true,
                        message : "Utilisateur modifier avec succès"
                    });
                }
                else{
                console.log("User Not Found !")
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
            const resp =  await UserModel.find({role : 'enseignant'});   
            res.json(resp)
      }) 
    }

}

module.exports = AdminAPI;