var express = require("express"),
  mongoose = require("mongoose"),
  bcrypt = require("bcrypt"),
  router = new express.Router(),
  Question = mongoose.model("Question"),
  saltRounds = 10;

mongoose.connect(
  "mongodb://admin:adminpassword1@ds247101.mlab.com:47101/respirhacktion",
  { useNewUrlParser: true }
);

router.post('/question', function (req, res) {
	var questionObj = {
		questionText: req.body.questionText,
		category: req.body.category,
		id: req.body.id,
		answers: req.body.answers
	}
	var question = Question(questionObj)
	question.save(function(err) {
		if (err) {
			res.status(500).json({
				error: err
			})
		} else {
			res.status(200).json({
				ok: 'ok'
			})
		}
	})
})

router.get('/question', function (req, res) {
	if (!req.query.category) {
		res.status(400).json({
			success: false,
			message: 'Field required: category'
		})
	} else {
		Question.find({category: req.query.category}).sort({id: 1}).exec(function(err, doc) {
			if (!doc) {
				res.status(500).json({
					success: false,
					message: 'Internal error'
				})
			} else {
				res.status(200).json({
					success: true,
					results: doc
				})
			}
		})
	}
})

module.exports = router;
