const mongoose = require('mongoose')

// schema dans la base de données
const EnseignementSchema = new mongoose.Schema({
    idEnseignant: mongoose.Schema.Types.ObjectId,
    idEnseignement: mongoose.Schema.Types.ObjectId,
    groupeCM: mongoose.Schema.Types.Number,
    groupeTD: mongoose.Schema.Types.Number,
    groupeTP: mongoose.Schema.Types.Number,
})

const Enseignement = mongoose.model('Enseignement', EnseignementSchema)

module.exports = Enseignement
