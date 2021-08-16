// localhost:5000/users (GET PUT POST,...)
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hey This is user Page");
});

// url localhost:5000/users/about
router.get("/about", (req, res) => {
  res.send("This is About");
});

module.exports = router;
