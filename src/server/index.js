
//dépendance
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const mongoose = require('mongoose')

// models
const UserModel = require('./models/userModel')
const FormationModel = require('./models/formationModel')

// api
const AuthAPIClass = require('./api/auths/AuthAPI');
const AdminAPIClass = require('./api/users/admin/AdminAPI');
const FormationAPIClass = require('./api/formation/FormationAPI');


//Mise en place de express
const app = express()

// connexion a la base de données avec mongoose
mongoose.Promise = Promise; // mode promise au lieu des callbacks
mongoose.connect('mongodb://localhost:27017/projet')
.then(() => {
    console.log('Connected to mongoDB')
})
// lancement du serveur
app.use(cors());
app.use(bodyParser.json())
app.listen(8888,() => console.log('Server listenning at 8888 port ...'))


// API Logique Mise en Place
const authApi = new AuthAPIClass();
const adminApi = new AdminAPIClass();
const formationAPI = new FormationAPIClass();

// routes 

// authentification
authApi.logUserIn(app,UserModel)

//admin
adminApi.ajouterEnseignant(app,UserModel)
adminApi.modifierEnseignant(app,UserModel)
adminApi.supprimerEnseignant(app,UserModel)
adminApi.listeEnseignants(app,UserModel)

//modules
formationAPI.getAllFormations(app,FormationModel)
formationAPI.getModuleFormationsByNiveauAndSemestre(app,FormationModel)