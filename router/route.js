import { Router } from "express";
import * as controller from '../controllers/controller.js';

const router = Router();

router.route('/questions')
        .get(controller.getQuestions)
        .post(controller.insertQuestions)
        .delete(controller.dropQuestions);

router.route('/result')
        .get(controller.getResults)
        .post(controller.storeResult)
        .delete(controller.dropResults);

export default router;
