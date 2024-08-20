import ScoreModel from "./ScoreModel.js";

// Create a new score entry
export const createScore = async (score) => {
    delete score._id;
    return await ScoreModel.create(score);
};

// Find a score by scoreId
export const findScoreById = async (scoreId) => {
    return await ScoreModel.findById(scoreId).populate('quizId').populate('lastAttempt.answers.questionId');
};

// Find all scores by loginId
export const findScoresByLoginId = async (loginId) => {
    return await ScoreModel.find({ loginId }).populate('quizId');
};

// Update a score by scoreId
export const updateScore = async (scoreId, score) => {
    return await ScoreModel.findByIdAndUpdate(scoreId, score, { new: true });
};

// Delete a score by scoreId
export const deleteScore = async (scoreId) => {
    return await ScoreModel.findByIdAndDelete(scoreId);
};

// Find the score by loginId and quizId
export const findScoreByLoginAndQuizId = async (loginId, quizId) => {
    return await ScoreModel.findOne({ loginId, quizId });
};

export const findLastAttemptByLoginAndQuizId = async (loginId, quizId) => {
    return await ScoreModel.findOne({ loginId, quizId }, 'lastAttempt').populate('lastAttempt.answers.questionId');
};