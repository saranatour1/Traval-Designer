const Trip = require('../controllers/trips.controllers');

module.exports = app => {
  app.post("/api/trip/create", Trip.create );

}