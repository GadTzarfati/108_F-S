import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './src/routes/userRoutes.js';


dotenv.config(); // קריאת קובץ .env

const app = express();

// חיבור ל-MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Middleware לטיפול בנתונים בפורמט JSON
app.use(express.json());

// חיבור הנתיב
app.use('/api/users', userRouter);

// הפעלת השרת
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
