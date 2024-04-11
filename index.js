import express from "express";
import path from "path";
import PageController from "./src/controller/page.js";
const server=express();
server.set('view engine','ejs');
server.set('views',path.join(path.resolve(), 'src', 'views','HTML'))
server.use(express.urlencoded({extended:false}));
server.use(express.static(path.join('src','views')));
server.use(express.static(path.join('src','public')));
server.use(express.static(path.join('src','controller')));
let pages=new PageController();
server.get('/',pages.homerender)
server.get('/Ride',pages.riderender)
server.get('/Business',pages.business)
server.get('/About',pages.aboutrender)
server.post('/signin',pages.signin)
server.post('/signup',pages.signup)
export default server;