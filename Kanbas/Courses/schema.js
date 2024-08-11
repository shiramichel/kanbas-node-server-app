import mongoose from "mongoose";
const courseSchema = new mongoose.Schema({
    number: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    //startDate: Date,
    //endDate: Date,
    //department: String, 
    //credits: Number, 
    description: String,
    image: { 
        type: String,
        default: "images/reactjs.jpg"
    }
  },
  { collection: "courses" }
);
export default courseSchema;