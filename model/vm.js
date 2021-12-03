var mongoose = require('mongoose');
var Schema = mongoose.Schema;

VMSchema = new Schema( {
	nom: String,
	ip: String,
	systeme:String,
	etat:Boolean
}),
Vm = mongoose.model('vm', VMSchema);

module.exports = Vm;