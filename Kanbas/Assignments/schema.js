import mongoose from "mongoose";
const assignmentSchema = new mongoose.Schema({
    course: { type: String, required: true, unique: true },
    title: String,
    availableDate: String,
    dueDate: String,
    points: String,
    description: String,
  },
  { collection: "assignments" }
);
export default assignmentSchema;