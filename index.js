const express = require("express");
const app = express();
const cors = require("cors");
const emailNotification = require("./routes/emailNotification");
const others = require("./routes/other");
<<<<<<< HEAD
const dbConnect = require("./connections/connectDB");
const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const studentSchema = new Schema({
  fName: String,
  lName: String,
  email: String,
});

const Student = model("Student", studentSchema);
=======
const dbConnect = require("./connections/dbConnect");
const mongoose = require("mongoose");
const {insertIntoCounselorInfo,display}=require("./controllers/counselors/counselorInfo.js")
>>>>>>> e7776154e40be92689b5f6eaefc1af4df696fe20
//this is used to handle json data from the front end
app.use(express.json());
// this handles cross platform of information due to different server for the project
app.use(cors());
// this is a based url used with routes
app.use("/api/email/notification", emailNotification);
app.use(others);


dbConnect();
mongoose.connection.once("open", () => {
  // insertIntoCounselorInfo()
display()
  app.listen(5000, () => {
    console.log("Server started and listening on port 500..");
  });
});
