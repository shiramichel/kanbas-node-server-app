import mongoose from "mongoose";

const quizQuestionSchema = new mongoose.Schema ({
    quiz:String,
    course:String,
    tempID:String,
    name:String,
    question:{ type: String, default: "MC" },
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