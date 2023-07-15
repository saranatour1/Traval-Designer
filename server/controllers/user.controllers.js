const User = require("../models/users.model");
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
/**
 * Look up how to do the keepalive session for 5 hours? 
 */

module.exports = {
/* The `register` function is a controller function that handles the registration of a user. */
  register: (req, res) => {

    if(req.body.email === undefined){
      return res.status(400).json({ message: "Email is undefined" });
    }

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
  
/* The `getAll` function is a controller function that retrieves all users from the database and sends
them as a JSON response. */
  getAll: async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      return res.status(500).json({ error: "Failed to retrieve users" });
    }
  },

/* The `findUser` function is a controller function that retrieves a specific user from the database
based on the provided `userId` parameter. */
findUser: (req, res) => {
  const userId = req.params.userId;
  User.findOne({ _id: userId })
    .then(user => {
      if (!user) {
        res.status(404).json({ error: 'User not found' });
      } else {
        return res.status(200).json(user);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
},

/* The `login` function is a controller function that handles the login functionality. */
  login: async (req, res) => {

    const user = await User.findOne({ email: req.body.email });

    if (user === null) {
      return res.status(400).json({ message: "User Not found " });
    } 

    if(req.body.password.length < 8){
    return res.status(400).json({ message: "Please enter a password more than 8 char" });
    }

    const correctPassword = bcrypt.compare(
      req.body.password,
      // @ts-ignore
      user.password
    );

    if (!correctPassword) {
      return res.status(400).json({ message: "Invalid email or password" });
    } 

    const userToken = jwt.sign(
      {
        id: user._id,
      },
      // @ts-ignore
      process.env.SECRET_KEY
    );
    
    res.cookie('token', userToken, {
      httpOnly: true, 
      secure: true,
      sameSite: 'None', 
    });
    return res.status(200).json({ message: "Login successful" , token: userToken ,id: user._id });
  },

/* The `logout` function is a controller function that handles the logout functionality. */
  logout: (req, res) => {
    res.clearCookie("usertoken");
    res.json({ message: "Logout successful" });
  },
  
};
