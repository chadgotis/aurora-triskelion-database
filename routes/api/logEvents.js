const express = require("express");

const router = express.Router();

const LogEvent = require("../../models/LogEvent");

//get all Records
router.get("/", async (req, res) => {
  try {
    const getAll = await LogEvent.find();
    res.json(getAll);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

//Record Event
router.post("/create", async (req, res) => {
  try {
    const newEvent = new LogEvent({
      user: req.body.user,
      activity: req.body.activity,
    });

    const event = await newEvent.save();
    res.json(event);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

module.exports = router;
