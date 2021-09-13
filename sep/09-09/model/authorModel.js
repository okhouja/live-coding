// mongodb subDocs
const mongoose = require("mongoose");
//
const bookSchema = new mongoose.Schema(
  {
    _id: false,
    title: String,
    issueYear: Number,
  }
  // { versionKey: "_something" }
);

const authorSchema = new mongoose.Schema(
  {
    authorName: String,
    books: [bookSchema],
  },

  // removing password and __v from the returned data from api
  {
    toJSON: {
      transform: function (doc, ret) {
        delete ret.password;
        delete ret.__v;
      },
    },
  }
);

module.exports = mongoose.model("author", authorSchema);
