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
        res.render('Ride');
    }
    aboutrender(req,res){
        // res.sendFile(path.join(path.resolve(),'src','views','HTML','about.html'));
        res.render('about');
    }
    business(req,res){
        res.render('businesssign');
    }
    signup(req,res){
        productmodelobj.addUser(req.body);
        res.render('Home',{errormsg:error})
    }
    signin(req,res){
        // console.log(req.body);
        const ispresent=productmodelobj.findUser(req.body)
        if(!ispresent){
            error="User not found";
            res.render('Home',{errormsg:error})
        }
        else
        res.render('Home',{errormsg:error});
    }
}