import express from 'express';
import { runCommand } from '../controllers/cliController.js';

const router = express.Router();

router.post('/', runCommand);

export default router;
