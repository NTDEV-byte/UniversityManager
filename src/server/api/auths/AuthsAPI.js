
class AuthsAPI {

    test(app){
        // méthode vu en tp
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

    // inscription

    
    // connexion
    logUserIn(app,UserModel){
        app.post('/api/login' , async (req,res) => {
            const {email,password} = req.body
            console.log(req.body)
            const response = await UserModel.findOne({email,password})
            console.log("reponse Mongo: "+response)
            if(!response){
              // not found
                console.log('utilisateur non trouvé')
            }
            else{
                // creation d'une session
                console.log('utilisateur trouvé')
            }
            res.send("Ok Route correct")
        }) 
    }
}

module.exports = Auths;
