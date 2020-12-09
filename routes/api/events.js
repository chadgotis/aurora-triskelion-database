const express = require("express");

const router = express.Router();

const Event = require("../../models/Event");

const passport = require("passport");

router.get("/", async (req, res) => {
  try {
    const list = await Event.find().sort({ createdAt: -1 });
    res.json(list);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

router.post("/create", async (req, res) => {
  try {
    const newEvent = new Event({
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
