const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const councilSchema = new Schema({
  name: {
    type: "string",
    required: true,
  },
  code: {
    type: "string",
    required: true,
  },
});

module.exports = Council = mongoose.model("councils", councilSchema);
