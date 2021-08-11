require("dotenv").config;
// express

const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
