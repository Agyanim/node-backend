const express = require("express");
const router = express.Router();
const {getEmail,sendEmail,updateEmail}=require("../controllers/api/emailNotification")

router.get("/api/counselor",getEmail )
router.post("/api/counselor", sendEmail);
router.put("/api/counselor/:id",updateEmail );

module.exports=router