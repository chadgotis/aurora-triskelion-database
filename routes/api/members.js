const express = require("express");
const router = express.Router();
const Member = require("../../models/Member");

// get all members
router.get("/", async (req, res) => {
  const members = await Member.find().populate("municipalCouncil");
  try {
    res.json(members);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

// get single Member
router.get("/:id", async (req, res) => {
  try {
    const memberExists = await Member.findById({ _id: req.params.id });

    if (!memberExists) return res.status(404).json({ msg: "Member not found" });

    res.json(memberExists);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

// Add member
router.post("/add", async (req, res) => {
  try {
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
    });

    const newMember = await member.save();

    res.json(newMember);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

// Edit Members

router.patch("/edit/:id", async (req, res) => {
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
});

//Delete Member
router.delete("/delete/:id", async (req, res) => {
  try {
    const memberExists = await Member.findById(req.params.id);
    if (!memberExists)
      return res.status(404).json({ msg: "Member does not exist" });

    const removedMember = await Member.deleteOne({ _id: req.params.id });

    res.json({ msg: "Member removed successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

module.exports = router;
