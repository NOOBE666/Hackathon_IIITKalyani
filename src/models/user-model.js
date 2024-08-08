import {userSchema} from './schemas.js'
import mongoose from 'mongoose'

// export default ProductModel;
const User= mongoose.model('User',userSchema);
class ProductModel{
    // Adding a new user
  async addUser(userDetails){
    try {
        console.log(userDetails)
        const usersisPresent= await this.findUser(userDetails);
        // console.log(usersisPresent)
        if (!usersisPresent) {
            const new_User= new User(userDetails);
            const savedUser=await new_User.save();
            // console.log(savedUser);
            return savedUser;
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
        const users = await User.findOne(userDetails);
        if (users) {
            return users;
        }
        else{
            return false;
        }
    } catch (error) {
        console.log(error);
    }
  }
}
export default ProductModel;