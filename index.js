const express = require("express");
const app = express();
const cors = require("cors");
const emailNotification = require("./routes/emailNotification");
const others=require("./routes/other")
const dbConnect=require("./connections/connectDB");
const mongoose  = require("mongoose");
//this is used to handle json data from the front end
app.use(express.json());
// this handles cross platform of information due to different server for the project
app.use(cors());
// this is a based url used with routes 
app.use("/api/email/notification",emailNotification)
app.use(others)
dbConnect()
mongoose.connection.once("open",()=>{
  app.listen(5000, () => {
    console.log("Server started and listening on port 500..");
  });
  
})
