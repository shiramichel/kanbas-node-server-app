import * as dao from "./dao.js";
export default function QuestionRoutes(app) {
  const createQuestion = async (req, res) => {
    const question = await dao.createQuestion(req.body);
    res.json(question);
  };
  app.post("/api/quizzes/:qid/questions", createQuestion);

  const deleteQuestion = async (req, res) => {
    const status = await dao.deleteQuestion(req.params.questionId);
    res.json(status);
  };
  app.delete("/api/questions/:questionId", deleteQuestion);

  const findAllQuestions = async (req, res) => {
    const questions = await dao.findAllQuestions();
    res.json(questions);
  };
  app.get("/api/questions", findAllQuestions);

  const findQuestionById = async (req, res) => {
    const question = await dao.findQuestionById(req.params.questionId);
    res.json(question);
  };
  app.get("/api/questions/:questionId", findQuestionById);

  const findQuestionByQuiz = async (req, res) => {
    const questions = await dao.findQuestionByQuiz(req.params.quiz);
    res.json(questions);
  };
  app.get("/api/quizzes/:quiz/questions", findQuestionByQuiz);

  const updateQuestion = async (req, res) => {
    const { questionId } = req.params;
    const status = await dao.updateQuestion(questionId, req.body);
    res.json(status);
  };
  app.put("/api/questions/:questionId", updateQuestion);
}
