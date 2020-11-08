const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//1 year in Seconds
const expirationTime = 31556952;

const logEventSchema = new Schema({
  user: {
    type: "String",
    required: true,
  },
  activity: {
    type: "String",
    required: true,
  },
  createdAt: {
    type: "Date",
    default: Date.now,
    expires: expirationTime,
  },
});

module.exports = LogEvent = mongoose.model("logEvents", logEventSchema);
