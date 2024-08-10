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
        default: "https://www.popwebdesign.net/popart_blog/wp-content/uploads/2018/03/reactjs.jpg"
    }
  },
  { collection: "courses" }
);
export default courseSchema;