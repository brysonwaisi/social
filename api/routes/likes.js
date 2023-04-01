import express from 'express';
import { getLike } from '../controllers/LikeController.js';

const router = express.Router()

router.get("", getLike)


export default router;