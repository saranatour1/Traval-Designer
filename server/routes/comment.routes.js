const comments = require('../controllers/comments.controllers');

module.exports = app => {
    app.put('/api/trips/comments/:authorId/:postId', comments.createComment);
    app.put('/api/trips/comments/:commentId', comments.editComment);
    app.delete('/api/trips/comments/:commentId', comments.deleteComment);

};
