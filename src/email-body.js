const bodyStyle = `background: #60ADD6;
                   margin: 15px;
                   padding: 30px;
                   text-align: center`;

const imgStyle = `width:220px;
                  height:auto;
                  margin: 0 auto`;

const lineStyle = `width: 375px;
                   border: 1px solid #FCF74C;
                   margin-bottom: 23px`;

const pStyle = `margin: 0`;

const hStyle = `margin: 0 0 23px 0`;

function buildEmail(emailContent){

  function formatArray(array){
    if(!emailContent[array]){ return 'no answer given' };
    let arr = JSON.parse(emailContent[array]);
    return arr.map(word => word.slice(0,1).toUpperCase() + word.slice(1)).join(', ');
  }

  function formatValues(value){
    if (!value){ return 'no answer given'; }
    if (isNaN(value)){ return value; }
    return value + '/5';
  }

  return `
          <div style="${bodyStyle}">
            <img style="${imgStyle}" src="https://image.ibb.co/caBmBF/lion.png">
            <h1>Getting To Know You</h1>
            <hr style="${lineStyle}">
            <p style="${pStyle}">Name:</p>
            <h2 style="${hStyle}">${formatValues(emailContent.name)}</h3>
            <p style="${pStyle}">Age:</p>
            <h2 style="${hStyle}">${emailContent.age || 'no answer given'}</h3>
            <p style="${pStyle}">Friends:</p>
            <h2 style="${hStyle}">${formatValues(emailContent.Friends)}</h3>
            <p style="${pStyle}">Friends likes:</p>
            <h2 style="${hStyle}">${formatValues(emailContent.friends__like)}</h3>
            <p style="${pStyle}">Friends dislikes:</p>
            <h2 style="${hStyle}">${formatValues(emailContent.friends__dislike)}</h3>
            <p style="${pStyle}">School:</p>
            <h2 style="${hStyle}">${formatValues(emailContent.School)}</h3>
            <p style="${pStyle}">School likes:</p>
            <h2 style="${hStyle}">${formatValues(emailContent.school__like)}</h3>
            <p style="${pStyle}">School dislikes:</p>
            <h2 style="${hStyle}">${formatValues(emailContent.school__dislike)}</h3>
            <p style="${pStyle}">Sleep:</p>
            <h2 style="${hStyle}">${formatValues(emailContent.Sleep)}</h3>
            <p style="${pStyle}">Personality:</p>
            <h2 style="${hStyle}">${formatArray('personality')}</h3>
            <p style="${pStyle}">Hobbies:</p>
            <h2 style="${hStyle}">${formatArray('hobbies')}</h3>
            <p style="${pStyle}">Feelings:</p>
            <h2 style="${hStyle}">${formatValues(emailContent.feelings)}</h3>
          </div>
        `;
}

module.exports = { buildEmail };
