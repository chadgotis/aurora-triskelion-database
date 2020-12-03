const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reqString = {
  type: "String",
  default: "",
};

const chapterOfficers = new Schema({
  grandTriskelion: reqString,
  deputyGrandTriskelion: reqString,
  masterWilderOfTheWhip: reqString,
});

const chapterSchema = new Schema({
  name: {
    type: "String",
    required: true,
  },
  officers: [chapterOfficers],
});

// const officerSchema = new Schema({
//   chairman: reqString,
//   viceChairman: reqString,
//   secretary: reqString,
//   keeperOftheChest: reqString,
//   auditor: reqString,
//   budgetAndFinance: reqString,
//   membershipAndOrganization: reqString,
//   communicationAndInformation: reqString,
//   specialProjects: reqString,
//   alumniAffairs: reqString,
//   interior: reqString,
// });

const councilSchema = new Schema({
  name: {
    type: "string",
    required: true,
  },
  code: {
    type: "string",
    required: true,
  },
  officers: {
    chairman: reqString,
    viceChairman: reqString,
    secretary: reqString,
    keeperOftheChest: reqString,
    auditor: reqString,
    budgetAndFinance: reqString,
    membershipAndOrganization: reqString,
    communicationAndInformation: reqString,
    specialProjects: reqString,
    alumniAffairs: reqString,
    interior: reqString,
  },
  chapters: [chapterSchema],
});

module.exports = Council = mongoose.model("councils", councilSchema);
