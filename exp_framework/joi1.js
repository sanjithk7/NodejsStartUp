const Joi = require('joi');

const arrayString = ['banana', 'bacon', 'cheese'];
const userInput = {
    personalInfo: {
        streetAddress: '12345',
        city: 'chennai',
        state: 'tamilnadu'
    },
    preferences: arrayString
};