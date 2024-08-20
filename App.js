import "dotenv/config";
import express from 'express';
import mongoose from "mongoose";
import Hello from "./Hello.js";
import Lab5 from "./Lab5/index.js";
import UserRoutes from "./Kanbas/Users/routes.js";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from './Kanbas/Modules/routes.js';
import AssignmentRoutes from './Kanbas/Assignments/routes.js';
<<<<<<< HEAD
=======
<<<<<<< HEAD
import QuestionRoutes from './Kanbas/Questions/routes.js';
=======
>>>>>>> 73cfe69 (fixed score records)
import QuestionRoutes from './Kanbas/Quizzes/questionRoutes.js';
import QuizzesRoutes from './Kanbas/Quizzes/quizRoutes.js';
import scoreRoutes from './Kanbas/Quizzes/ScoreRoute.js';

import quizQuestionsRoutes from "./Kanbas/QuizQuestions/routes.js";
import QuizDetailsRoutes from "./Kanbas/QuizDetails/routes.js";

<<<<<<< HEAD
=======
>>>>>>> 6d8fd01 (fixed score records)
>>>>>>> 73cfe69 (fixed score records)
import cors from "cors";
import session from "express-session";

const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas"
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(
  cors({
    credentials: true,
    origin: process.env.NETLIFY_URL || "http://localhost:3000",
  })
);

const sessionOptions = {
  secret: process.env.SESSION_SECRET || "kanbas",
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
    domain: process.env.NODE_SERVER_DOMAIN,
  };
}
app.use(session(sessionOptions));
app.use(express.json());
Hello(app)
Lab5(app);
UserRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
QuestionRoutes(app);
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 73cfe69 (fixed score records)
QuizzesRoutes(app);
scoreRoutes(app);

quizQuestionsRoutes(app);
QuizDetailsRoutes(app);
<<<<<<< HEAD
=======
>>>>>>> 6d8fd01 (fixed score records)
>>>>>>> 73cfe69 (fixed score records)

app.listen(process.env.PORT || 4000)