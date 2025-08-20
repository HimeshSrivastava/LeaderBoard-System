import User from "../models/user.model.js";

export const updatingLeaderboard = async (req, res) => {
  try {
    const users = await User.find().sort({ totalPoints: -1 }).limit(10);
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
export const updatingHistory = async (req, res) => {
  try {
    const users = await User.find().sort({ totalPoints: -1 }).limit(3);
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};