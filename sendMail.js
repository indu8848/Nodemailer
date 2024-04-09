const nodeMailer = require('nodemailer');
require("dotenv").config();


const transporter = nodeMailer.createTransport({
    service:'gmail',
    host: "smtp.gmail.email",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.USER,
      pass: process.env.APP_PASSWORD,
    },
  });
  
  let mailOptions = {
    from: process.env.USER,
    to: 'ammusss432@gmail.com',
    subject: 'Test Email',
    text: 'Hello, this is a test email!'
};

const sendMail = async (transporter, mailOptions) => {
    try{
        await transporter.sendMail(mailOptions)
        console.log('Email has been sent successfully');
    }catch (error) {
        console.error;
    
    }
}


  sendMail(transporter, mailOptions);