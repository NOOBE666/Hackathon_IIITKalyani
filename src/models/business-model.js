import { businessSchema } from "./schemas.js";
import mongoose from "mongoose";


const businessUser= mongoose.model('Business',businessSchema);

class Business{
    async addUser(businessdetails){
        try {
            const user= await businessUser.findOne(businessdetails);
            if (!user) {
                const user=new businessUser(businessdetails);
                const saved_user= await user.save();
                console.log("New user saved");
                return saved_user;
            }
            else{
                console.log("User already present");
            }
        } catch (error) {
            console.log(error);
        }
    }
    async findUser(){
        try {
            const user= await businessUser.findOne();
            if(user){
                return user;
            }
            else{
                console.log("User not found");
            }
        } catch (error) {
            console.log(error);
        }
    }
}

export default Business;