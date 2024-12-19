import express from 'express';
import { runDockerSSH } from '../controllers/sshController.js';

const router = express.Router();

router.post('/start-ssh', runDockerSSH);

export default router;
