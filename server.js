const express = require("express");
const root = require("./routes/root");
const app = express();
const port = 5000;

app.use("/", root);

app.use("/", root);

app.listen(port, () => {
  console.log(`Server started in port ${port}.`);
});
