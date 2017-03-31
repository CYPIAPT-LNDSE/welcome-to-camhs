function buildEmail(emailContent){
  const emailBody = JSON.parse(emailContent);

  function formatArray(array){
    let arr = JSON.parse(emailBody[array]);
    return arr.map(word => word.slice(0,1).toUpperCase() + word.slice(1)).join(', ');
  }

  return `<h1>Getting to know you Questionnaire:</h1>
          <h3>Name: ${emailBody.name}</h3>
          <h3>Age: ${emailBody.age}</h3>
          <h3>Friends: ${emailBody.Friends}/5</h3>
          <h3>Friends likes: ${emailBody.friends__like}</h3>
          <h3>Friends dislikes: ${emailBody.friends__dislike}</h3>
          <h3>School: ${emailBody.School}/5</h3>
          <h3>School likes: ${emailBody.school__like}</h3>
          <h3>School dislikes: ${emailBody.school__dislike}</h3>
          <h3>Sleep: ${emailBody.Sleep}/5</h3>
          <h3>Personality: ${formatArray('personality')}</h3>
          <h3>Hobbies: ${formatArray('hobbies')}</h3>
          <h3>Feelings: ${emailBody.feelings}</h3>
          `;
}

module.exports = { buildEmail };
