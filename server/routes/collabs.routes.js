const Collabs= require('../controllers/collaborators.controllers');


module.exports = app => {
  app.put("/api/addcollab/:postId/:userId/add", Collabs.addCollaborator);
  app.delete("/api/addcollab/:postId/:userId/delete", Collabs.deleteCollab);

}