const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const eventSchema = new Schema(
  {
    user: {
      type: "String",
      required: true,
    },
    activity: {
      type: "String",
      required: true,
    },
    // createdAt: {
    //   type: "Date",
    //   default: Date.now(),
    // },
  },
  {
    timestamps: true,
  }
);

module.exports = Event = mongoose.model("events", eventSchema);
