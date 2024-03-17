//Using express to create the server
const express=require('express');
const server=express();
//server listening
server.listen(3000,()=>{
    console.log('Server is listening at 3000');
})