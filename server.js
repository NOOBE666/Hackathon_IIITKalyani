//Using express to create the server
import server from "./index.js";
// const express=require('express');
// const mail=require('./mailsender')
// const server=express();
//Incomplete code
// const Mailer=new mail.Mailer();
//server listening
server.listen(5502,()=>{
    console.log('Server is listening at 5502');
});