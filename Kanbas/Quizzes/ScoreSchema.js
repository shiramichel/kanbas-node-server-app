import mongoose from "mongoose";

const AnswerSchema = new mongoose.Schema({
  questionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Question', required: true },
  selectedAnswer: { type: String, required: true },
  isCorrect: { type: Boolean, required: true }
});

const AttemptSchema = new mongoose.Schema({
  attemptNumber: { type: Number, required: true },
  dateTaken: { type: Date, required: true },
  score: { type: Number, required: true },
  answers: [AnswerSchema]
});

const LastAttemptSchema = new mongoose.Schema({
  attemptNumber: { type: Number, required: true },
  score: { type: Number, required: true },
  dateTaken: { type: Date, required: true },
  answers: [AnswerSchema]
});

const ScoreSchema = new mongoose.Schema({
  loginId: { type: String, required: true },
  quizId: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz', required: true },
  attempts: [AttemptSchema],
  attemptsAllowed: { type: Number, required: true },
  isCompleted: { type: Boolean, default: false },
  lastAttempt: LastAttemptSchema
}, { collection: "scores" });

export default ScoreSchema;
