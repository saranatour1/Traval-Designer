const ToDo = require('../controllers/todo.controllers');

module.exports = app => {
  app.put("/api/todolist/:postId/:userId/create", ToDo.create );
}