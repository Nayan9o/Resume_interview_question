const mongoose = require('mongoose')

/**
 * - job description schema
 * -resume text
 * - self description
 * -Match score : number
 * -Technical questins :
 * [{
 * quesiton:''&interion:' '  & answer: ''}]
 * -Behavioral questions: []
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