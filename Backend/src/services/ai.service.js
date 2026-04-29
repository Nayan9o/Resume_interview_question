const { GoogleGenAI } = require("@google/genai");
const { z } = require("zod");
import { zodToJsonSchema } from "zod-to-json-schema";

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_GENAI_API_KEY,
});

const interviewReportSchema = z.object({
  matchScore: z
    .number()
    .discription(
      "A score between 0 to 100 indicating how will the candidate profile match the job discription ",
    ),
  technicalQuestions: z
    .array(
      z.object({
        question: z
          .string()
          .discription("The technical question can be ask in the Interview"),
        intention: z
          .string()
          .discription(
            "The intention of interviewer behind asking the question",
          ),
        answer: z
          .string()
          .discription(
            "How to answer the question, what point to cover, what aproch to take",
          ),
      }),
    )
    .discription(
      "Technical question that can be asked in the interview along with there intention and how to answer them",
    ),
  behaviorQuestions: z
    .array(
      z.object({
        question: z
          .string()
          .discription("The technical question can be ask in the Interview"),
        intention: z
          .string()
          .discription(
            "The intention of interviewer behind asking the question",
          ),
        answer: z
          .string()
          .discription(
            "How to answer the question, what point to cover, what aproch to take",
          ),
      }),
    )
    .discription(
      "Behavior question that can be asked in the interview along with there intention and how to answer them",
    ),
  skillGap: z
    .array(
      z.object({
        skill: z
          .string()
          .discription("The skill which the candidate is lacking"),
        severity: z
          .enum(["low", "medium", "high"])
          .discription("The severity of skill gap i.e."),
      }),
    )
    .discription(
      "List of skills gap in the candidate profile along with there severity",
    ),
  preparationPlan: z
    .array(
      z.object({
        day: z
          .number()
          .discription(
            "The day number in the prepartion plan, Starting form 1",
          ),
        focus: z
          .string()
          .discription("The main focus this day in the preparation"),
        tasks: z
          .array(z.string())
          .discription("List of the task to be done on this day"),
      }),
    )
    .discription("A day-wise preparation plan for the condidate to follow"),
});

async function generateInterviewReport({
  resume,
  selfDiscription,
  jobDiscription,
}) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "",
    config: {
      responseMimeType: "application/json",
      responseJsonSchema: zodToJsonSchema(interviewReportSchema),
    },
  });
}

module.exports = invokeGeminiAi;
