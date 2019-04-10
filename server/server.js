const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 4000;

const catsJson = require("../data/q1_cat.json");
const dogsJson = require("../data/q1_dog.json");

app.use(express.static(path.join(__dirname, "..", "public/")));

// if you need api routes add them here
app.get("/api/cats", function(req, res, next) {
  res.send(catsJson);
});
app.get("/api/dogs", function(req, res, next) {
  res.send(dogsJson);
});

app.listen(PORT, () => {
  console.log(`Check out the app at http://localhost:${PORT}`);
});
