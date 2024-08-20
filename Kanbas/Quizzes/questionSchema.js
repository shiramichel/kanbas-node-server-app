import mongoose from "mongoose";

const questionsSchema = new mongoose.Schema({
  quiz: { type: String, required: true },
  course: { type: String, required: true },
<<<<<<< HEAD
  title: { type: String, default: "Untitled Question" },
=======
<<<<<<< HEAD
=======
  title: { type: String, default: "Untitled Question" },
>>>>>>> 6d8fd01 (fixed score records)
>>>>>>> 73cfe69 (fixed score records)
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