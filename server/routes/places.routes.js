const Places = require('../controllers/places.controllers');

module.exports = app => {
  app.get("/api/nearby/:latLong/findnearby", Places.findNearbyPlaces);
  app.get("/api/places/:searchParam/findnearbytxt", Places.searchByString);
  app.get("/api/places/:locationId/findlocationmage", Places.findImage);
}