import { Router } from 'express';
import { getConnectionInfo } from '../controllers/telnetController.js';

const router = Router();

router.get('/info', getConnectionInfo);

export default router;
