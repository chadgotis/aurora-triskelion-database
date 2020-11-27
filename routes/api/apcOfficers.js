const express = require("express");

const router = express.Router();

const passport = require("passport");

const Apc = require("../../models/Apc");

//get APC officers
router.get("/", async (req, res) => {
  try {
    const officers = await Apc.find();
    res.json(officers);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

//create new Set of Officers
module.exports = router;
