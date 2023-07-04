const Trip = require('../models/trip.model');
const User = require('../models/users.model');

module.exports = {
  addlike: async (req, res) => {
    const postId = req.params.postId;
    const userId = req.params.userId;
  
    try {
      const trip = await Trip.findOne({ _id: postId });
      const userToLike = await User.findOne({ _id: userId }); // unneded 
      
      console.log(trip);
      if (!trip) {
        return res.status(404).json({ message: "Trip not found" });
      }
  
      if (!trip.likedBy.includes(userId)) {
        trip.likes += 1;
        trip.likedBy.push(userId);

      } else {
        console.log(userId)
        trip.likes -= 1;
        // @ts-ignore
        trip.likes.likedBy = trip.likedBy.filter((id) => id !== userId);
      }
  
      await trip.save();
  
      return res.status(200).json({ message: "Like updated", trip });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
  
  }
