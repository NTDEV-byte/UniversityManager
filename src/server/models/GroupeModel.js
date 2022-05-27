const mongoose = require('mongoose');

const groupeSchema = new mongoose.Schema({
    nomGroupe : String,
    typeGroupe: String,
    nombreEtudiants: Number,
    idEnseignement: mongoose.Schema.Types.ObjectId,
    idEnseignant: mongoose.Schema.Types.ObjectId,
    attribuee : Boolean
})

const groupe = mongoose.model('groupe' , groupeSchema);

module.exports = groupe
