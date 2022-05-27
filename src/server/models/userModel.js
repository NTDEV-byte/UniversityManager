const mongoose = require('mongoose')

// schema dans la base de données
const UserSchema = new mongoose.Schema({
    nom: String,
    prenom: String,
    email: String,
    password: String,
    statut : String,
    role : String
})

const User = mongoose.model('User', UserSchema)

module.exports = User
