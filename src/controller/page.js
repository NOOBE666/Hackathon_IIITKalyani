import path from 'path';
import jwt from 'jsonwebtoken'
import ProductModel from '../models/user-model.js';
import { jwt_validator } from './jwt_validator.js';
const productmodelobj=new ProductModel()
var error;
var present=false;
export default class PageController{
    homerender(req,res){
        // res.sendFile(path.join(path.resolve(),'src','views','HTML','Home.html'));
        res.render('Home',{errormsg:error});
    }
    riderender(req,res){
        // res.sendFile(path.join(path.resolve(),'src','views','HTML','Ride.html'));
        res.render('Ride',{list:null,api_key:process.env.GOOGLE_MAPS_API,token:present});
    }
    aboutrender(req,res){
        // res.sendFile(path.join(path.resolve(),'src','views','HTML','about.html'));
        res.render('about');
    }
    business(req,res){
        res.render('business');
    }
    async signup(req, res) {
        const user=await productmodelobj.addUser(req.body);
        if(user){
        try {
          console.log(req.body);
          await productmodelobj.addUser(req.body);
          res.redirect('/');
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
          console.log(req.body);
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
          present=jwt_validator
          res.redirect('/');
        } catch (error) {
          console.error(error);
          res.status(404).send("User not found");
        }
      }
}