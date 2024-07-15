import express from "express";
// import expressEjsLayouts from "express-ejs-layouts";
import cors from 'cors';
import { jwt_validator } from "./src/controller/jwt_validator.js";
import { configDotenv } from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";
import PageController from "./src/controller/page.js";
const server=express();
server.set('view engine','ejs');
server.set('views',path.join(path.resolve(), 'src', 'views','HTML'))
// server.use(expressEjsLayouts)
server.use(express.urlencoded({extended:false}));
server.use(express.static(path.join('src','views')));
server.use(express.static(path.join('src','public')));
server.use(express.static(path.join('src','controller')));
server.use(cookieParser());
server.use(cors());
configDotenv();
let pages=new PageController();
server.get('/',jwt_validator,pages.homerender)
server.get('/Ride',jwt_validator,pages.riderender)
server.get('/Business',jwt_validator,pages.business)
server.get('/About',jwt_validator,pages.aboutrender)

server.post('/signin',pages.signin)
server.post('/signup',pages.signup)
export default server;

