import express from 'express';
import { handleSSHConnection } from '../controllers/sshController.js'; // ייבוא הבקר

const router = express.Router();

// נתיב לטיפול בבקשת POST
router.post('/', handleSSHConnection);

export default router;
