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
          // @ts-ignore
          process.env.SECRET_KEY
        );

        res
          .cookie("token", userToken, {
            httpOnly: true, 
            secure: true,
            sameSite: 'None', 
          })
          .json({ msg: "success!", user: user , token: userToken });
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
  findUser: (req, res) => {
  const userId = req.params.userId;
  User.findOne({_id: userId}, (err, user) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else if (!user) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.json(user);
    }
  });
},


  login: async (req, res) => {
    console.log("Login just happend");
    const user = await User.findOne({ email: req.body.email });

    if (user === null) {
      return res.sendStatus(400);
    } 

    const correctPassword = bcrypt.compare(
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
    
    // const decoded = jwt.verify(userToken, process.env.SECRET_KEY);  
    // var userId = decoded.id;  
    // console.log(userId)
    // console.log('649f3bbd934bfcf0c5f6db4f' ===userId);  

    res.cookie('token', userToken, {
      httpOnly: true, 
      secure: true,
      sameSite: 'None', 
    });
    return res.status(200).json({ message: "Login successful" , token: userToken ,id: user._id });
  },

  logout: (req, res) => {
    res.clearCookie("usertoken");
    res.json({ message: "Logout successful" });
  },
  
};
// const val= new Date;
// console.log(val.toLocaleString())