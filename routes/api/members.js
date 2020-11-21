const express = require("express");
const router = express.Router();
const Member = require("../../models/Member");
const Council = require("../../models/Council");
const passport = require("passport");
const LogEvent = require("../../models/LogEvent");

//Load Validation
const validateMemberInput = require("../../validation/member");

// get all members
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const members = await Member.find().populate("municipalCouncil");
    try {
      res.json(members);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  }
);

// get single Member
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const memberExists = await Member.findById({ _id: req.params.id });

      if (!memberExists)
        return res.status(404).json({ msg: "Member not found" });

      res.json(memberExists);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  }
);

// Add member
router.post(
  "/add",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { errors, isValid } = validateMemberInput(req.body);

      if (!isValid) {
        return res.status(400).json(errors);
      }

      const {
        firstName,
        lastName,
        middleName,
        sex,
        birthDate,
        homeAddress,
        triskelionBirth,
        triskelionSponsor,
        rootChapter,
        municipalCouncil,
        grandTriskelion,
        masterInitiator,
        batchName,
        alias,
      } = req.body;

      const council = await Council.findById(municipalCouncil);

      if (!council)
        return res.status(404).json({ msg: "Council does not exist" });

      const randomId = Math.floor(Math.random() * 8999999 + 1000000);

      const unique = `${council.code}-${randomId}`;

      const member = new Member({
        firstName,
        lastName,
        middleName,
        sex,
        birthDate,
        homeAddress,
        triskelionBirth,
        triskelionSponsor,
        rootChapter,
        municipalCouncil,
        grandTriskelion,
        masterInitiator,
        batchName,
        alias,
        t_id: unique,
      });

      const recordEvent = new LogEvent({
        user: `${req.user.firstName} ${req.user.middleName} ${req.user.lastName}`,
        activity: "Added new Member to Database",
      });

      const newLog = await recordEvent.save();
      const newMember = await member.save();

      res.json(newMember);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  }
);

// Edit Members

router.patch(
  "/edit/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const memberExists = await Member.findById(req.params.id);

      if (!memberExists)
        return res.status(404).json({ msg: "Member does not exist" });

      if (req.body.firstName != null) {
        memberExists.firstName = req.body.firstName;
      }
      if (req.body.middleName != null) {
        memberExists.middleName = req.body.middleName;
      }
      if (req.body.lastname != null) {
        memberExists.lastName = req.body.lastName;
      }
      if (req.body.sex != null) {
        memberExists.sex = req.body.sex;
      }
      if (req.body.birthDate != null) {
        memberExists.birthDate = req.body.birthDate;
      }
      if (req.body.homeAddress != null) {
        memberExists.homeAddress = req.body.homeAddress;
      }
      if (req.body.triskelionBirth != null) {
        memberExists.triskelionBirth = req.body.triskelionBirth;
      }
      if (req.body.triskelionSponsor != null) {
        memberExists.triskelionSponsor = req.body.triskelionSponsor;
      }
      if (req.body.rootChapter != null) {
        memberExists.rootChapter = req.body.rootChapter;
      }
      if (req.body.municipalCouncil != null) {
        memberExists.municipalCouncil = req.body.municipalCouncil;
      }
      if (req.body.grandTriskelion != null) {
        memberExists.grandTriskelion = req.body.grandTriskelion;
      }
      if (req.body.masterInitiator != null) {
        memberExists.masterInitiator = req.body.masterInitiator;
      }
      if (req.body.batchName != null) {
        memberExists.batchName = req.body.batchName;
      }
      if (req.body.alias != null) {
        memberExists.alias = req.body.alias;
      }

      const updatedMember = await memberExists.save();
      res.json(updatedMember);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  }
);

//Delete Member
router.delete(
  "/delete/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const memberExists = await Member.findById(req.params.id);
      if (!memberExists)
        return res.status(404).json({ msg: "Member does not exist" });

      const removedMember = await Member.deleteOne({ _id: req.params.id });

      res.json({ msg: "Member removed successfully" });
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  }
);

module.exports = router;
