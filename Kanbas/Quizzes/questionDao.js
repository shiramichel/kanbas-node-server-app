import QuestionModel from "./QuestionModel.js";

<<<<<<< HEAD

export const createQuestion = (question) => {
  delete question._id
=======
<<<<<<< HEAD
export const createQuestion = (question) => {
  delete question._id
  return model.create(question);
=======

export const createQuestion = (question) => {
  delete question._id
>>>>>>> 73cfe69 (fixed score records)
  question.options = question.options.map(option => {
    delete option._id
    return option
  }) 
  return QuestionModel.create(question);
<<<<<<< HEAD
=======
>>>>>>> 6d8fd01 (fixed score records)
>>>>>>> 73cfe69 (fixed score records)
}

export const findAllQuestions = () => QuestionModel.find();
export const findQuestionById = (questionId) => QuestionModel.findById(questionId);
export const findQuestionByQuiz = (quizId) => QuestionModel.find({quiz: quizId});
export const findQuestionByCourse = (courseId) => QuestionModel.find({course: courseId});
<<<<<<< HEAD
=======
<<<<<<< HEAD
export const updateQuestion = (questionId, question) => QuestionModel.updateOne({ _id: questionId }, { $set: question });
=======
>>>>>>> 73cfe69 (fixed score records)


export const updateQuestion = (questionId, question) => {
  question.options = question.options.map(option => {
    delete option._id
    return option
  });
  QuestionModel.updateOne({ _id: questionId }, { $set: question });
};


<<<<<<< HEAD
=======
>>>>>>> 6d8fd01 (fixed score records)
>>>>>>> 73cfe69 (fixed score records)
export const deleteQuestion = (questionId) => QuestionModel.deleteOne({ _id: questionId });