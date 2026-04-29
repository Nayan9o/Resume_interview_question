import "dotenv/config";
import app from "./src/app.js";
import connectToDB from "./src/config/db.js";
import {
  resume,
  selfDiscription,
  jobDiscription,
} from "./src/services/temp.js";
import generateInterviewReport from "./src/services/ai.service.js";

connectToDB();
generateInterviewReport({ resume, selfDiscription, jobDiscription });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
