const express=require("express")
const router=express.Router()



router.all("*", (req, res) => {
    res.send("Sorry, The page is not available");
  });
  
  module.exports=router