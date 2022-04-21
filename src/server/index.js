const express = require('express')
const bodyParser = require('body-parser')
const app = express()

let cors = require('cors');
app.use(cors());
app.use(bodyParser.json())

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

app.post('/routeTest', (req,res) =>{
    console.log(req.body)
    console.log("Posted One ! ");
})

app.listen(8888,() => console.log('Server listenning at 8888 port ...'))


// partie base de données 


