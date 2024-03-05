import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import questions, { answers } from '../database/data.js';

/** Get all questions */
export async function getQuestions(req, res){
    try {
        const q = await Questions.find();
        res.json(q);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

/** Insert all questions */
export async function insertQuestions(req, res){
    try {
        await Questions.insertMany({ questions, answers });
        res.json({ msg: "Data Saved Successfully...!"});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

/** Delete all questions */
export async function dropQuestions(req, res){
   try {
        await Questions.deleteMany();
        res.json({ msg: "Questions Deleted Successfully...!"});
   } catch (error) {
        res.status(500).json({ error: error.message });
   }
}

/** Get all results */
export async function getResults(req, res){
    try {
        const r = await Results.find();
        res.json(r);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

/** Post a result */
export async function storeResult(req, res){
   try {
        const { username, result, attempts, points, achieved } = req.body;
        if(!username || !result) throw new Error('Data Not Provided...!');

        const newResult = await Results.create({ username, result, attempts, points, achieved });
        res.json({ msg : "Result Saved Successfully...!", data: newResult });

   } catch (error) {
        res.status(500).json({ error: error.message });
   }
}

/** Delete all results */
export async function dropResults(req, res){
    try {
        await Results.deleteMany();
        res.json({ msg : "Results Deleted Successfully...!"});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
