
class SharedAPI {

    modificationProfilUtilisateur(app,UserModel){
          app.post("/api/shared/modificationProfil" ,async (req , res) => {

             
            const {id , nom , prenom , email , password} = req.body;
            console.log(req.body);
           
                try{
                        const reponse = await UserModel.findOneAndUpdate({"_id" : id} , {"nom" :  nom , "prenom" : prenom  , "email" :  email  , "password": password} , {new : true});
                        if(reponse){
                                return res.json({reponse , "success" : true});
                        }
                        else{
                                return res.json({message : "Erreur lors de la mise à jour du profil" , "success" : false});
                        }   
                }
                catch(e){
                        return res.json({message : "Erreur lors de la mise à jour du profil" , "success" : false});
                }
               
         })
    }
}


module.exports = SharedAPI;
