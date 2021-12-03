const express = require("express");
const app = express();
const bcrypt = require('bcrypt');
const cors = require('cors');
const mongoose = require("mongoose");

const bodyParser= require("body-parser")

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));





app.get("/", (req, res) => {
  res.status(200).json({
    status: true,
    title: 'Apis'
  });
});



// test
mongoose.Promise = global.Promise;

const db_url = "mongodb+srv://reda:reda12345@cluster0.ehqxy.azure.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"


try {
  mongoose.connect( db_url, {useNewUrlParser: true, useUnifiedTopology: true}, () =>
      console.log("connected"));
}catch (error) {
  console.log("could not connect");
}



const port = process.env.PORT || 5001

const run = () =>{
  app.listen(port, ()=>{
    console.log("app is running under port number " +port)
  })
}


run()
