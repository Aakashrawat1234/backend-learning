import mongoose from "mongoose";

const connectDB=async ()=>{
    try{
      await  mongoose.connect(process.env.MONGODB_URL)
      console.log("connected to the database");
    }
    catch(e){
        console.log("DB eroor",e);
    }
}

export default connectDB;