import express from 'express';

const router = express.Router();

// נתיב POST - יצירת משתמש
router.post('/', (req, res) => {
    const { name, email, password } = req.body;
    res.status(201).json({
        message: 'User created successfully',
        user: { name, email }
    });
});

export default router;

