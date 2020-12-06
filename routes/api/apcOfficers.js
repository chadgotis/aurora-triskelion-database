const express = require("express");

const router = express.Router();

const passport = require("passport");

const Apc = require("../../models/Apc");

const validateCouncilInput = require("../../validation/councilCreate");

const validateOfficerInput = require("../../validation/officerCreate");

const validateUpdateOfficerInput = require("../../validation/updateOfficer");

//get APC officers
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const setOfOfficers = await Apc.find();
      res.json(setOfOfficers);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  }
);
router.get("/latest", async (req, res) => {
  try {
    const singleSet = await Apc.find().sort({ _id: -1 }).limit(1);
    if (!singleSet) {
      return res.status(404).json({ msg: "Not found" });
    }
    res.json(singleSet);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

//get single Set of Officers

router.get("/:id", async (req, res) => {
  try {
    const singleSet = await Apc.findOne({ _id: req.params.id });
    if (!singleSet) {
      return res.status(404).json({ msg: "Not found" });
    }
    res.json(singleSet);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

//Create new set of Officers

router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { errors, isValid } = validateOfficerInput(req.body);

      if (!isValid) {
        return res.status(400).json(errors);
      }

      const alreadyExists = await Apc.findOne({ year: req.body.year });

      if (alreadyExists) {
        errors.year = "Series Year already Exists";
        return res.status(400).json({ year: errors.year });
      }

      const newSet = new Apc({
        year: req.body.year,
      });
      await newSet.save();
      res.json(newSet);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  }
);

//update set of officers
router.post(
  "/edit/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const officers = {};
      //fields
      if (req.body.governorGeneral_name)
        officers.governorGeneral = req.body.governorGeneral_name;
      if (req.body.executiveViceGovernorGeneral_name)
        officers.executiveViceGovernorGeneral =
          req.body.executiveViceGovernorGeneral_name;
      if (req.body.districtViceGovernorGeneral_name)
        officers.districtViceGovernorGeneral =
          req.body.districtViceGovernorGeneral_name;
      if (req.body.provExecutiveSecretary_name)
        officers.provExecutiveSecretary = req.body.provExecutiveSecretary_name;
      if (req.body.provKeeperOfTheChest_name)
        officers.provKeeperOfTheChest = req.body.provKeeperOfTheChest_name;
      if (req.body.provAuditor_name)
        officers.provAuditor = req.body.provAuditor_name;
      if (req.body.regentInformationAndCommunication_name)
        officers.regentInformationAndCommunication =
          req.body.regentInformationAndCommunication_name;
      if (req.body.regentMembershipAndOrganization_name)
        officers.regentMembershipAndOrganization =
          req.body.regentMembershipAndOrganization_name;
      if (req.body.regentBudgetAndFinance_name)
        officers.regentBudgetAndFinance = req.body.regentBudgetAndFinance_name;
      if (req.body.regentInterior_name)
        officers.regentInterior = req.body.regentInterior_name;
      if (req.body.regentSpecialProjects_name)
        officers.regentSpecialProjects = req.body.regentSpecialProjects_name;
      if (req.body.regentAlumniAffairs_name)
        officers.regentAlumniAffairs = req.body.regentAlumniAffairs_name;

      // const { errors, isValid } = validateUpdateOfficerInput(officers);

      // if (!isValid) {
      //   return res.status(400).json(errors);
      // }

      const officersIdExists = await Apc.findOne({ _id: req.params.id });
      if (officersIdExists) {
        const result = await Apc.findOneAndUpdate(
          { _id: req.params.id },
          { $set: officers },
          { $new: true }
        );
        res.json(result);
      } else {
        res.status(404).json((errors.year = "Please Select a Year"));
      }
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  }
);

router.delete(
  "/delete/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const removeSet = await Apc.deleteOne({ _id: req.params.id });
      if (!removeSet)
        return res.status(404).json({ msg: "Set of Officers does not exist" });
      res.json({ msg: "Set of Officers Removed Successfully" });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  }
);
module.exports = router;
