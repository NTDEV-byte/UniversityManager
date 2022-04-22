const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const mongoose = require('mongoose')

// models
const UserModel = require('./models/users')
// api
const Auths = require('./api/auths/AuthsAPI');


//creation d'une instance du serveur Express 
const app = express()
// connexion avec mongoose a la base de données
mongoose.Promise = Promise; // mode promise au lieu des callbacks
mongoose.connect('mongodb://localhost:27017/testing')
.then(() => {
    console.log('Connected to mongoDB')
})
// lancement du serveur
app.use(cors());
app.use(bodyParser.json())
app.listen(8888,() => console.log('Server listenning at 8888 port ...'))





// API Logique
const auth = new Auths()

// routes 

// authentification
auth.logUserIn(app,UserModel)




