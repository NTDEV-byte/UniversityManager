const mongoose = require('mongoose')

// schéma dans la base de données
const UserSchema = new mongoose.Schema({
    nom: String,
    prenom: String,
    email: String,
    password: String,
    statut : String,
    role : String,
    uc : String,
})

const User = mongoose.model('User', UserSchema)

module.exports = User
