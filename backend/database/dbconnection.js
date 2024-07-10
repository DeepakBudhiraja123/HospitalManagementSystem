import mongoose from "mongoose"

export const dbconnection = ()=>{
    mongoose.connect(process.env.MONGO_URL, {
        dbName: "Hospital_Managment"
    }).then(()=>{
        console.log("Connected to database");
    }).catch((error)=>{
        console.log(`Error occured: ${error}`);
    })
}