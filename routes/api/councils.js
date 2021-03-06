const express = require("express");

const router = express.Router();

const Council = require("../../models/Council");

const passport = require("passport");
const councilCreate = require("../../validation/councilCreate");

const validateChapterInput = require("../../validation/chapterForm");

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const councils = await Council.find();
      res.json(councils);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  }
);

//single council
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const found = await Council.find({ _id: req.params.id }).populate();
      res.json(found);
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  }
);

//add Council
router.post(
  "/add",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { errors, isValid } = councilCreate(req.body);

      if (!isValid) {
        return res.status(400).json(errors);
      }
      const councils = new Council({
        name: req.body.name,
        code: req.body.code,
      });
      const newCouncil = await councils.save();
      res.json(newCouncil);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  }
);

//delete council
router.delete(
  "/delete/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const councilExists = await Council.findById(req.params.id);
      if (!councilExists)
        return res.status(404).json({ msg: "Council not found" });
      const deleteCouncil = await Council.deleteOne({ _id: req.params.id });
      res.json({ msg: "Deleted Successfully" });
    } catch (error) {
      res.status(404).json({ msg: error.message });
    }
  }
);

//add chapter
router.post(
  "/chapter/add/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { errors, isValid } = validateChapterInput(req.body);

      if (!isValid) {
        return res.status(400).json(errors);
      }
      const addChapter = await Council.findOneAndUpdate(
        { _id: req.params.id },
        { $push: { chapters: { name: req.body.name } } }
      );

      res.json(addChapter);
    } catch (error) {
      res.status(3600).json({ msg: error.message });
    }
  }
);

//remove chapter
router.post(
  "/chapter/delete/:id/:c_id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const removeChapter = await Council.findOneAndUpdate(
        { _id: req.params.id },
        { $pull: { chapters: { _id: req.params.c_id } } }
      );

      res.json("Removed Successfully");
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
  }
);

//update Chapter
router.post(
  "/chapter/edit/:id/:c_id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const updateChapter = await Council.updateOne(
        { "chapters._id": req.params.c_id },
        { $set: { "chapters.$.name": req.body.name } }
      );

      res.json("Edit Success");
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  }
);

//Edit council officers
router.post(
  "/officers/edit/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const {
        chairman,
        viceChairman,
        secretary,
        keeperOftheChest,
        auditor,
        budgetAndFinance,
        membershipAndOrganization,
        communicationAndInformation,
        specialProjects,
        alumniAffairs,
        interior,
      } = req.body;

      const editOfficer = await Council.findOneAndUpdate(
        { _id: req.params.id },
        {
          officers: {
            chairman,
            viceChairman,
            secretary,
            keeperOftheChest,
            auditor,
            budgetAndFinance,
            membershipAndOrganization,
            communicationAndInformation,
            specialProjects,
            alumniAffairs,
            interior,
          },
        }
      );

      res.json(editOfficer);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  }
);

//Edit Chapter Officers
router.post(
  "/chapter/officers/edit/:id/:c_id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const chapExists = await Council.findOne(
        { "chapters._id": req.params.c_id },
        { "chapters.$": 1, _id: 0 }
      );
      if (!chapExists) return res.status(404).json({ msg: "Not Found" });

      if (!req.body.grandTriskelion) {
        req.body.grandTriskelion =
          chapExists.chapters[0].officers.grandTriskelion;
      }
      if (!req.body.deputyGrandTriskelion) {
        req.body.deputyGrandTriskelion =
          chapExists.chapters[0].officers.deputyGrandTriskelion;
      }
      if (!req.body.masterWilderOfTheWhip) {
        req.body.masterWilderOfTheWhip =
          chapExists.chapters[0].officers.masterWilderOfTheWhip;
      }

      const updateChapter = await Council.findOneAndUpdate(
        { "chapters._id": req.params.c_id },
        {
          "chapters.$.officers": {
            grandTriskelion: req.body.grandTriskelion,
            deputyGrandTriskelion: req.body.deputyGrandTriskelion,
            masterWilderOfTheWhip: req.body.masterWilderOfTheWhip,
          },
        }
      );

      if (!updateChapter) return res.status(404).json({ msg: "Not found" });

      res.json("Edit Success");
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  }
);

//get single Chapter
router.get(`/chapter/:council_id/:chapter_id`, async (req, res) => {
  try {
    const chapExists = await Council.findOne(
      { "chapters._id": req.params.chapter_id },
      { "chapters.$": 1, _id: 0 }
    );
    if (!chapExists) return res.status(404).json({ msg: "Not Found" });
    res.json(chapExists);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

module.exports = router;
