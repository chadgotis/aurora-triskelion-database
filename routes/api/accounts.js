const express = require("express");
const router = express.Router();
const Account = require("../../models/Account");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

//loading Validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Get all accounts
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const accounts = await Account.find({ type: "user" }).select(
        "type firstName lastName username "
      );
      res.json(accounts);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  }
);

// register account
router.post(
  "/register",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { errors, isValid } = validateRegisterInput(req.body);

      if (!isValid) {
        return res.status(400).json(errors);
      }

      const usernameTaken = await Account.findOne({
        username: req.body.username,
      });
      if (usernameTaken) {
        errors.username = "username already taken";
        return res.status(404).json(errors);
      }

      const account = new Account({
        firstName: req.body.firstName,
        middleName: req.body.middleName,
        lastName: req.body.lastName,
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
  }
);

// login Account
router.post("/login", async (req, res) => {
  try {
    const { errors, isValid } = validateLoginInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const { username, password } = req.body;

    const userExist = await Account.findOne({ username });
    if (!userExist) {
      errors.message = "Username or Password incorrect";
      return res.status(404).json(errors);
    }
    const validPass = await bcrypt.compare(password, userExist.password);

    if (!validPass) {
      errors.message = "Username or Password incorrect";
      return res.status(401).json(errors);
    }

    //create JWT Payload
    const payload = {
      id: userExist.id,
      username: userExist.username,
      firstName: userExist.firstName,
      lastName: userExist.lastName,
      role: userExist.type,
    };

    jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (error, token) => {
      res.json({
        success: true,
        token: `Bearer ${token}`,
      });
    });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
});

// delete account
router.delete(
  "/delete/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const removedAccount = await Account.deleteOne({ _id: req.params.id });
      if (!removedAccount)
        return res.status(404).json({ msg: "Account does not exist" });
      res.json({ msg: "Account Removed Successfully" });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  }
);

// update account
router.patch(
  "/edit/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const accountExists = await Account.findById(req.params.id);
    try {
      if (!accountExists)
        return res.status(404).json({ msg: "account not found" });

      const { username, password, firstName, middleName, lastName } = req.body;

      if (username != null) {
        accountExists.username = username;
      }
      if (firstName != null) {
        accountExists.firstName = firstName;
      }
      if (middleName != null) {
        accountExists.middleName = middleName;
      }
      if (lastName != null) {
        accountExists.lastName = lastName;
      }

      if (password != null) {
        //Hashing and Salting Password
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(password, salt, (err, hash) => {
            if (err) throw err;
            accountExists.password = hash;
            accountExists
              .save()
              .then(res.json(accountExists))
              .catch((err) => console.error(err));
          });
        });
      }
    } catch (error) {
      res.status(404).json({ msg: error.message });
    }
  }
);

// sample
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    res.json({
      type: req.user.type,
      id: req.user.id,
      username: req.user.username,
    });
  }
);

module.exports = router;
