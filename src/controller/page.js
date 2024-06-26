import path from 'path';
import ProductModel from '../models/user-model.js';
const productmodelobj=new ProductModel()
var error;
export default class PageController{
    homerender(req,res){
        // res.sendFile(path.join(path.resolve(),'src','views','HTML','Home.html'));
        res.render('Home',{errormsg:error});
    }
    riderender(req,res){
        // res.sendFile(path.join(path.resolve(),'src','views','HTML','Ride.html'));
        res.render('Ride',{list:null});
    }
    aboutrender(req,res){
        // res.sendFile(path.join(path.resolve(),'src','views','HTML','about.html'));
        res.render('about');
    }
    business(req,res){
        res.render('business');
    }
    // signup(req,res){
    //     productmodelobj.addUser(req.body);
    //     res.render('Home',{errormsg:error})
    // }
    // signin(req,res){
    //     // console.log(req.body);
    //     const ispresent=productmodelobj.findUser(req.body)
    //     if(!ispresent){
    //         error="User not found";
    //         res.render('Home',{errormsg:error})
    //     }
    //     else
    //     res.render('Home',{errormsg:error});
    // }
    async signup(req, res) {
        const user=await productmodelobj.addUser(req.body);
        if(user){
        try {
          console.log(req.body);
        //   await productmodelobj.addUser(req.body);
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
          res.redirect('/');
        } catch (error) {
          console.error(error);
          res.status(404).send("User not found");
        }
      }
}