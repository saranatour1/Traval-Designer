
// inside of user.routes.js
const Users = require('../controllers/user.controllers');

const { authenticate } = require('../config/jwt.config');
// console.log(authenticate)
module.exports = app => {
  app.post("/api/register", Users.register);
  app.post("/api/login", Users.login);
  app.get("/api/users", authenticate, Users.getAll);
  app.get('/api/logout' , Users.logout);
}

