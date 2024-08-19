import model from "./model.js";

export const createQuestion = (question) => {
  delete question._id
  question.options = question.options.map(option => {
    delete option._id
    return option
  })
  return model.create(question);
}

export const findAllQuestions = () => model.find();
export const findQuestionById = (questionId) => model.findById(questionId);
export const findQuestionByQuiz = (quizId) => model.find({quiz: quizId});
export const findQuestionByCourse = (courseId) => model.find({course: courseId});

export const updateQuestion = (questionId, question) => {
  question.options = question.options.map(option => {
    delete option._id
    return option
  })
  model.updateOne({ _id: questionId }, { $set: question });
}

export const deleteQuestion = (questionId) => model.deleteOne({ _id: questionId });