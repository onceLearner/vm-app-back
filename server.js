const express = require("express");
const app = express();
const bcrypt = require('bcrypt');
const cors = require('cors');
const bodyParser= require("body-parser")


const mongoose = require("mongoose");
mongoose.Promise = global.Promise;




var vmModel = require("./model/vm.js");
const {index,controller_get_one,controller_get_all,controller_Add,controller_update,controller_delete} = require("./controller/vm_controller");


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));




// test


const db_url_v2 = "mongodb://reda:reda12345@cluster0-shard-00-00.ehqxy.azure.mongodb.net:27017,cluster0-shard-00-01.ehqxy.azure.mongodb.net:27017,cluster0-shard-00-02.ehqxy.azure.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-ivsrg4-shard-0&authSource=admin&retryWrites=true&w=majority"

// Je sais pas, mais le probleme produit en la seance d'exam etait du au fait d'avoir utiliser le lien
// qui est normalement destinee pour Mongoose v4, pourtant c'est le lien relative a la version 2 qui a marche !
const db_url_v4 = "mongodb+srv://reda:reda12345@cluster0.ehqxy.azure.mongodb.net/app?retryWrites=true&w=majority"



try {
  mongoose.connect( db_url_v2, {useNewUrlParser: true, useUnifiedTopology: true}, () =>
      console.log("connected"));
}catch (error) {
  console.log("could not connect");
}





app.get("/",index );


// Les cruds  des machines virtuelles
app.get("/vms",controller_get_all );
app.get("/vms/:ip",controller_get_one);
app.post("/vms1", controller_Add);
app.put("/vms/:ip", controller_update);
app.delete("/vms/:ip",controller_delete)





const port = process.env.PORT || 5001

const run = () =>{
  app.listen(port, ()=>{
    console.log("app is running under port number " +port)
  })
}


run()


