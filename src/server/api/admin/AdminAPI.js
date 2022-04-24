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
               console.log("Triggred !")
               const resp =  await UserModel.findOne({_id : "6263cb83c481ff2834862463"})
               console.log(resp);
        }) 
    }

    supprimerEnseignant(app,UserModel){
        app.post('/api/admin/supprimerEnseignant' , async (req,res) => {
               // console.log("Route Catched supprimer enseignant ! ")
        }) 
    }

    listeEnseignants(app,UserModel){
        app.post('/api/admin/listeEnseignant' , async (req,res) => {
            console.log("Triggred !")
            const resp =  await UserModel.find();   
            console.log(resp)
            res.json(resp)
            //res.json(resp)
      }) 
    }

}

module.exports = AdminAPI;