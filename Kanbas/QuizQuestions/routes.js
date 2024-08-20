import * as dao from "./dao.js";

export default function quizQuestionsRoutes(app) {
    const deleteQuestion = async(req,res) => {
        const {questionid} = req.params;
        //console.log("deleting quesitonID:",questionid);
        const status = await dao.deleteQuestion(questionid);
        res.json(status);
    };

    const createQuestions = async(req,res) =>{
        //console.log("creating a questions",req.body);
        const question = await dao.createQuestion(req.body);
        res.json(question);
    }

    app.post("/api/quizQuestions/",createQuestions);
    app.delete("/api/quizQuestions/:questionid",deleteQuestion);
}

