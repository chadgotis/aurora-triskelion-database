const Validator = require("validator");
const isEmpty = require("../validation/is-empty");

module.exports = function validateOfficerInput(data) {
  let errors = {};

  data.year = !isEmpty(data.year) ? data.year : "";

  if (!Validator.isLength(data.year, { min: 2, max: 4 })) {
    errors.year = "Please enter a valid Year";
  }

  if (Validator.isEmpty(data.year)) {
    errors.year = "Year is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
