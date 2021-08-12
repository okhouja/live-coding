/* 
To start new express project
npm init -y
 echo "PORT=5000" > .env
 echo "node_modules/" > .gitignore
 npm i express
 npm i dotenv
 npm i lowdb
 npm i nodemon --save-dev
 touch index.js
 json script
 "start": "nodemon index.js"
 */

// express
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

//lowdb
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const jsonFile = new FileSync("db.json");
const db = low(jsonFile);

// json setup old school
// const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(bodyParser.raw());
// json cool method
app.use(express.json());

//root route
app.get("/", (req, res) => {
  res.send("Welcome to our lowdb application");
});

// db init
app.get("/new", async (req, res) => {
  await db.defaults({ articles: [], user: {}, num: 1 }).write();
  res.send("New db being init");
});

// add a new article to the array of articels
app.get("/add-article", async (req, res) => {
  // url /add?id=1&title=cool
  const id = req.query.id;
  const title = req.query.title;
  db.get("articles").push({ id: id, title: title }).write();
  res.send(`New data being entered id:${id} title:${title}`);
});

// add a new properties to db
app.get("/add-prop", async (req, res) => {
  // url /add-prop?id=1&key=colors&value=blue
  const id = req.query.id;
  const key = req.query.key;
  const value = req.query.value;
  db.set(key, { id: id, [key]: value }).write();
  res.send(`New data being entered id:${id},${key}:${value}`);
});

// find

app.get("/find", async (req, res) => {
  // find?id=1
  const idToFind = req.query.id;
  res.send(await db.get("articles").find({ id: idToFind }).value());
  let text = "";
  if (result) {
    text = result;
  } else {
    text = "sorry, not found";
  }
});

// update
app.get("/update", async (req, res) => {
  // url /update
  await db.update("num", (n) => n + 1).write();
  const num = db.get("num").value();
  res.send(`num was updated, now is = ${num}`);
});

app.get("/user", async (req, res) => {
  // url /user?name=Omar
  const name = req.query.name;
  await db.set("user.name", name).write;
  res.send(`Hey ${name}`);
});

// delete
app.delete("/delete", async (req, res) => {
  // to remove an article
  //url /delete?title=water
  //   const title = req.query.title;
  const id = req.query.id;
  //   await db.get("articles").remove({ title: title }).write();
  //   res.status(200).send(`Your ${title} has been removed`);
  // to remove p
  // url /delete
  db.get("article").remove({ id: id }).write();
  res.status(200).send("user.name has been removed");
});

app.listen(PORT, () => {
  console.log(`server listen on http://localhost:${PORT}`);
});
