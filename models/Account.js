const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const accountSchema = new Schema(
  {
    firstName: {
      required: true,
      type: "string",
    },
    middleName: {
      required: true,
      type: "string",
    },
    lastName: {
      required: true,
      type: "string",
    },
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
