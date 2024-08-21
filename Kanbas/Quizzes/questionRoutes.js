import * as dao from "./questionDao.js";

export default function QuestionRoutes(app) {
  const createQuestion = async (req, res) => {
    const question = await dao.createQuestion(req.body);
    res.json(question);
  };
  app.post("/api/quizzes/:quiz/questions", createQuestion);

  // Nile: 
  /* I removed I was seeing issue when doing api requests
  const createQuestions = async (req, res) => {
    const question = await dao.createQuestion(req.body);
    res.json(question);
  };
  app.post("/api/quizQuestions/", createQuestions);
  */
  /*
    const deleteQuestion = async (req, res) => {
      const status = await dao.deleteQuestion(req.params.questionId);
      res.json(status);
    };
    app.delete("/api/questions/:questionId", deleteQuestion);
    // Nile:
    app.delete("/api/quizQuestions/:questionid", deleteQuestion);
    */

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
    try {
      const status = await dao.updateQuestion(questionId, req.body);
      if (!status) {
        return res.status(404).json({ message: "Question not found" });
      }
      res.json(status);
    } catch (error) {
      console.error("Error updating question:", error);
      res.status(500).json({ message: "Error updating question" });
    }
  };

  app.put("/api/questions/:questionId", updateQuestion);
}