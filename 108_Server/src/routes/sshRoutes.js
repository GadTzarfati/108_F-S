import express from 'express';
import { openCommandPrompt, runSshInDocker } from '../controllers/sshController.js';

const router = express.Router();

router.post('/open-cmd', openCommandPrompt);
router.post('/run-ssh-in-docker', runSshInDocker);


export default router;