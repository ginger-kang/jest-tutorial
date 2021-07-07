const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.json("Hello!");
});

app.get("/mori", (req, res) => {
  return res.json("nana");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
