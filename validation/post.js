const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatePostInput(data) {
  let errors = {};

  data.text = !isEmpty(data.text) ? data.text : "";

  if (!Validator.isLength(data.text, { min: 10, max: 300 })) {
    errors.text = "minimun of 10 characters";
  }
  if (Validator.isEmpty(data.text)) {
    errors.text = "field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
