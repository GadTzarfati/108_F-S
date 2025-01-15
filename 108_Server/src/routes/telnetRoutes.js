import { Router } from 'express';
import { openUbuntuAndStartNC } from '../controllers/telnetController.js';

const router = Router();

router.get('/start-nc', openUbuntuAndStartNC);

export default router;
