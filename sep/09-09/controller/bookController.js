const AuthorModel = require("../model/authorModel");
const bookController = {};

bookController.getAll = async (req, res) => {
  try {
    const authors = await AuthorModel.find();
    res.status(200).json(authors);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = bookController;
