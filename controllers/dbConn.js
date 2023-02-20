// require("dotenv").config({path:__dirname +'/configuration/.env'})
const mongoose=require("mongoose")
mongoose.set("strictQuery", false);
const connectDB= async ()=>{

  try {
    await mongoose.connect("mongodb://localhost:27017/bbs",{
        useUnifiedTopology:true,
        useNewUrlParser:true
        })
        console.log("connection to mongoDB successful");

  } catch (error) {
    console.log(error);
  }
}

module.exports=connectDB