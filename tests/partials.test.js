const handelbars = require('handlebars');
const test = require('tape');
const fs = require('fs');
const path = require('path');

const partial = fs.readFileSync(path.join(__dirname, '..', 'public', 'partials', 'buttons.hbs'), 'utf8');
const buttonPartial = handelbars.compile(partial);

let html;

test('Check if button partial returns only next button on welcome.hbs page', t => {
  const data = {
    next: '/avatar'
  };
  html = buttonPartial(data);

  const nextButton = `<a class="button button--next" href="${data.next}">Next</a>`;

  t.ok(html.includes(nextButton));
  t.end();
});

test('Check if button partial returns only prev button on finished.hbs page', t => {
  const data = {
    prev: '/school'
  };
  html = buttonPartial(data);

  const prevButton = `<a class="button button--prev" href="${data.prev}">Prev</a>`;

  t.ok(html.includes(prevButton));
  t.end();
});

test('Check if button partial returns prev and next buttons on avatar.hbs page', t => {
  const data = {
    prev: '/',
    next: '/introduction'
  };
  html = buttonPartial(data);

  const prevButton = `<a class="button button--prev" href="${data.prev}">Prev</a>`;
  const nextButton = `<a class="button button--next" href="${data.next}">Next</a>`;

  t.ok(html.includes(prevButton));
  t.ok(html.includes(nextButton));
  t.end();
});

test('Check if button partial returns prev and next buttons on introduction.hbs page', t => {
  const data = {
    prev: '/avatar',
    next: '/eating'
  };
  html = buttonPartial(data);

  const prevButton = `<a class="button button--prev" href="${data.prev}">Prev</a>`;
  const nextButton = `<a class="button button--next" href="${data.next}">Next</a>`;

  t.ok(html.includes(prevButton));
  t.ok(html.includes(nextButton));
  t.end();
});
