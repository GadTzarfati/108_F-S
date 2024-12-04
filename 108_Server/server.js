import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import userRouter from './src/routes/userRoutes.js';
import sshRouter from './src/routes/sshRoutes.js'; // ייבוא הנתיב ל-SSH
import cliRouter from './src/routes/cliRoutes.js';

// קריאת קובץ .env
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// חיבור ל-MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
  });

// חיבור נתיבים
app.use('/api/users', userRouter);
app.use('/api/ssh', sshRouter);
app.use('/api/cli', cliRouter); 

// ניהול שגיאות גלובלי
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// הפעלת השרת
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
