var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'benalayasabrine03@gmail.com',
    pass: '**********'
  }
});

var mailOptions = {
  from: 'benalayasabrine03@gmail.com',
  to: 'benalayasabrine03@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});