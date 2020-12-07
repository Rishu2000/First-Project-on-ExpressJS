const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  //res.send("Hello, GFG");
  res.json(`Hello, GFGS`);
});

app.listen(port, () => {
  console.log(`Server started in port ${port}.`);
});
