import express from 'express';
import { getComment } from '../controllers/CommentController.js';

const router = express.Router()

router.get("", getComment)


export default router;