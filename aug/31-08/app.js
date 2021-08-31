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
};

module.exports = app;
