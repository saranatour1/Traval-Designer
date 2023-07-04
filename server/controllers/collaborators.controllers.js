const Trip = require('../models/trip.model');
const User = require('../models/users.model');

module.exports = {
  addCollaborator: async (req, res) => {
    const postId = req.params.postId;
    const userId = req.params.userId;

    try {
      const trip = await Trip.findOne({ _id: postId });
      console.log(trip);

      if (!trip) {
        return res.status(404).json({ message: "Trip not found" });
      }

      if (trip.collab.includes(userId)) {
        return res.status(409).json({ message: "Person is already a collaborator", trip });
      } else {
        trip.collab.push(userId);
      }

      await trip.save();

      return res.status(200).json({ message: "Trip updated", trip });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  },

  deleteCollab: async (req, res) => {
    const postId = req.params.postId;
    const userId = req.params.userId;

    try {
      const trip = await Trip.findOne({ _id: postId });
      console.log(trip);

      if (!trip) {
        return res.status(404).json({ message: "Trip not found" });
      }

      if (trip.collab.includes(userId)) {
        trip.collab = trip.collab.filter((item) => item.toString() !== userId);
        await trip.save();
        return res.status(200).json({ message: "Successfully deleted a person", trip });
      } else {
        return res.status(200).json({ message: "Either the person is already deleted or does not exist", trip });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
};
