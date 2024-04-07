//Designing a automatic mailer for users to send mail about special discounts and events and also email conformation and other udates
//The mailer is incomplete
//Company mail is needed
//array of user using DOM 
//Creating an user inter face for an easy email send to user by the web admin
class Mailer{
    constructor(){
        const nodemailer=require('nodemailer');
        //Creating transporter
        const trasport=nodemailer.createTransport({
            service:'Gmail',
            auth:{
                //needs to be given
                user:'',
                pass:''
            }
        });
        const mailOptions={
            from:'',
            to:array_of_users,
            subject:Perticular_Subject,
            text:given_test
        }
        //Sent mail
        trasport.sendMail(mailOptions,(err,info)=>{
            if(err){
                console.log("Error");
            }
            else{
                console.log("Main sent");
            }
        })
    }
}
module.exports={Mailer};