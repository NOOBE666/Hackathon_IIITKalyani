import Business from "../models/business-model.js";
import jwt from 'jsonwebtoken';



const business_obj= new Business();
export default class business{
   dashboard(req,res){
        res.render('go_live');
   }
   async add_user(req,res){
        const details=req.body;
        // console.log(details);
        try {
          const user = await business_obj.addUser(details); 
          console.log(user);
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
        const id=user._id;
        res.redirect(`/Business/go_live/${id}`);
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
              const id= user._id;
              res.cookie('jwtToken',token);
              res.redirect(`/Business/go_live/${id}`);
              }
            } catch (error) {
            console.log(error);
        }
    }
}