module.exports = function(value){
  if (!value){ return 'no answer given'; }
  if (arguments[1] === 'age'){ return value; }
  if (isNaN(value)){ return value; }
  return value + '/5';
};
