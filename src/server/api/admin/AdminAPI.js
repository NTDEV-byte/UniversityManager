class AdminAPI{

    ajouterEnseignant(app,UserModel){
        app.post('/api/admin/ajouterEnseignant' , async (req,res) => {
                //console.log("Route Catched ajouter Enseignant ! ")
                const {nom,prenom,email,password,role} =  req.body;
                const response = await UserModel.create([{nom , prenom , email, password,role}])

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
                console.log("body")
               console.log(req.body)
               const user = await UserModel.findOneAndUpdate({"_id" : req.body.id} , {"nom" : req.body.nom , "prenom" : req.body.prenom  , "email" : req.body.email  , "role" : req.body.role } , {new : true});
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
               // console.log("Route Catched supprimer enseignant ! ")
        }) 
    }

    listeEnseignants(app,UserModel){
        app.post('/api/admin/listeEnseignant' , async (req,res) => {
          //  console.log("Triggred !")
            const resp =  await UserModel.find();   
           // console.log(resp)
            res.json(resp)
            //res.json(resp)
      }) 
    }

}

module.exports = AdminAPI;