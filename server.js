const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

const app = express();

require("dotenv").config();

//Config Keys
// const db = require("./config/keys").mongoURI;

//middleWares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes

const members = require("./routes/api/members");
const accounts = require("./routes/api/accounts");

// Use Routes

app.use("/api/accounts", accounts);
app.use("/api/members", members);

// variables
const PORT = process.env.PORT;
const URI = process.env.URI;

// DB Connection
mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(console.log("Database Connected"))
  .catch((err) => console.error(err));

app.listen(PORT, () => console.log(`Up and running at port ${PORT}`));
