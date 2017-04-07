'use strict';

const handelbars = require('handlebars');
const fs = require('fs');
const path = require('path');

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

function sendMail(emailAddress, emailContent, cb){

  const emailTemplate = fs.readFileSync(path.join(__dirname, 'templates', 'views', 'email.hbs'), 'utf8');
  const template = handelbars.compile(emailTemplate);
  const emailBody = template(emailContent);

  const mailOptions = {
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
