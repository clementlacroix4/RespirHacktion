var express = require("express"),
  mongoose = require("mongoose"),
  bcrypt = require("bcrypt"),
  router = new express.Router(),
  User = mongoose.model("User"),
  saltRounds = 10;

mongoose.connect(
  "mongodb://admin:adminpassword1@ds247101.mlab.com:47101/respirhacktion",
  { useNewUrlParser: true }
);

router.post("/register", function(req, res) {
  if (!req.body.firstname || !req.body.password || !req.body.email || !req.body.lastname || !req.body.city || !req.body.phone) {
    res.status(400).json({
      success: false,
      message: "Fields required: firstname, lastname, password, email, city, phones"
    });
  } else {
    var userObj = {
      firstname: req.body.firstname,
      lasname: req.body.lastname,
	  email: req.body.email,
	  phone: req.body.phone,
	  city: req.body.city
    };
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
      if (err) {
        res.status(500).json({
          success: false,
          message: "Internal server error"
        });
      } else {
        userObj.password = hash;
        var user = User(userObj);
        user.save(function(err) {
          if (err) {
            res.status(500).json({
              success: false,
              message: "Unable to add user"
            });
          } else {
            res.status(200).json({
              success: true,
              message: "User saved",
              user: user._id
            });
          }
        });
      }
    });
  }
});

router.post("/login", function(req, res) {
  if (!req.body.email || !req.body.password) {
    res.status(400).json({
      success: false,
      message: "Fields required: email, password"
    });
  } else {
    User.findOne({ email: req.body.email }, function(err, doc) {
      if (!doc) {
        res.status(400).json({
          success: false,
          message: "User doesn't exist"
        });
      } else {
        bcrypt.compare(req.body.password, doc.password, function(err, state) {
          if (err) {
            res.status(500).json({
              success: false,
              message: "Internal server error"
            });
          } else if (state === false) {
            res.status(400).json({
              success: false,
              message: "Invalid password"
            });
          } else {
            res.status(200).json({
              success: true,
              message: "User logged",
              userId: doc._id,
              user: doc.email
            });
          }
        });
      }
    });
  }
});

module.exports = router;
