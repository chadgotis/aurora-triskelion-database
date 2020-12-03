const Validator = require("validator");
const isEmpty = require("../validation/is-empty");

module.exports = function validateChapterInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";

  if (!Validator.isLength(data.name, { min: 2, max: 50 })) {
    errors.chapter = "Please enter a valid Chapter";
  }

  if (Validator.isEmpty(data.name)) {
    errors.chapter = "Chapter is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
