const express = require("express");
const app = express.Router();

app.get("/", (req, res) => {
  res.json(`Welcome to the Rishav very first ExpressJS App. Hello!`);
});

module.exports = app;
