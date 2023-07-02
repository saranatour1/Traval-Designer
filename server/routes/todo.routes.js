const ToDo = require('../controllers/todo.controllers');

module.exports = app => {
  app.put("/api/todolist/:postId/create", ToDo.create );
  app.get("/api/todolist/:postId/getall", ToDo.getAll);
  app.put("/api/todolist/:postId/edit" , ToDo.editToDo);
  app.delete("/api/todolist/:postId/:itemId/delete" , ToDo.deleteItem);
}