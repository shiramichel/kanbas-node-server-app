import model from "./model.js";

export const createQuestion = (question) =>{
    delete question._id;
    /*
    question.options = question.options.forEach(option => {
        delete option._id
        return option
      })
    */
    return model.create(question);
};

export const deleteQuestion = (questionID) => model.deleteOne({ _id: questionID });