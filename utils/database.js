import mongoose from "mongoose";

let isConnected= false; //track the connection

export const connectToDB= async()=>{
    mongoose.set('strictQuery', true);
    if(isConnected){
        console.log("MongoDB is already connected");
        return;
    }
    console.log("MongoDB URI:", process.env.MONGODB_URI);

    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt",
        })

        isConnected=true;
        console.log("MongoDB is connected");
    }catch(error){
    console.log(error);
    }
}