  //console.log("I am in express project ");

  const express = require("express");
  const errorHandler = require("./middleware/errorHandler");
  const connectDb = require("./config/dbConnection");
  const dotenv = require("dotenv").config();

  connectDb();
  const app=express();
  //const port=5000; 
  const port = process.env.PORT || 5000;

  //app.get('/api/contacts',(req,res) =>{ //arrow function?
    //res.send("Get all contacts");
    //res.json({message:"Get all contacts"});
    //res.status(200).json({message:"Get all contacts"});
  //})

  app.use(express.json()); //parser for HTTP body
  app.use("/api/contacts", require("./routes/contactRoutes"));
  app.use("/api/users", require("./routes/userRoutes")); //middle ware
  app.use(errorHandler); //middle ware for errorHandling

  app.listen(port,() =>{
    console.log(`Server running on port ${port}`);
  });