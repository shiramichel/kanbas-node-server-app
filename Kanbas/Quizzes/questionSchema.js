import mongoose from "mongoose";

const questionsSchema = new mongoose.Schema({
  quiz: { type: String, required: true },
  course: { type: String, required: true },
  title: { type: String, default: "Untitled Question", required: true }, 
  type: { type: String, default: "MC" },
  points: { type: Number, default: 1, required: true }, 
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