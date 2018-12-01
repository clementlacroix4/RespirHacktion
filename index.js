const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", function(req, res) {
  res.status(404).json({
    message: "Not found"
  });
});

require("./models/user");
require("./models/questions")
var userCtrl = require('./controllers/user');
var questionsCtrl = require('./controllers/questions')

app.use('/', userCtrl)
app.use('/', questionsCtrl)

app.listen(3000);
