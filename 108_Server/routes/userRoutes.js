import express from 'express';
import { getUsers, createUser } from '../controllers/userController.js';

const router = express.Router();

// GET: קבלת רשימת משתמשים
router.get('/', getUsers);

// POST: יצירת משתמש חדש
router.post('/', createUser);

export default router;
