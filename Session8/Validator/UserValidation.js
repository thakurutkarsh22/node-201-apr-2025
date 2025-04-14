const Joi = require("joi");

const UserInputSchema = Joi.object().keys({
    name: Joi.string()
      .min(3)
      .max(30)
      .required(),
  
    email: Joi.string()
      .email()
      .required(),
    
    username: Joi.string()
      .alphanum()
      .min(3)
      .max(30),
});


function isUserInputValid(userInput) {
    const isInputvalid = schema.validate(userInput);
    return isInputvalid;
}

module.exports = {isUserInputValid, UserInputSchema}