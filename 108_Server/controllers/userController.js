import User from '../models/userModel.js';

// קבלת רשימת משתמשים
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// יצירת משתמש חדש
export const createUser = async (req, res) => {
  const { name, email } = req.body;

  const newUser = new User({
    name,
    email,
  });

  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
