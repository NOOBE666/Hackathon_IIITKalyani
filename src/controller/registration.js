import Business from "../models/business-model.js";
import jwt from 'jsonwebtoken';



const business_obj= new Business();
export default class business{
   golive(req,res){
        const id=req.params._id;
        const API_KEY=process.env.GOOGLE_MAPS_API;
        res.render('go_live',{API_KEY:API_KEY,id:id});
   }
   async dashboard(req,res){
    const id=req.params._id;
        const list= await business_obj.getstations(id);
        // console.log(list);
        res.render('dashboard',{list:list,id:id});
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
        res.cookie('id',id)
        res.redirect(`/Business/${id}/dashboard`);
        } catch (error) {
            console.log(error);
        }
    }
   async find_user(req,res){
        const given_deatils=req.body;
        try {
            const user=await business_obj.findUser(given_deatils);
            if (!user) {
                // error="User not found";
                res.redirect('/Business');
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
              res.cookie('id',id)
              res.redirect(`/Business/${id}/dashboard`);
              }
            } catch (error) {
            console.log(error);
        }
    }
    async addstations(req,res){
      const id=req.params._id;
      const user= await business_obj.findUser({_id:id});
      const station=req.body.Station;
      await business_obj.addstation(station,user);
      res.redirect(`/Business/${id}/dashboard`)
  }
    async deletestations(req,res){
      const id=req.params._id;
      const index=req.params.id;
      const station= await business_obj.deletestation(id,index);
      res.redirect(`/Business/${id}/dashboard`);
    }
}