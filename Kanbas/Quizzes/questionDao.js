import QuestionModel from "./QuestionModel.js";

export const createQuestion = (question) => {
  delete question._id
  question.options = question.options.map(option => {
    delete option._id
    return option
  })
  return model.create(question);
}

export const findAllQuestions = () => QuestionModel.find();
export const findQuestionById = (questionId) => QuestionModel.findById(questionId);
export const findQuestionByQuiz = (quizId) => QuestionModel.find({quiz: quizId});
export const findQuestionByCourse = (courseId) => QuestionModel.find({course: courseId});

export const updateQuestion = (questionId, question) => {
  question.options = question.options.map(option => {
    delete option._id
    return option
  });
  
  return model.updateOne({ _id: questionId }, { $set: question });
};

export const deleteQuestion = (questionId) => QuestionModel.deleteOne({ _id: questionId });