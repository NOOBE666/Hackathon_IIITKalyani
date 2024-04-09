import path from 'path';
export default class PageController{
    homerender(req,res){
        // res.sendFile(path.join(path.resolve(),'src','views','HTML','Home.html'));
        res.render('Home');
    }
    riderender(req,res){
        // res.sendFile(path.join(path.resolve(),'src','views','HTML','Ride.html'));
        res.render('Ride');
    }
    aboutrender(req,res){
        // res.sendFile(path.join(path.resolve(),'src','views','HTML','about.html'));
        res.render('about');
    }
}