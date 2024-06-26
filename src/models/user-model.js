import {userSchema} from './schemas.js'
import mongoose from 'mongoose'
// // var user=[];

// // class ProductModel{
// //     addUser(objUser){
// //         // console.log(objUser)
// //         let Userid=user.length;
// //         objUser["id"]=Userid;
// //         user.push(objUser);
// //         // console.log(user);
// //     }
// //     findUser(objUser){
// //         const present=user.find(p=>p.userEmail==objUser.userEmail && p.userPassword==objUser.userPassword);
// //         // console.log(present);
// //         return present;
// //     }
// // }
// // export default ProductModel;
// import mongoose from "mongoose";

// // Define a Mongoose schema for user data
// const userSchema = new mongoose.Schema({
//   number: String,
//   email: String,
//   password: String,
//   // Add more fields as needed
// });

// // Create a Mongoose model based on the schema
// const UserModel = mongoose.model("User", userSchema);

// // Connect to MongoDB Atlas cluster
// mongoose.connect(
//   "mongodb+srv://sign_in_userT8vLh4hqLmNzqBH:0T8vLh4hqLmNzqBH@cluster0.e9clfcm.mongodb.net/user_data"
// );
// const db = mongoose.connection;
// mongoose.set("debug", true);

// // Check for DB connection errors
// db.on("error", console.error.bind(console, "MongoDB connection error:"));

// class ProductModel {
//   async addUser(objUser) {
//     const user=this.findUser(objUser);
//       if(!user){
//     try {
//       // Create a new user document and save it to the database
//       await UserModel.create(objUser);
//       console.log("User added successfully:", objUser);
//       console.log("Database:", await UserModel.find({}).exec());
//     } catch (err) {
//       console.error(err);
//       throw new Error("Error adding user");
//     }
// }
// else{
//     return false;
// }
//   }

//   async findUser(objUser) {
//     try {
//       // Find the user in the database
//       const user = await UserModel.findOne({
//         number: objUser.number,
//         password: objUser.password,
//       });
//       if (!user) {
//         return false;
//       }
//       return user;
//     } catch (err) {
//       console.error(err);
//       throw new Error("Error finding user");
//     }
//   }
// }

// export default ProductModel;
const User= mongoose.model('User',userSchema);
class ProductModel{
    // Addaing a new user
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
  async findUser(userDetails){
    try {
        const users= await User.findOne(userDetails);
        if (users) {
            return users;
        }
    } catch (error) {
        console.log(error);
    }
  }
}
export default ProductModel;