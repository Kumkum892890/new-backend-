// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path : './env'
})



connectDB()















const connectDB = async()=> {
 try{
 const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
 console.log(`\n mongoDB connect !! DB HOST: ${connectionInstance.connection.host}`)
 }
 catch(error){
    console.log("MONGODB connection error");
    process.exit(1);
 }
}
export default connectDB;