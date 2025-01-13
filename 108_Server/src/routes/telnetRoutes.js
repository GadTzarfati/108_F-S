import express from 'express';
import { createTelnetConnection, getConnectionInfo } from '../controllers/telnetController.js';

const router = express.Router();

router.post('/connect', createTelnetConnection);
router.get('/info', getConnectionInfo);

export default router;
