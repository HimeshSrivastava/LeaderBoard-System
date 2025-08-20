import User from '../models/user.model.js';
import History from '../models/history.model.js';

export const updateClaimimgPoint = async (req, res) => {
  try {
    const { userId } = req.params;
    
    const points = Math.floor(Math.random() * 10) + 1;

    const user = await User.findByIdAndUpdate(
      userId,
      { $inc: { totalPoints: points } },
      { new: true }
    );

    await History.create({
      userId: userId,
      pointsClaimed: points
    });

    res.json({ success: true, pointsClaimed: points, user });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

export const findUser = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Error fetching users" });
  }
};

export const addUser = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ error: "Name is required" });
    }

    const newUser = new User({ name });
    await newUser.save();

    res.json(newUser);
  } catch (err) {
    res.status(500).json({ error: "Error adding user" });
  }
};
