const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(morgan("dev"));
app.use(express.json());

const UserModel = require("./model/user");

const mongoose = require("mongoose");
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("DB is connected"))
  .catch((err) => {
    console.log(`There was error ${err.message}`);
  });

// Middleware get user by ID
const getUserByID = async (req, res, next) => {
  //   const userByID = await UserModel.findOne({ _id: req.params.id });
  const userByID = await UserModel.findById({ _id: req.params.id });
  try {
    if (!userByID) {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
  res.user = userByID;
  next();
};
// Get All
app.get("/", async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
});
// Add new one
app.post("/", async (req, res) => {
  try {
    const newUser = new UserModel({
      name: req.body.name,
      city: req.body.city,
    });
    const user = await newUser.save();
    res.status(200).json({ message: "New User been created" });
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
});
module.exports = app;
