const express = require("express");
const app = express();
const cors = require("cors");
const emailNotification = require("./routes/emailNotification");
const others = require("./routes/other");
const dbConnect = require("./connections/connectDB");
const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const studentSchema = new Schema({
  fName: String,
  lName: String,
  email: String,
});

const Student = model("Student", studentSchema);
//this is used to handle json data from the front end
app.use(express.json());
// this handles cross platform of information due to different server for the project
app.use(cors());
// this is a based url used with routes
app.use("/api/email/notification", emailNotification);
app.use(others);
dbConnect();
const insertIntoStudent = Student.create({
  fName: "Eric",
  lName: "Okai",
  email: "agyanim@yahoo.com",
});

mongoose.connection.once("open", () => {
  const insertIntoStudent = Student.create({
    fName: "Eric",
    lName: "Okai",
    email: "agyanim@yahoo.com",
  });
  
  // const display =Student.findOne({fName:"Gideon"})
  // console.log(display);
  app.listen(5000, () => {
    console.log("Server started and listening on port 500..");
  });
});
