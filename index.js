const express = require("express");
const app = express();
const cors = require("cors");
const emailNotification = require("./routes/emailNotification.js");
const counselor = require("./routes/counselor.js");
const others = require("./routes/other");
const dbConnect = require("./connections/dbConnect");
const mongoose = require("mongoose");
const {
  insertIntoCounselorInfo,
  display,
} = require("./controllers/db/counselors/counselorInfo.js");
//this is used to handle json data from the front end
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// this handles cross platform of information due to different server for the project
app.use(cors());
// this is a based url used with routes
app.use("/api/email/notification", emailNotification);
app.use("/api/counselor", counselor);
app.use(others);

// Connecting backend to mongoDB server
dbConnect();
mongoose.connection.once("open", () => {
  app.listen(5000, () => {
    console.log("Server started and listening on port 500..");
  });
});
