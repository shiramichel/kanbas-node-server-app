import * as doa from "./dao.js";


export default function QuizDetailsRoutes(app) {

    const findAllQuizDetails = async(req,res) =>{
        //console.log("received request for quiz details");
        const status = await doa.findAllQuizDetails();
        //console.log(status);
        res.json(status);
    };

    const updateQuizDetail = async(req,res) => {
        //console.log("send update request:",req.body)
        const {_id} = req.params;
        //const {quizID1} = "testquizid123";
        //console.log("quiID value:",detailid);
        const status = await doa.updateQuizDetail(_id,req.body);
        res.json(status);
    }


    app.get("/api/quizDetails",findAllQuizDetails);
    app.put("/api/quizDetails/:_id",updateQuizDetail);
}