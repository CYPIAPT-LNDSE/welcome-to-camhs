'use strict';

const nodemailer = require('nodemailer');
require('env2')(`${__dirname}/../.env`);

const emailBodyBuilder = require('./email-body.js');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS
  }
});

function sendMail(emailAddress, emailContent, cb){

  const emailBody = emailBodyBuilder.buildEmail(emailContent);

  let mailOptions = {
    from: '"CAMHS 😀" <welcome.to.cahms@hotmail.co.uk>',
    subject: 'Getting to know you Questionnaire',
    text: 'Questionnaire',
    html: emailBody,
    to: emailAddress
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return cb(error)
    }
    return cb(null, `Message ${info.messageId} sent: ${info.response}`)
  });
}

module.exports = sendMail;
