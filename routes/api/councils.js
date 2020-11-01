const express = require("express");

const router = express.Router();

const Council = require("../../models/Council");

router.get("/", async (req, res) => {
  try {
    const councils = await Council.find();
    res.json(councils);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
});

router.post("/add", async (req, res) => {
  try {
    const councils = new Council({
      name: req.body.name,
      code: req.body.code,
    });
    const newCouncil = await councils.save();
    res.json(newCouncil);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const councilExists = await Council.findById(req.params.id);
    if (!councilExists)
      return res.status(404).json({ msg: "Council not found" });
    const deleteCouncil = await Council.deleteOne({ _id: req.params.id });
    res.json({ msg: "Deleted Successfully" });
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
});
module.exports = router;
