const express = require("express");

const router = express.Router();

const Chapter = require("../../models/Chapter");

router.get("/", async (req, res) => {
  try {
    const chapters = await Chapter.find();
    res.json(chapters);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
});

router.post("/create", async (req, res) => {
  try {
    const createChapter = new Chapter({
      name: req.body.name,
      council: req.body.council,
    });

    const newChapter = await createChapter.save();
    res.json(newChapter);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
});

router.get("/:id", async (req, res) => {
  const found = await Chapter.find({ _id: req.params.id }).populate("council");
  res.json(found);
});

module.exports = router;
