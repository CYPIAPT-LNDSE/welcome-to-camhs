module.exports = function(array, emailContent){
  if(!emailContent[array]){ return 'no answer given' };
  let arr = JSON.parse(emailContent[array]);
  return arr.map(word => word.slice(0,1).toUpperCase() + word.slice(1)).join(', ');
};
