import express from 'express';
import { getConnectionInfo } from '../controllers/telnetController.js';

const router = express.Router();

router.get('/info', getConnectionInfo);

export default router;
