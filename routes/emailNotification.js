const express = require("express");
const router = express.Router();
const {getEmail,sendEmail,updateEmail}=require("../controllers/api/emailNotification")

router.get("/",getEmail )
router.post("/", sendEmail);
router.put("/:id",updateEmail );

module.exports=router