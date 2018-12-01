var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

var AnswerSchema = new Schema({
 id: Number,
 type: String,
 label: String,
 placeholder: String,
});

var QuestionsSchema = new Schema({
  questionText: String,
  category: Number,
  id: Number,
  answers: [AnswerSchema]
});

module.exports = mongoose.model("Question", QuestionsSchema);
