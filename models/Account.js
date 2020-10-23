const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const accountSchema = new Schema(
  {
    username: {
      type: "string",
      required: true,
    },
    password: {
      type: "string",
      required: true,
    },
    type: {
      type: "string",
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Account = mongoose.model("accounts", accountSchema);
