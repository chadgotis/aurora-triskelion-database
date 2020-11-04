const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const chapterSchema = new Schema({
  name: {
    type: "String",
    required: true,
  },
});

const councilSchema = new Schema({
  name: {
    type: "string",
    required: true,
  },
  code: {
    type: "string",
    required: true,
  },
  chapters: [chapterSchema],
});

module.exports = Council = mongoose.model("councils", councilSchema);
