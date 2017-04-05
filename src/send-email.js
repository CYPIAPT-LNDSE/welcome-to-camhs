'use strict';

const nodemailer = require('nodemailer');
require('env2')(`${__dirname}/../.env`);

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS
  }
});

function sendMail(emailAddress, cb){

  const mailOptions = {
    from: '"CAHMS 👻" <welcome.to.cahms@hotmail.co.uk>',
    subject: 'CAHMS Questionnaire',
    text: 'Questionnaire',
    html: '<b>Questionnaire answers will be here :)</b>',
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
