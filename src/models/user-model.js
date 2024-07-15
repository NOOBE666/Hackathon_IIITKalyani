import {userSchema} from './schemas.js'
import mongoose from 'mongoose'

// export default ProductModel;
const User= mongoose.model('User',userSchema);
class ProductModel{
    // Adding a new user
  async addUser(userDetails){
    try {
        const usersisPresent= await User.findOne(userDetails);
        if (!usersisPresent) {
            const new_User= new User(userDetails);
            const savedUser=await new_User.save();
            console.log("User saved");
        }
        else{
            console.log("User present");
        }
    } catch (error) {
        console.log(error);
    }
  }
  //finding users
  async findUser(userDetails){
    try {
        const users= await User.findOne(userDetails);
        if (users) {
            return users;
        }
        else{
            console.log("User not found");
        }
    } catch (error) {
        console.log(error);
    }
  }
}
export default ProductModel;