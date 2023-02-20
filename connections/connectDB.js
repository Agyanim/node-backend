const mongoose = require("mongoose");
mongoose.set('strictQuery', true)
const dbConnect = async ()=>{
    try {
        await mongoose.connect(
            "mongodb://localhost:27017",
            {
              useUnifiedTopology: true,
              useNewUrlParser: true,
            },
                    
          );
          console.log("connection to mongoDB successfull");

    } catch (error) {
        console.log(error);
    }
}


module.exports = dbConnect;
