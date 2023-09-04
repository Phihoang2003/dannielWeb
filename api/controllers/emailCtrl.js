import nodemailer from "nodemailer"

import asyncHandler from "express-async-handler"

export const sendEmail=asyncHandler(async(data,req,res)=>{
    const transporter = nodemailer.createTransport({
        service:"gmail",
        host: "smtp.gmail.com",
        port: 265,
        secure: true,
        auth: {
          // TODO: replace `user` and `pass` values from <https://forwardemail.net>
          user: process.env.MAIL_ID,
          pass: process.env.MP
        }
    });

    const info = await transporter.sendMail({
        from: '"Hey User" <phihoang1232003@example.com>', // sender address
        to: data.to, // list of receivers
        subject: data.subject, // Subject line
        text: data.test, // plain text body
        html: data.htm, // html body
    });

    console.log("Message sent: %s", info.messageId);

    
})