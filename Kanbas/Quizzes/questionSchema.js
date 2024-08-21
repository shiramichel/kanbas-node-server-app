import mongoose from "mongoose";

const questionsSchema = new mongoose.Schema({
  quiz: { type: String, required: true },
  course: { type: String, required: true },
  tempID: { type: String },
  title: { type: String, default: "Untitled Question" },
  question: { type: String },
  type: { type: String, default: "MC" },
  points: { type: Number, default: 1 },
  options: [
    {
      value: { type: String },
      correct: { type: Boolean },
    },
  ],
},
  { collection: "questions" }
);


export default questionsSchema;