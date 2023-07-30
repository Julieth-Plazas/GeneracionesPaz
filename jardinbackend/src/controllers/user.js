const userCtrl = {};

const User = require("../models/user");
const assert = require("assert")

userCtrl.getUsers = async (req, res) => {
  const data = await User.find({});
  res.json(data);
};

userCtrl.createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.json({ message: "User created" });
  } catch (error) {
    res.json({ message: error });
  }
};

userCtrl.getUser = async (req, res) => {
  try {
    const data = await User.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.json({message: error})
  }
};

userCtrl.updateUser = async (req, res) => {
  try {
    await User.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.json({ message: "User updated" });
  } catch (error) {
    res.json({ message: error });
  }
};

userCtrl.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndRemove(req.params.id);
    res.json({ message: "User deleted" });
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports = userCtrl;
