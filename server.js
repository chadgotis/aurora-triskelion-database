const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

const app = express();

const passport = require("passport");

require("dotenv").config();

//Config Keys
// const db = require("./config/keys").mongoURI;

//Passport Middleware

app.use(passport.initialize());

require("./config/passport")(passport);

//middleWares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes

const members = require("./routes/api/members");
const accounts = require("./routes/api/accounts");
const councils = require("./routes/api/councils");
const logEvents = require("./routes/api/logEvents");

// Use Routes

app.use("/api/accounts", accounts);
app.use("/api/members", members);
app.use("/api/councils", councils);
app.use("/api/logs", logEvents);

// variables
const PORT = process.env.PORT;
const URI = process.env.URI;

// DB Connection
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(console.log("Database Connected"))
  .catch((err) => console.error(err));
mongoose.set("useCreateIndex", true);

app.listen(PORT, () => console.log(`Up and running at port ${PORT}`));
