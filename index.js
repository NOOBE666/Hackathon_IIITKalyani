import express from "express";
import path from "path";
import PageController from "./src/controller/page.js";
const server=express();
server.use(express.static(path.join('src','views')));
server.use(express.static(path.join('src','public')));
server.use(express.static(path.join('src','controller')));
let pages=new PageController();
server.get('/',pages.homerender)
server.get('/Ride',pages.riderender)
server.get('/About',pages.aboutrender)
export default server; 

