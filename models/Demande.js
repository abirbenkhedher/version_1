const mongoose = require('mongoose');

const  Schema  = mongoose.Schema;

const demandeSchema = new Schema({
    nom_club: {type: String , required: true },
    description:{type: String, required: true },
    etat:{type: String, required: true , default : "en cours"},
    professeur: {type: mongoose.Schema.ObjectId, ref: 'prof'}
});

module.exports = Demande= mongoose.model("demande",demandeSchema);