const mongoose = require('mongoose')

// schema dans la base de données
const EnseignementSchema = new mongoose.Schema({
    idEnseignant: mongoose.Schema.Types.ObjectId,
    idEnseignement: mongoose.Schema.Types.ObjectId,
})

const Enseignement = mongoose.model('Enseignement', EnseignementSchema)

module.exports = Enseignement
