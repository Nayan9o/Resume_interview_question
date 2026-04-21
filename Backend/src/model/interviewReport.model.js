const mongoose = require("mongoose");

/**
 * - job description schema
 * -resume text
 * - self description
 * -Match score : number
 * -Technical questins :
 * [{
 * quesiton:''&intention:' '  & answer: ''}]
 * -Behavioral questions: [same as technical question schema]
 * Skill gaps :  [{
 *          skills : "",
 *          severity : {
 *            type: String,
 *          enum: [low,medium,high]}}]
 * -preparation plan : [{
 *      day: number,
 *    foucs: string,
 *    tasks: [string]}]
 *
 */

const technialQuestionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, "Question is Required"],
    },
    intention: {
      type: String,
      required: [true, "Intention is required"],
    },
    answer: {
      type: String,
      required: [true, "Answer is required"],
    },
  },
  {
    _id: false,
    //not create seperate id for it
  },
);

const behavioralQuesitonSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, "Question is Required"],
    },
    intention: {
      type: String,
      required: [true, "Intention is required"],
    },
    answer: {
      type: String,
      required: [true, "Answer is required"],
    },
  },
  {
    _id: false,
    //not create seperate id for it
  },
);

const skillGapSchema = new mongoose.Schema(
  {
    skill: {
      type: String,
      required: [true, "Skill is required"],
    },
    severity: {
      type: String,
      enum: [low, medium, high],
      required: [true, "Severity is required"],
    },
  },
  {
    _id: false,
  },
);

const preparationPlanSchema = new mongoose.Schema(
  {
    date: {
      type: Number,
      required: [true, "Date is required"],
    },
    focus: {
      type: String,
      required: [true, "Focus is required"],
    },
    tasks: [
      {
        type: String,
        required: [true, "task is required"],
      },
    ],
  },
  { _id: false },
);

const interviewReportSchema = new mongoose.Schema({
  jobDiscription: {
    type: String,
    required: [true, "Job discription is required "],
  },
  resume: {
    type: String,
  },
  selfDiscription: {
    type: true,
  },
  matchScore: {
    type: Number,
    min: 0,
    max: 100,
  },
  technialQuestion:[technialQuestionSchema],
  behavioralQuesiton:[behavioralQuesitonSchema],
  skillGap:[skillGapSchema],
  preparationPlan: [preparationPlanSchema]
},{
  timestamps: true
});

const interviewReportModel = mongoose.model("interviewReport",interviewReportSchema)

module.exports = interviewReportModel