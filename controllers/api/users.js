const User = require("../../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

async function create(req, res) {
  try {
    // Add the user to the database
    const user = await User.create(req.body);
    // token will be a string
    const token = createJWT(user);
    // Yes, we can use res.json to send back just a string
    res.json(token);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) throw new Error("User not found");
    const match = bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error("Wrong password");
    const token = createJWT(user);
    res.json(token);
  } catch (err) {
    res.status(400).json(err);
  }
}

module.exports = {
  create,
  login,
};

function createJWT(user) {
  return jwt.sign({ user }, process.env.SECRET, { expiresIn: "24h" });
}
