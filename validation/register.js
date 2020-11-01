const Validator = require("validator");
const isEmpty = require("../validation/is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  //validate if Data is empty for any data type
  data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
  data.middleName = !isEmpty(data.middleName) ? data.middleName : "";
  data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
  data.username = !isEmpty(data.username) ? data.username : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (!Validator.isLength(data.firstName, { min: 2, max: 30 })) {
    errors.firstName = "Firstname must be at least 2 characters long";
  }

  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = "Firstname required";
  }

  if (Validator.isEmpty(data.middleName)) {
    errors.middleName = "middlename is required";
  }
  if (!Validator.isLength(data.middleName, { min: 2, max: 30 })) {
    errors.middleName = "middlename must be at least 2 characters long";
  }
  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = "lastName is required";
  }

  if (!Validator.isLength(data.lastName, { min: 2, max: 30 })) {
    errors.lastName = "lastname must be at least 2 characters long";
  }
  if (Validator.isEmpty(data.username)) {
    errors.username = "username is required";
  }
  if (!Validator.isLength(data.username, { min: 6, max: 30 })) {
    errors.username = "username must be at least 6 characters long";
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = "password is required";
  }
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "password must be at least 6 characters long";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
