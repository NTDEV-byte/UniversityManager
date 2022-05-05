const mongoose = require('mongoose')

// schema dans la base de données
const moduleSchema = new mongoose.Schema({
    "Formation": String,
    "Semestre" : Number,
    "Ref" : String,
    "Intitulé" : String,
    "Statut" : String,
    "h/CM" : Number,
    "h/TD" : Number,
    "h/TP" : Number,
    "Effectif" : Number,
    "grCM" : Number,
    "grTD": Number,
    "grTP" : Number,
})

const formations = mongoose.model('Formation', moduleSchema)

module.exports = formations