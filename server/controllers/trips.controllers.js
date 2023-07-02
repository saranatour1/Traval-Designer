const Trip = require("../models/trip.model");

module.exports ={
  create: (req,res)=>{
    Trip.create(req.body)
    .then((trip)=> console.log(trip))
    .catch((err) => res.json(err));
  }
}