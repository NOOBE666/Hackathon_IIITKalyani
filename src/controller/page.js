import path from 'path';
export default class PageController{
    homerender(req,res){
        res.sendFile(path.join(path.resolve(),'src','views','HTML','Home.html'));
    }
    riderender(req,res){
        res.sendFile(path.join(path.resolve(),'src','views','HTML','Ride.html'));
    }
    aboutrender(req,res){
        res.sendFile(path.join(path.resolve(),'src','views','HTML','about.html'));
    }
}