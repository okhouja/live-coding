require("dotenv").config;
// express

const express = require("express");
const app = express();
app.use(express.json());
app.use(logger);

// Middleware
function logger(req, res, next) {
  console.log("Log 1");
  next();
}

// http://localhost:5000/
app.get("/", (req, res) => {
  //   console.log(req);
  res.send("<h2> Welcome to our App</h2>");
});

// http://localhost:5000/about
app.get("/about", (req, res) => {
  console.log(req);
  res.send("<h2> We are the coolest people</h2>");
});

// http://localhost:5000/user
app.get("/user", userLogged, (req, res) => {
  // url/user?name=Omar
  //   console.log(req.query);
  //   const username = req.query.name;
  const username = req.userName;
  res.send(`<h2> Hey ${username}</h2>`);
});

function userLogged(req, res, next) {
  if (req.query.username == "Omar") {
    console.log("Log 2");
    req.userName = "Omar";
    next();
  } else {
    res.send("Login or Register");
  }
}

// http://localhost:5000/login

app.post("/login", (req, res) => {
  console.log(req.body);
  /*
  {
	"userName":"Omar",
	"pass":"000123fe345"
}
  */

  const userName = req.body.userName;
  const pass = req.body.pass;
  if (userName === "Omar" && pass === "000123fe345") {
    res.status(200).send(`Welcome Back <h1>${userName}</h1>`);
  } else {
    res.send(401).send("invalid username or pass");
  }
  res.send("cool");
});

app.get("/api", function (req, res) {
  res.status(200).json({ id: 1, cityname: "Hamburg", countrty: "Germany" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
