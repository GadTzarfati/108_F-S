import express from 'express';
import userRouter from './src/routes/userRoutes.js';

const app = express();

// Middleware לטיפול בנתונים בפורמט JSON
app.use(express.json());

// חיבור הנתיב
app.use('/api/users', userRouter);

// הפעלת השרת
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
