module.exports = function(value){
  if (!value){ return 'no answer given'; }
  if (isNaN(value)){ return value; }
  return value + '/5';
};
