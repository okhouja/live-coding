require("dotenv").config;
// express

const express = require("express");
const app = express();

// http://localhost:5000/
app.get("/", (req, res) => {
  console.log(req);
  res.send("<h2> Welcome to our App</h2>");
});

// http://localhost:5000/about
app.get("/about", (req, res) => {
  console.log(req);
  res.send("<h2> We are the coolest people</h2>");
});

// http://localhost:5000/user
app.get("/user", (req, res) => {
  // url/user?name=Omar
  console.log(req.query);
  const username = req.query.name;
  res.send(`<h2> Hey ${username}</h2>`);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});