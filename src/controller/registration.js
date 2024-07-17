import Business from "../models/business-model.js";
import jwt from 'jsonwebtoken';



const business_obj= new Business();
class business{
   async add_user(req,res){
        const details=req.body;
        try {
           await business_obj.addUser(details); 
        } catch (error) {
            console.log(error);
        }
    }
   async find_user(req,res){
        const given_deatils=req.body;
        try {
            const user=await business_obj.findUser(given_deatils);
            if (!user) {
                error="User not found";
              }
              else{
                const token=jwt.sign({
                  userID:user._id,
                  email:user.email,
                },
                process.env.SECRET_KEY,
                {
                  expiresIn:'1h',
                }
              )
              res.cookie('jwtToken',token);
              }
              res.redirect('/dashboard');
            } catch (error) {
            console.log(error);
        }
    }
}

export default business;