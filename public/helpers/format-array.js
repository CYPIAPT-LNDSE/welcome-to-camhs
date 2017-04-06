module.exports = function(array, emailContent){
  if(!emailContent.data.root[array]){ return 'no answer given' };
  let arr = JSON.parse(emailContent.data.root[array]);
  return arr.map(word => word.slice(0,1).toUpperCase() + word.slice(1)).join(', ');
};
