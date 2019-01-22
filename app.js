const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const app = express();

mongoose.connect(
  "mongodb://localhost:27017/contact-app",
  {
    useMongoClient: true
  }
);

// eslint-disable-next-line no-console
mongoose.connection.on("error", console.error);

app.use(logger("dev"));
app.use(express.json());

app.use("/", indexRouter);
app.use("/users", usersRouter);

module.exports = app;
