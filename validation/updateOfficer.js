const Validator = require("validator");
const isEmpty = require("../validation/is-empty");

module.exports = function validateUpdateOfficerInput(data) {
  let errors = {};

  data = !isEmpty(data) ? data : "";

  if (Validator.isEmpty(data)) {
    errors.position = "Position is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
