const express = require("express");
const router = express.Router();
const Account = require("../../models/Account");
const bcrypt = require("bcryptjs");

// Get all accounts
router.get("/", async (req, res) => {
  try {
    const accounts = await Account.find();
    res.json(accounts);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

// register account
router.post("/register", async (req, res) => {
  try {
    const account = new Account({
      username: req.body.username,
      password: req.body.password,
      type: req.body.type,
    });

    //Hashing and Salting Password
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(account.password, salt, (err, hash) => {
        if (err) throw err;
        account.password = hash;
        account
          .save()
          .then(res.json(account))
          .catch((err) => console.error(err));
      });
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

// login Account
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userExist = await Account.findOne({ username });
    if (!userExist) {
      return res.status(404).json({ msg: "Account does not exist" });
    }
    const validPass = await bcrypt.compare(password, userExist.password);
    if (!validPass) {
      return res.status(401).json({ msg: "Password do not match" });
    }

    res.json({ msg: "Logged In successfully!" });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

// delete account
router.delete("/:id", async (req, res) => {
  try {
    const removedAccount = await Account.deleteOne({ _id: req.params.id });
    res.json({ msg: "Account Removed Successfully" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});
// update account

module.exports = router;
