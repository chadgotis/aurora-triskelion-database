const Validator = require("validator");
const isEmpty = require("../validation/is-empty");

module.exports = function validateCouncilInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.code = !isEmpty(data.code) ? data.code : "";

  if (!Validator.isLength(data.name, { min: 2 })) {
    errors.cname = "Please enter a valid council name";
  }
  if (!Validator.isLength(data.code, { min: 2, max: 3 })) {
    errors.code = "Council Code must be between 2 to 3 letters ONLY";
  }

  if (Validator.isEmpty(data.name)) {
    errors.cname = "Council name is required";
  }
  if (Validator.isEmpty(data.code)) {
    errors.code = "Council Code is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
