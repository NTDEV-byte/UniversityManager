const { ModuleResolver } = require('@angular/compiler-cli/src/ngtsc/imports');
const mongoose = require('mongoose');

const groupeSchema = mongoose.Schema({

    nomGroupe : String,
    nombreEtudiants: Number,
    idEnseignement: mongoose.Schema.Types.ObjectId(),
    idEnseignant: mongoose.Schema.Types.ObjectId(),
})


const groupe = mongoose.model('groupe' , groupeSchema);


module.exports = groupe
