const mongoose=require("mongoose")
const {Schema,model}=mongoose
// schema declaration for counselor
const counselorSchema= new Schema({
    fName:{
        type:String,
        required:true,
    },
    lName:{
        type:String,
        required:true,
    },
    gender:String,
    dob:Date,
    location:String,
    telephone:String
    
})
// Creating the counselor info model
const CounselorInfo=model("CounselorInfo",counselorSchema)
module.exports=CounselorInfo