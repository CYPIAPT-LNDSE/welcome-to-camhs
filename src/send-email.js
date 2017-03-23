'use strict';

const nodemailer = require('nodemailer');
require('env2')(`${__dirname}/../.env`);

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS
  }
});

// send mail with defined transport object
function sendMail(to){

  let mailOptions = [
    {from: '"CAHMS 👻" <welcome.to.cahms@hotmail.co.uk>'}, // sender address
    {subject: 'CAHMS Questionnaire'}, // Subject line
    {text: 'Questionnaire'}, // plain text body
    {html: '<b>Questionnaire answers will be here :)</b>'} // html body
  ]

  mailOptions.push(to);
  var options = Object.assign.apply(Object, mailOptions);

  transporter.sendMail(options, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
  });
}

module.exports = sendMail;
