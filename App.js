import express from 'express'
import Hello from "./Hello.js"
import Lab5 from "./Lab5.js";
import cors from "cors";
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/modules/routes.js";

import session from "express-session"

const app = express();
app.use(express.json());

app.use(cors({}))
app.use(express.json());

// app.use(
//   session({
//     secret: "secret", //secures sending things, not in plain text,
//     resave: false,
//     saveUninitialized: true,
//     cookie: {secure: false}, //deply to heroku, needs to be true
//   })
// )

CourseRoutes(app);
ModuleRoutes(app);

Lab5(app);
Hello(app);

app.listen(process.env.PORT || 4000);