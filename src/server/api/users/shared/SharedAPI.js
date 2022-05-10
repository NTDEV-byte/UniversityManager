
class SharedAPI {

    modificationProfilUtilisateur(app,UserModel){
          app.post("/api/shared/modificationProfil" ,async (req , res) => {

            const {id , nom , prenom , email , password} = req.body;

            const reponse = await UserModel.findOneAndUpdate({"_id" : id} , {"nom" :  nom , "prenom" : prenom  , "email" :  email  , "password": password} , {new : true});
            
            if(reponse){
                    //console.log("User Updated !");
                    return res.json(reponse);
            }
            else{
                    return res.json({message : "Erreur lors de la mise à jour du profil" , success : false});
            }       
         })
    }
}


module.exports = SharedAPI;
