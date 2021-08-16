const express = require("express");
const app = express();
const morgan = require("morgan");
const createError = require("http-errors");
const userRouter = require("./router/users");
const bookRouter = require("./router/books");

app.use(morgan("dev"));

// Middleware
// app.use((req, res, next) => {
//   if (!req.query.userName) return next(createError(401, "Login to this page"));
//   next();
// });
// localhost:5000/user (GET PUT  POST,...)
app.use("/users", userRouter);
app.use("/books", bookRouter);

//root
// url localhost:5000/
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
