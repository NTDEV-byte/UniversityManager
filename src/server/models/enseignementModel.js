const mongoose = require('mongoose')

// schema dans la base de données
const EnseignementSchema = new mongoose.Schema({
    groupeCM: mongoose.Schema.Types.String,
    groupeTD: mongoose.Schema.Types.String,
    groupeTP: mongoose.Schema.Types.String,
    idEnseignant: mongoose.Schema.Types.ObjectId,
    idEnseignement: mongoose.Schema.Types.ObjectId,
})

const Enseignement = mongoose.model('enseignement', EnseignementSchema)

module.exports = Enseignement
