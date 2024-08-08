import jwt from 'jsonwebtoken'
import ProductModel from '../models/user-model.js';
import Business from '../models/business-model.js';
const productmodelobj=new ProductModel()
const business=new Business();
var error;
export default class PageController{
    homerender(req,res){
      var token=req.cookies.jwtToken;
      if (token) {
       return res.redirect('/Ride')
      }
       return res.render('Home',{errormsg:error,CSS:"/CSS/Home.css"});
    }
    async riderender(req,res){
        var list=await business.getAll()
        // console.log(list)
        res.render('Ride',{list:list,api_key:process.env.GOOGLE_MAPS_API,CSS:"/CSS/Ride.css",errormsg:error});
    }
    aboutrender(req,res){
        res.render('about');
    }
    business(req,res){
        res.render('business');
    }
    async signup(req, res) {
      // console.log(req.body)
        const user_find=await productmodelobj.findUser(req.body);
        if(!user_find){
        try {
          // console.log(req.body);
          const user=await productmodelobj.addUser(req.body);
            const token=jwt.sign({
              userID:user._id,
              email:user.email,
            },
            process.env.SECRET_KEY,
            {
              expiresIn:'1h',
            }
          )
          res.cookie('jwtToken',token,{
            maxAge:60*60*1000,
          });
          return res.redirect('/Ride');
        } catch (error) {
          console.error(error);
          res.status(500).send("Error adding user");
        }
    }
    error="User already Exists";
    return res.redirect('/');
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