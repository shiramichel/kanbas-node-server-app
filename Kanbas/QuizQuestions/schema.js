import mongoose from "mongoose";

const quizQuestionSchema = new mongoose.Schema ({
    // quiz:String,
    quiz: { type: String, required: true },
    // course:String,
    course: { type: String},
    tempID: { type: String },
    // name:String,
    title: { type: String, default: "Untitled Question" },
    // question:{ type: String, default: "MC" },
    question: { type: String },
    type: { type: String, default: "MC" },
    points:{ type: Number, default: 1 },
    options: [
        {
          value: { type: String },
          correct: { type: Boolean },
        },
    ],
},
    {collection:"questions"}

);

export default quizQuestionSchema;