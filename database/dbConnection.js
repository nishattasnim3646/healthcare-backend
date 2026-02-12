import { application } from "express";
import mongoose from "mongoose"; 

export const dbConnection = ()=> {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "Healthcare-Web-Application-Development",
    }).then(()=>{
        console.log("Connected to database successfully!");
    }).catch((err)=>{
        console.error(`Database connection failed: ${err}`);
    });
}