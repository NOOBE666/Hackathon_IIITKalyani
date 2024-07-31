import jwt from 'jsonwebtoken'
import ProductModel from '../models/user-model.js';
const productmodelobj=new ProductModel()
var error;
export default class PageController{
    homerender(req,res){
        res.render('Home',{errormsg:error,CSS:"/CSS/Home.css"});
    }
    async riderender(req,res){
        
        res.render('Ride',{list:null,api_key:process.env.GOOGLE_MAPS_API,CSS:"/CSS/Ride.css",errormsg:error});
    }
    aboutrender(req,res){
        res.render('about');
    }
    business(req,res){
        res.render('business');
    }
    async signup(req, res) {
      // console.log(req.body)
        const user=await productmodelobj.addUser(req.body);
        if(user){
        try {
          // console.log(req.body);
          await productmodelobj.addUser(req.body);
          res.redirect('/Ride');
        } catch (error) {
          console.error(error);
          res.status(500).send("Error adding user");
        }
    }
    error="User already Exists";
    res.redirect('/');
      }
      async signin(req, res) {
        try {
          // console.log(req.body);
          const user = await productmodelobj.findUser(req.body);
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
          res.redirect('/Ride');
        } catch (error) {
          console.error(error);
          res.status(404).send("User not found");
        }
      }
}