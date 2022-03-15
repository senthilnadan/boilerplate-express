var express = require("express");
const res = require("express/lib/response");
var app = express();

app.get("/", function (req, resp) {
  res.send("Response String");
});

console.log("Hello World");

module.exports = app;
