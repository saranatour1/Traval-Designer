const User = require("../models/users.model");
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  register: (req, res) => {
    console.log("Regestration just happend");
    User.create(req.body)
      .then((user) => {
        const userToken = jwt.sign(
          {
            id: user._id,
          },
          process.env.SECRET_KEY
        );

        res
          .cookie("usertoken", userToken, {
            httpOnly: true,
          })
          .json({ msg: "success!", user: user });
      })
      .catch((err) => res.json(err));
  },
  getAll: async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: "Failed to retrieve users" });
    }
  },

  login: async (req, res) => {
    console.log("Login just happend");
    const user = await User.findOne({ email: req.body.email });

    if (user === null) {
      return res.sendStatus(400);
    } 

    const correctPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!correctPassword) {
      return res.status(400).json({ error: "Invalid email or password" });
    } 

    const userToken = jwt.sign(
      {
        id: user._id,
      },
      process.env.SECRET_KEY
    ); 

    res
      .cookie("usertoken", userToken, {
        httpOnly: true,
      })
      .json({ msg: "success!" });
  },

  logout: (req, res) => {
    res.clearCookie("usertoken");
    res.sendStatus(200);
  },
};
