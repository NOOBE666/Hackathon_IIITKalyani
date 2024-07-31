import mongoose from "mongoose";
const connectionURL=process.env.MONGO_DB
export const connecttoDB = async ()=>{
    try {
        await mongoose.connect(connectionURL+"/GoBus",{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log("Connected to mongoDB");
        
    } catch (error) {
        console.log("Error:- "+error);
    }
}