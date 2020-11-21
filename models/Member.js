const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const memberSchema = new Schema(
  {
    firstName: {
      type: "string",
      required: true,
    },
    middleName: {
      type: "string",
      required: true,
    },
    lastName: {
      type: "string",
      required: true,
    },
    sex: {
      type: "string",
      required: true,
    },
    birthDate: {
      type: "string",
      required: true,
    },
    homeAddress: {
      type: "string",
      required: true,
    },
    triskelionBirth: {
      type: "string",
      required: true,
    },
    triskelionSponsor: {
      type: "string",
      required: true,
    },
    rootChapter: {
      type: "string",
      required: true,
    },
    municipalCouncil: {
      type: Schema.Types.ObjectId,
      ref: "councils",
    },
    grandTriskelion: {
      type: "string",
      required: true,
    },
    masterInitiator: {
      type: "string",
      required: true,
    },
    batchName: {
      type: "string",
      required: true,
    },
    alias: {
      type: "string",
      required: true,
    },
    t_id: {
      type: "string",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Member = mongoose.model("members", memberSchema);
