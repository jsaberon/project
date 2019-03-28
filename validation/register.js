const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.rePassword = !isEmpty(data.rePassword) ? data.rePassword : "";

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "name must be greater than 2 and maximum of 30 characters";
  }
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name Field Is Required";
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else {
    if (!Validator.isEmail(data.email)) {
      errors.email = "Invalid Email";
    }
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password Field Is Required";
  }
  if (!Validator.isLength(data.password, { mix: 6, max: 30 })) {
    errors.password = "Password Must Have Atleast 6 Characters";
  }
  if (Validator.isEmpty(data.rePassword)) {
    errors.rePassword = "Password Field Is Required";
  }
  if (!Validator.equals(data.password, data.rePassword)) {
    errors.rePassword = "Password Do Not Match";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
