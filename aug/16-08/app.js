const express = require("express");
const app = express();

app
  .get("/", (req, res) => {
    console.log("GET");
    res.status(200).json({ text: "This is a GET request" });
  })
  .post("/", (req, res) => {
    console.log("GET");
    res.status(200).json({ text: "This is a POST request" });
  })
  .put("/", (req, res) => {
    console.log("GET");
    res.status(200).json({ text: "This is a PUT request" });
  })
  .delete("/", (req, res) => {
    console.log("GET");
    res.status(200).json({ text: "This is a DELETE request" });
  });

module.exports = app;
