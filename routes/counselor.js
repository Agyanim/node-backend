const express=require("express")
const router=express.Router()
const {getCounselor,sendCounselor,updateCounselor,deleteCounselor}=require("../controllers/api/counselor.js")

router.get("/",getCounselor)
router.post("/",sendCounselor)
router.put("/:id",updateCounselor)
router.delete("/:id",deleteCounselor)


module.exports=router