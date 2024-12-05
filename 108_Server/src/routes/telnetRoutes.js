import express from 'express';
import { connect } from '../controllers/telnetController.js';

const router = express.Router();

router.post('/', connect);

export default router;
