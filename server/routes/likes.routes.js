const Likes = require('../controllers/likes.controllers');


module.exports = app => {
  app.get("/api/addlike/:postId/:userId/add", Likes.addlike);
}