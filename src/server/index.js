
//dépendance
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const mongoose = require('mongoose')

// models
const UserModel = require('./models/userModel')
const FormationModel = require('./models/FormationModel')
const EnseignementModel = require('./models/EnseignementModel')
const GroupeModel = require('./models/GroupeModel')

// api
const AuthAPIClass = require('./api/auths/AuthAPI');
const AdminAPIClass = require('./api/users/admin/AdminAPI');
const EnseignantAPIClass = require('./api/users/enseignant/EnseignantAPI');
const FormationAPIClass = require('./api/formation/FormationAPI');
const SharedAPIClass  =  require('./api/users/shared/SharedAPI');

//Mise en place de express
const app = express()

// Connexion à la base de données avec mongoose
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
const enseignantApi = new EnseignantAPIClass();
const formationAPI = new FormationAPIClass();
const sharedAPI = new SharedAPIClass();

// ROUTES
/********************/
// Authentification
/********************/
authApi.logUserIn(app,UserModel)

/**************************/
//USERS
/**************************/
//admin
adminApi.ajouterEnseignant(app,UserModel)
adminApi.modifierEnseignant(app,UserModel)
adminApi.supprimerEnseignant(app,UserModel)
adminApi.listeEnseignants(app,UserModel)
adminApi.inscriptionEnseignantModules(app,EnseignementModel)
adminApi.desinscriptionEnseignantModules(app,EnseignementModel)
adminApi.attributionGroupeEnseignant(app,GroupeModel)
adminApi.getGroupesAttribuerACetEnseignant(app,GroupeModel)

//Enseignant
enseignantApi.getEnseignantInformationById(app,UserModel)
enseignantApi.getListModulesEnseignees(app,UserModel)
enseignantApi.inscriptionEnseignantModule(app,EnseignementModel)
/**************************/
//Shared between users
/**************************/
sharedAPI.modificationProfilUtilisateur(app,UserModel);
/**************************/
//Formation
/**************************/
formationAPI.getAllFormations(app,FormationModel)
formationAPI.getModuleFormationsByNiveauAndSemestre(app,FormationModel)
formationAPI.getModuleFormationById(app,FormationModel)
