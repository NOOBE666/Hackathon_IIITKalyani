import mongoose from "mongoose";
import { businessSchema } from "../models/schemas.js";

const businessUser= mongoose.model('Business',businessSchema);



export const pushlocation=async (req,res)=>{
    const location=req.body;
    console.log(location)
    const id=req.params.id;
    const user= await businessUser.findById(id);
    if (!user) {
        res.json({error:"Id of the user is wrong & so the user is not found"});
    } else {
        user.location.lat=location.lat;
        user.location.lng=location.lng;
        const saved_user= await user.save();
    }
}