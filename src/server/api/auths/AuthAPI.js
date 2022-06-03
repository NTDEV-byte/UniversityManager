class AuthsAPI {
    // inscription

    // connexion
    logUserIn(app,UserModel){
        app.post('/api/auths/login' , async (req,res) => {
            const {email,password} = req.body
            const response = await UserModel.findOne({email,password})
            if(!response){
                console.log('utilisateur non trouvé')
                res.json({
                    success: false,
                    message: "Incorrect details !"
                })
            }
            else{
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
