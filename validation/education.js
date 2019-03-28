const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateExpInput(data) {
  let errors = {};

  data.school = !isEmpty(data.school) ? data.school : "";
  data.degree = !isEmpty(data.degree) ? data.degree : "";
  data.field = !isEmpty(data.field) ? data.field : "";
  data.from = !isEmpty(data.from) ? data.from : "";

  if (Validator.isEmpty(data.school)) {
    errors.school = "field is required";
  }
  if (Validator.isEmpty(data.degree)) {
    errors.degree = "field is required";
  }
  if (Validator.isEmpty(data.field)) {
    errors.field = "field is required";
  }
  if (Validator.isEmpty(data.from)) {
    errors.from = "field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
