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
    res.status(201).json({ message: "New User been created", user });
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
});
// Get one
app.get("/:id", getUserByID, async (req, res) => {
  try {
    res.status(200).json(res.user);
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
});

// https://mongoosejs.com/docs/api.html#model_Model.findByIdAndUpdate

// Patch one

app.patch("/:id", getUserByID, async (req, res) => {
  try {
    //                          id, the update, options, callback
    const userByID = await UserModel.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name || res.user.name,
        city: req.body.city || res.user.city,
      },
      {
        new: true,
        // see only name als results
      }
    );
    res
      .status(200)
      .json({ message: "This user got Update successfully", userByID });
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
});
// Delete one

app.delete("/:id", getUserByID, async (req, res) => {
  try {
    const deleteUserById = await UserModel.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .json({ message: "This user has been deleted", deleteUserById });
  } catch (err) {
    res.status(err.status).json({ message: err.message });
  }
});
module.exports = app;
