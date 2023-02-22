const mongoose=require("mongoose")
const {Schema,model}=mongoose

const counselorSchema= new Schema({
    fName:String,
    lName:String,
    dob:String,
    telephon:String
    
})
const CounselorInfo=model("CounselorInfo",counselorSchema)
module.exports=CounselorInfo