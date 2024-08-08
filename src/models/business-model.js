import { businessSchema } from "./schemas.js";
import mongoose from "mongoose";


const businessUser= mongoose.model('Business',businessSchema);

class Business{
    async getstations(id){
        const user= await businessUser.findById(id);
        return user.station;
    }
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
    async findUser(userdetails){
        try {
            const user= await businessUser.findOne(userdetails);
            if(user){
                return user;
            }
            else{
                console.log("User not found");
                return false;
            }
        } catch (error) {
            console.log(error);
            return false;
        }
    }
    async addstation(station,user){
        user.station.push(station);
        await user.save();
    }
    async deletestation(id,index){
        const user= await businessUser.findById(id);
        console.log(user)
        user.station.splice(index,1);
        console.log(user.station)
        await user.save()
    }
    async getAll(){
        const user= await businessUser.find({});
        // console.log(user)
        return user;
    }
}

export default Business;