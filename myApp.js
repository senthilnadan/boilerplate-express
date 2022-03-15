var express = require("express");
const res = require("express/lib/response");
var app = express();

app.use(express.static(__dirname + "/public"));

app.use("/public", express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  absolutePath = __dirname + "/views/index.html";

  res.sendFile(absolutePath);
});

app.get("/json", function (req, res) {
  res.send({ message: "Hello Json" });
});
console.log("Hello World");

module.exports = app;
