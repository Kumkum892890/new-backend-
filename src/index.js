import dotnv from "dotenv";
import mongoose, { connect } from "mongoose";
import {DB_NAME} from "./constants.js";
import app from "./app.js";



dotenv.config({
  path: './env'
})

connectDB()
.then(() =>{
  app.on("error", (error) =>{
    console.log("ERRRR...", error);
   throw error
  })
  app.listen(process.env.PORT || 8000 ,() =>{
    console.log(` Q server is running on port :${process.env.PORT}`);
  })
})
.catch((err) =>{
  console.log("mongo db connection failed!!!" , err)
})










// import express from "express";
import connectDB from "./db/index.js";

// (async () =>{
//     try {
//       console.log(
//     "mongo URI:",
//      process.env.MONGODB_URI?.replace(/\/\/[^/@]+@/, "//***:***@")
//   );
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`) 
//       app.on("error", (error) => {
//         console.log("ERRR:" , error);
//         throw error
//       }) 
//       app.listen(process.env.PORT ,() => {
//         console.log(`app is listening  on port ${process.env.PORT}`)
//       })
//     } catch (error) {
//      console.log("ERROR :" , error)
//      process.exit(1);       
//     }
// })()