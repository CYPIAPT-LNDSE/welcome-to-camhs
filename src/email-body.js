// const path = require("path");
// const fs = require("fs");
// const lionImage = fs.readFileSync(`${path.dirname(__filename)}/../public/assets/lion.svg`, 'utf8');
// const lionPath = `${path.dirname(__filename)}/../public/assets/lion.svg`;
// console.log(lionPath);

const css = `background: #60ADD6;
            margin: 15px;
            padding: 30px;
            text-align: center`;

function buildEmail(emailContent){
  const emailBody = JSON.parse(emailContent);
  const backup = 'no answer given';

  function formatArray(array){
    if(!emailBody.array){ return 'no answer given' };
    let arr = JSON.parse(emailBody[array]);
    return arr.map(word => word.slice(0,1).toUpperCase() + word.slice(1)).join(', ');
  }

  function formatValues(value){
    if (!value){ return 'no answer given'; }
    if (isNaN(value)){ return value; }
    return value + '/5';
  }

// http://localhost:8080/assets/lion.svg
// https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg

  return `
          <div style="${css}">
            <div style="width:200px; height:200px; margin: 0 auto; border:2px solid black">
              <img src="${lionPath}">
            </div>
            <h1>Getting to know you Questionnaire:</h1>
            <h3>Name: ${formatValues(emailBody.name)}</h3>
            <h3>Age: ${formatValues(emailBody.age)}</h3>
            <h3>Friends: ${formatValues(emailBody.Friends)}</h3>
            <h3>Friends likes: ${formatValues(emailBody.friends__like)}</h3>
            <h3>Friends dislikes: ${formatValues(emailBody.friends__dislike)}</h3>
            <h3>School: ${formatValues(emailBody.School)}</h3>
            <h3>School likes: ${formatValues(emailBody.school__like)}</h3>
            <h3>School dislikes: ${formatValues(emailBody.school__dislike)}</h3>
            <h3>Sleep: ${formatValues(emailBody.Sleep)}</h3>
            <h3>Personality: ${formatArray('personality')}</h3>
            <h3>Hobbies: ${formatArray('hobbies')}</h3>
            <h3>Feelings: ${formatValues(emailBody.feelings)}</h3>
          </div>
          `;
}

module.exports = { buildEmail };
