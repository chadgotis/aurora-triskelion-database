const Validator = require("validator");
const isEmpty = require("../validation/is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  //validate if Data is empty for any data type
  data.username = !isEmpty(data.username) ? data.username : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (!Validator.isLength(data.username, { min: 6, max: 30 })) {
    errors.username = "username must be at least 6 characters long";
  }
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "password must be at least 6 characters long";
  }

  if (Validator.isEmpty(data.username)) {
    errors.username = "username is required";
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = "password is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
