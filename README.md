# Welcome to CAMHS

[![Build Status](https://travis-ci.org/CYPIAPT-LNDSE/welcome-to-camhs.svg?branch=master)](https://travis-ci.org/CYPIAPT-LNDSE/welcome-to-camhs)
[![codecov](https://codecov.io/gh/CYPIAPT-LNDSE/welcome-to-camhs/branch/master/graph/badge.svg)](https://codecov.io/gh/CYPIAPT-LNDSE/welcome-to-camhs)

A fun and accessible questionnaire for children when first visiting CAMHS (Child and Adolescent Mental Health Services). Designed for tablets.

The app can be found [here](https://welcome-in.herokuapp.com/).

This questionnaire aims to reduce the anxieties of children (5 - 12 years old) coming to CAMHS for the first time. It offers an alternative questionnaire to the paper based one which is currently used and is not appropriately designed for children.

CAMHS helps to support children and young people who need help with their emotional, behavioural and psychological/mental health difficulties. Children, young people and their families can be referred to CAMHS if the children are finding it hard to cope with family life, school or the wider world. CAMHS currently gives the questionnaire to children to complete when they are sitting in the waiting room. Our app replaces this often unenjoyable experience with one which provides a positive first interaction with CAMHS, while taking no more time or resources to complete than the paper-based method.

The questions in the questionnaire are ones that are required by CAMHS but general enough to be of use to other organisations who want to get to know their users better.

## Team
[Jasmin Patel](https://github.com/Jasminpatel1) - Product Owner <br>
[Ewelina Skibinska](https://github.com/skibinska) - Developer <br>
[Peter Rhodes](https://github.com/rhodespeter) - Developer

## Project Support
[Noga Inbar](https://github.com/nogainbar) - UX/UI <br>
[Bradley Reeder](https://github.com/bradreeder) - Scrum Master <br>
[Eoin McCarthy](https://github.com/des-des) - Code Review & QA

## Why?

This questionnaire helps therapists get to know a young person better so that they can more quickly build a healthy and meaningful relationship.

## Who?

Welcome to CAMHS is aimed at young people aged 5-12 who are visiting CAMHS and meeting their therapist for the first time.
Children at the younger end of the age range may need help from staff/parent/guardian to complete some of the questions.

The therapist and the child will be able to download a PDF of the children's answers when the questionnaire has been completed. This data is stored only in the PDF, the app will not store the private information for longer than the session in which it was created (no database).  

## What?

An engaging web app for children which makes the experience of filling out the questionnaire enjoyable and appropriate for their developmental stage.

This web application has been dsigned for tablet screens, as this is the technology most commonly used by the clinicians at CAMHS.

## Tech stack
- [Heroku](https://heroku.com/) for hosting
- [Hapi.js](https://hapijs.com/)/Node server
- [Sass](http://sass-lang.com/)
- [normalize-scss](https://www.npmjs.com/package/normalize.scss)
- [Tape](https://github.com/substack/tape) for backend testing
- [Travis](https://travis-ci.org/) for continuous intergration
- [Codecov](https://codecov.io/) for code coverage
- [Istanbul](https://github.com/istanbuljs) for code coverage (local)
- [tap-spec](https://www.npmjs.com/package/tap-spec) for formatted tests
- [sessionStorage](https://developer.mozilla.org/en/docs/Web/API/Window/sessionStorage) for data management and state storage
- [anime.js](http://anime-js.com/) for animating SVG images
- [Nodemailer](https://nodemailer.com/about/) for sending emails via a gmail account
- [Handelbars.js](http://handlebarsjs.com/) - templating engine
- [Materialize-css](http://materializecss.com/) for css carousel (jquery)

## Testing
##### To run tests:
Clone this repo:
```
git clone https://github.com/CYPIAPT-LNDSE/welcome-to-camhs.git
```

Install node modules:
```
npm install
```
Run the Tape tests:
```
npm test
```
