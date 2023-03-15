require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const port = process.env.PORT || 3000;

//Transporter Creation
let transporter = nodemailer.createTransport({
  host: "mail.millenniuminvestment.net",
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
});

//   Mail Options
let mailOptions = {
  from: "Millennium Investment <admin@millenniuminvestment.net>",
  to: "zedpriest@gmail.com",
  subject: "Nodemailer Project",
  sender: "Millennium Investment", 
  html: `<!doctype html>
  <html>
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    </head>
    <body style="font-family: sans-serif;">
      <div style="display: block; margin: auto; max-width: 600px;" class="main">
        <h1 style="font-size: 18px; font-weight: bold; margin-top: 20px">Congrats for sending test email with Mailtrap!</h1>
        <p>Inspect it using the tabs you see above and learn how this email can be improved.</p>
        <p>Now send your email using SMTP server and integration of your choice!</p>
        <p>Good luck! Hope it works.</p>
        <h1 style="font-size: 18px; font-weight: bold; margin-top: 20px">I also wants to say THANK YOU!</h1>
      </div>
      <!-- Example of invalid for email html/css, will be detected by Mailtrap: -->
      <style>
        .main { background-color: white; }
        a:hover { border-left-width: 1em; min-height: 2em; }
      </style>
    </body>
  </html>`,
};

//   Send Mail Method
transporter.sendMail(mailOptions, function (err, data) {
  if (err) {
    console.log("Error " + err);
  } else {
    console.log("Email sent successfully");
  }
});

app.listen(port, () => {
  console.log(`nodemailerProject is listening at http://localhost:${port}`);
});
