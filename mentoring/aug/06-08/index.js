const express = require("express");
const app = express();

const port = 1024;

app.get("/", (req, res) => {
  res.send(`Hello World! at Port ${port}`);
});
app.listen(port, () => console.log(`Hello World on Port ${port}`));
