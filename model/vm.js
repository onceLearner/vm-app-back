
var mongoose=require('mongoose');

var VmSchema = new mongoose.Schema({
	ip:String,
	nom:String,
	systeme:String,
	etat:Boolean
});

module.exports = mongoose.model(
	'vm', VmSchema, 'vms');