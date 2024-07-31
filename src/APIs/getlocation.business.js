import mongoose from "mongoose";
import { businessSchema } from "../models/schemas.js";

const businessUser= mongoose.model('Business',businessSchema);

export const getlocation_business=async (req,res)=>{
    const id=req.params.id;
    const user= await businessUser.findById(id);
    const location=user.location;
    // console.log(location);
    res.json(location);
}