const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateMemberInput(data) {
  let errors = {};

  data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
  data.middleName = !isEmpty(data.middleName) ? data.middleName : "";
  data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
  data.sex = !isEmpty(data.sex) ? data.sex : "";
  data.birthDate = !isEmpty(data.birthDate) ? data.birthDate : "";
  data.homeAddress = !isEmpty(data.homeAddress) ? data.homeAddress : "";
  data.triskelionBirth = !isEmpty(data.triskelionBirth)
    ? data.triskelionBirth
    : "";
  data.triskelionSponsor = !isEmpty(data.triskelionSponsor)
    ? data.triskelionSponsor
    : "";
  data.rootChapter = !isEmpty(data.rootChapter) ? data.rootChapter : "";
  data.municipalCouncil = !isEmpty(data.municipalCouncil)
    ? data.municipalCouncil
    : "";
  data.grandTriskelion = !isEmpty(data.grandTriskelion)
    ? data.grandTriskelion
    : "";
  data.masterInitiator = !isEmpty(data.masterInitiator)
    ? data.masterInitiator
    : "";
  data.batchName = !isEmpty(data.batchName) ? data.batchName : "";
  data.alias = !isEmpty(data.alias) ? data.alias : "";
  data.chapter = !isEmpty(data.chapter) ? data.chapter : "";

  //validate length
  if (!Validator.isLength(data.firstName, { min: 2, max: 30 })) {
    errors.firstName = "Firstname must be at least 2 characters long";
  }
  if (!Validator.isLength(data.middleName, { min: 2, max: 30 })) {
    errors.middleName = "Middle Name must be at least 2 characters long";
  }
  if (!Validator.isLength(data.lastName, { min: 2, max: 30 })) {
    errors.lastName = "Last Name must be at least 2 characters long";
  }
  if (!Validator.isLength(data.homeAddress, { min: 2, max: 30 })) {
    errors.homeAddress = "Home Address must be at least 2 characters long";
  }
  if (!Validator.isLength(data.triskelionSponsor, { min: 2, max: 30 })) {
    errors.triskelionSponsor = "Name must be at least 2 characters long";
  }
  if (!Validator.isLength(data.grandTriskelion, { min: 2, max: 30 })) {
    errors.grandTriskelion = "Name must be at least 2 characters long";
  }
  if (!Validator.isLength(data.masterInitiator, { min: 2, max: 30 })) {
    errors.masterInitiator = "Name must be at least 2 characters long";
  }
  if (!Validator.isLength(data.batchName, { min: 2, max: 30 })) {
    errors.batchName = "Batch Name must be at least 2 characters long";
  }
  if (!Validator.isLength(data.alias, { min: 2, max: 30 })) {
    errors.alias = "Name must be at least 2 characters long";
  }
  if (!Validator.isLength(data.chapter, { min: 2, max: 45 })) {
    errors.chapter = "Chapter must be at least 2 characters long";
  }

  //Date Validation

  if (!Validator.isDate(data.birthDate)) {
    errors.birthDate = "Birth Date is invalid";
  }
  if (!Validator.isDate(data.triskelionBirth)) {
    errors.triskelionBirth = "Triskelion Birth is invalid";
  }

  //Empty Field

  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = "First Name is required";
  }
  if (Validator.isEmpty(data.middleName)) {
    errors.middleName = "Middle Name is required";
  }
  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = "Last Name is required";
  }
  if (Validator.isEmpty(data.sex)) {
    errors.sex = "Sex field is required";
  }
  if (Validator.isEmpty(data.birthDate)) {
    errors.birthDate = "Date of Birth is required";
  }
  if (Validator.isEmpty(data.homeAddress)) {
    errors.homeAddress = "Home Address is required";
  }
  if (Validator.isEmpty(data.triskelionBirth)) {
    errors.triskelionBirth = "Triskelion Birth is required";
  }
  if (Validator.isEmpty(data.triskelionSponsor)) {
    errors.triskelionSponsor = "Triskelion Sponsor is required";
  }
  if (Validator.isEmpty(data.rootChapter)) {
    errors.rootChapter = "Root Chapter is required";
  }
  if (Validator.isEmpty(data.municipalCouncil)) {
    errors.municipalCouncil = "Municipal Council is required";
  }
  if (Validator.isEmpty(data.triskelionSponsor)) {
    errors.triskelionSponsor = "Triskelion Sponsor is required";
  }
  if (Validator.isEmpty(data.grandTriskelion)) {
    errors.grandTriskelion = "Grand Triskelion is required";
  }
  if (Validator.isEmpty(data.masterInitiator)) {
    errors.masterInitiator = "Master Initiator is required";
  }
  if (Validator.isEmpty(data.batchName)) {
    errors.batchName = "Batch Name is required";
  }
  if (Validator.isEmpty(data.alias)) {
    errors.alias = "Alias is required";
  }
  if (Validator.isEmpty(data.chapter)) {
    errors.chapter = "Chapter is required";
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
