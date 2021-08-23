const express = require("express");
const app = express();
const morgan = require("morgan");
//  Development mode info
app.use(morgan("dev"));
// to process the json data
app.use(express.json());

// mongoDB
const mongoose = require("mongoose");
const DB_URL = process.env.DB_URL;
mongoose
  .connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(console.log("DB is conntected"))
  .catch((error) => {
    console.log(`There was a problem ${error.message}`);
  });

// const employees = require("./router/employees");
// app.use("/employees", employees);
module.exports = app;
