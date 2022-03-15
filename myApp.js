var express = require("express");
const res = require("express/lib/response");
var app = express();

app.get("/", function (req, res) {
  absolutePath = __dirname + "/views/index.html";

  res.sendFile(absolutePath);
});
console.log("Hello World");

module.exports = app;
