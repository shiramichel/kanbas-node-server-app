import mongoose from "mongoose";
import ScoreSchema from "./ScoreSchema.js";

const ScoreModel = mongoose.model("Score", ScoreSchema);

export default ScoreModel;
