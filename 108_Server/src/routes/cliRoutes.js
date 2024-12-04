import express from 'express';
import { handleCLICommand } from '../controllers/cliController.js';

const router = express.Router();

router.post('/execute', handleCLICommand);

export default router;
