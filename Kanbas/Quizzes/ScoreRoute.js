import * as dao from "./ScoreDao.js";
import QuizModel from "./QuizModel.js";
import QuestionModel from "./QuestionModel.js"; // Ensure this is imported if needed

export default function ScoreRoutes(app) {
    // Fetch all scores for a specific user by login ID
    const findScoresByLoginId = async (req, res) => {
        try {
            const scores = await dao.findScoresByLoginId(req.params.loginId);
            res.json(scores);
        } catch (error) {
            console.error("Error finding scores:", error);
            res.status(500).json({ message: "Error finding scores" });
        }
    };

    // Fetch a specific score by its ID
    const findScoreById = async (req, res) => {
        try {
            const score = await dao.findScoreById(req.params.scoreId);
            if (!score) {
                res.status(404).json({ message: "Score not found" });
            } else {
                res.json(score);
            }
        } catch (error) {
            console.error("Error finding score by ID:", error);
            res.status(500).json({ message: "Error finding score by ID" });
        }
    };

    // Create or update a score for a quiz
    const createOrUpdateScore = async (req, res) => {
        try {
            const { userLoginId, quizId, answers, score } = req.body;

            // Fetch quiz details to get attemptsAllowed
            const quiz = await QuizModel.findById(quizId);
            if (!quiz) {
                return res.status(404).json({ message: "Quiz not found" });
            }

            const attemptsAllowed = quiz.attemptsAllowed;

            // Check if there is already a score for this user and quiz
            let existingScore = await dao.findScoreByLoginAndQuizId(userLoginId, quizId);
            
            if (existingScore) {
                if (existingScore.attempts.length >= attemptsAllowed) {
                    // If the number of attempts has been exhausted, do not allow further attempts
                    return res.status(403).json({ message: "Maximum number of attempts reached" });
                }

                // Update the existing score with a new attempt
                const newAttempt = {
                    attemptNumber: existingScore.attempts.length + 1,
                    dateTaken: new Date(),
                    score: score,
                    answers: answers
                };

                existingScore.attempts.push(newAttempt);
                existingScore.lastAttempt = newAttempt;
                existingScore.isCompleted = existingScore.attempts.length >= attemptsAllowed;

                await existingScore.save();
                res.json(existingScore);
            } else {
                // Create a new score document
                const newScore = {
                    loginId: userLoginId,
                    quizId: quizId,
                    attempts: [{
                        attemptNumber: 1,
                        dateTaken: new Date(),
                        score: score,
                        answers: answers
                    }],
                    attemptsAllowed: attemptsAllowed,
                    isCompleted: attemptsAllowed <= 1,
                    lastAttempt: {
                        attemptNumber: 1,
                        dateTaken: new Date(),
                        score: score,
                        answers: answers
                    }
                };

                const createdScore = await dao.createScore(newScore);
                res.json(createdScore);
            }
        } catch (error) {
            console.error("Error creating or updating score:", error);
            res.status(500).json({ message: "Error creating or updating score" });
        }
    };

    // Delete a score by its ID
    const deleteScore = async (req, res) => {
        try {
            const status = await dao.deleteScore(req.params.scoreId);
            if (status) {
                res.status(200).json({ message: "Score deleted successfully" });
            } else {
                res.status(404).json({ message: "Score not found" });
            }
        } catch (error) {
            console.error("Error deleting score:", error);
            res.status(500).json({ message: "Error deleting score" });
        }
    };

     // Fetch the last attempt for a specific quiz and user
     const findLastAttemptByQuizAndUser = async (req, res) => {
        try {
            const { loginId, quizId } = req.params;
            const score = await dao.findScoreByLoginAndQuizId(loginId, quizId);
            if (!score || !score.lastAttempt) {
                return res.status(404).json({ message: "No attempt found" });
            }
            res.json(score.lastAttempt);
        } catch (error) {
            console.error("Error fetching last attempt:", error);
            res.status(500).json({ message: "Error fetching last attempt" });
        }
    };

    // Define the API routes
    app.get("/api/scores/:loginId", findScoresByLoginId);
    app.get("/api/scores/:scoreId", findScoreById);
    app.post("/api/scores", createOrUpdateScore);  // Handle both create and update
    app.put("/api/scores/:scoreId", dao.updateScore);  // Fixing the reference to updateScore
    app.delete("/api/scores/:scoreId", deleteScore);
    app.get("/api/scores/:loginId/quiz/:quizId/lastAttempt", findLastAttemptByQuizAndUser); 
}
