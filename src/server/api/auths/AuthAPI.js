class AuthsAPI {
    // inscription
    
    // connexion
    logUserIn(app,UserModel){
        app.post('/api/auths/login' , async (req,res) => {
            const {email,password} = req.body
            //console.log(req.body)
            const response = await UserModel.findOne({email,password})
            //console.log("reponse Mongo: "+response)
            if(!response){
                console.log('utilisateur non trouvé')
                res.json({
                    success: false,
                    message: "Incorrect details !"
                })
            }
            else{
                // creation d'une session
                console.log('utilisateur trouvé')
                console.log(response._id)
                res.json({
                    id : response._id,
                    nom: response.nom,
                    prenom: response.prenom,
                    email: response.email,
                    statut : response.statut,
                    success: true,
                    message: "Connexion Success !",
                    role: response.role
                })
            }
          //  res.send("Ok Route correct") test
        }) 
    }

    logInDBWithMongoDB(app){
        // méthode vu en cours
        let mongo = require('mongodb').MongoClient;
        let url = "mongodb://localhost:27017/HDF";
        app.post('/prefInfo',(req , res) => {
            mongo.connect(url, (err, client) => {
                if (err) throw err;
                console.log("Connection ok !");
                var db = client.db("HDF");
                db.collection("COMMUNES").find({"statut":"Préfecture"}).toArray(
                (err,doc) => {
                console.log(doc);
                res.send(doc);
                });
               });
        })
    }
    
    
}

module.exports = AuthsAPI;
