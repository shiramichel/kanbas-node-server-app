import mongoose from "mongoose";
const moduleSchema = new mongoose.Schema({
    course: { type: String, required: true, unique: true },
    name: String,
    description: String,
    lessons: { 
        id: String,
        name: String,
        description: String,
        module: String
    }
  },
  { collection: "modules" }
);
export default moduleSchema;