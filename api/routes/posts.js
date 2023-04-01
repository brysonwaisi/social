import express from 'express';
import { getPost } from '../controllers/PostController.js';

const router = express.Router()

router.get("", getPost)


export default router;