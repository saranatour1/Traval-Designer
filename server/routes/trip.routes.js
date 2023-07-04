const Trip = require('../controllers/trip.controller');


module.exports = app => {
    app.post('/api/trips/:authorId', Trip.createTrip);
    app.get('/api/trips', Trip.getAllTrips);
    app.put('/api/trips/:id', Trip.updateTrip);
    app.get('/api/trips/:id', Trip.getTripById);
    app.delete('/api/trips/:id', Trip.deleteTrip);
    app.post('/api/trips/:id/labels', Trip.addLabelToTrip);
    app.delete('/api/trips/:id/labels/:label', Trip.deleteLabelFromTrip);
    app.put('/api/trips/:id/labels/:label', Trip.editLabelInTrip);
    // app.post('/api/trips/:id/like', Trip.addLikeToTrip);

}