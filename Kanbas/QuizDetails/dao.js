import model from "./model.js";


export const findAllQuizDetails = () => model.find();
export const updateQuizDetail = (detailid, detail) => model.updateOne({_id:detailid},{$set:detail});