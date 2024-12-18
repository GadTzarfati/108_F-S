import express from 'express';
import { openCommandPrompt } from '../controllers/sshController.js';

const router = express.Router();

router.post('/open-cmd', openCommandPrompt);

export default router;
