const test = require('tape');
const formatArray = require('../src/templates/helpers/format-array');
const formatValues = require('../src/templates/helpers/format-values');

test('Check if format-array helper returns a correctly formatted string', t => {

  const array = 'hobbies';
  const emailContent = {  name: 'format-array',
                          hash: {},
                          data:
                            { root:
                                { avatar: 'lion',
                                  feelings: 'happy',
                                  friends: '5',
                                  frineds__dislike: 'eee',
                                  hobbies: '["football", "dancing", "music"]',
                                  school: '1',
                                  school__dislike: 'eee'
                                }
                            }
                        }

  t.equal(formatArray(array, emailContent), 'Football, Dancing, Music',`formatArray
    function returns the string "Football, Dancing, Music"`);
  t.end();
});

test('Check if format-array helper returns a correctly formatted string', t => {

  const array = 'personality';
  const emailContent = {  name: 'format-array',
                          hash: {},
                          data:
                            { root:
                                { avatar: 'lion',
                                  feelings: 'happy',
                                  friends: '5',
                                  frineds__dislike: 'eee',
                                  hobbies: '["football", "dancing", "music"]',
                                  school: '1',
                                  school__dislike: 'eee'
                                }
                            }
                        }

  t.equal(formatArray(array, emailContent), 'no answer given', `formatArray
    function returns the string "no answer given"`);
  t.end();
});

test('Check if format-value helper returns a correctly formatted string', t => {

  const value = '3';

  t.equal(formatValues(value), '3/5',`formatValue function returns the string "3/5"`);
  t.end();
});

test('Check if format-value helper returns a correctly formatted string', t => {

  const value = '0';

  t.equal(formatValues(value), '0/5',`formatValue function returns the string "0/5"`);
  t.end();
});

test('Check if format-value helper returns a correctly formatted string', t => {

  const value = '';

  t.equal(formatValues(value), 'no answer given',`formatValue function returns
    the string "no answer given"`);
  t.end();
});

test('Check if format-value helper returns a correctly formatted string', t => {

  const value = '28';
  const args = 'age';

  t.equal(formatValues(value, args), '28', `formatValue function
    returns the string "28"`);
  t.end();
});
