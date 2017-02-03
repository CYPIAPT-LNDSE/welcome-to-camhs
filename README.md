# Welcome to CAMHS
A fun and accessible questionnaire for children when first visiting CAMHS (Child and Adolescent Mental Health Services). 

Our prototype can be found [here](https://cypiapt-lndse.github.io/welcome-to-camhs/). This app has been designed for tablets, to change page swipe left and right.

This questionnaire aims to reduce the anxieties of children (5 - 12 years old) coming to CAMHS for the first time. It offers an alternative questionnaire to the paper based one which is currently used and is not appropriately designed for children. 

CAMHS helps to support children and young people who need help with their emotional, behavioural and psychological/mental health difficulties. Children, young people and their families can be referred to CAMHS if the children are finding it hard to cope with family life, school or the wider world.

CAMHS currently gives the questionnaire to children to complete when they are sitting in the waiting room. Our app intends to replace this often unenjoyable experience with one which provides a positive first interaction with CAMHS, while taking no more time or resources to complete than the paper-based method. 

## Team
[Jasmin Patel](https://github.com/Jasminpatel1) - Product Owner <br>
[Ewelina Skibinska](https://github.com/skibinska) - Developer <br>
[Peter Rhodes](https://github.com/rhodespeter) - Developer

## Why?

This questionnaire helps therapists get to know a young person better so that they can more quickly build a healthy and meaningful relationship.

## Who?

Welcome to CAMHS is aimed at young people aged 5-12 who are visiting CAMHS and meeting their therapist for the first time. 
Children at the younger end of the age range may need help from staff/parent/guardian to complete some of the questions. 

The therapist and the child will be able to download a PDF of the children's answers when the questionnaire has been completed. This data is stored only in the PDF, the app will not store the private information for longer than the session in which it was created (no database).  

## What? 

We aim to create an engaging web app for children which makes the experience of filling out the questionnaire enjoyable and more pictorial based which is appropriate for their developmental stage. 

This web application will be build tablet first, as this is the technology most commonly used by the therapists at CAMHS.

## Next Steps

Building on from the design sprint these would be our next steps:
 - Respond to the user feedback from testing with our product owner. Tweak the illustration style and design to most appropriately target the full age range of our users.
 - Meet with our product owner to create a more comprehensive brief and timeline
 - Add the additional pages that relate to our full user journey
 - Create 3 characters/avatars
 - Animate the illustrations and transitions 
 - Create a stronger narrative throughout the questionnaire, including the increased use of characters/avatars
 - Create backend to store the user data and link to download button
 
## Stretch goal
 - It would be brilliant to create a website with a content management system so that other charities and organisations can create their own questionnaire. They would be able to choose from a range of pages and alter some of the text to make it appropriate for them.

## Current tech stack & technologies needed for MVP
- Hosting on Heroku (currently hosted on GitHub Pages)
- Node server with Hapi.js 
- Backend testing with Tape
- Frontend testing with Nightwatch.js
- Continuous intergration with Travis
- Code coverage with Codecov
- data management and state storage with redux
- hammer.js library for swiping
- snap.svg for animating SVG images
