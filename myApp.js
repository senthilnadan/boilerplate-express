var express = require("express");
const res = require("express/lib/response");
var app = express();

app.get("/", function (req, res) {
  res.send("Hello Express");
});
console.log("Hello World");

module.exports = app;
