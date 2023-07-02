const Trip = require("../models/trip.model");

module.exports ={
  // add a list of items to the db, it 
  create: async (req, res) => {
    const postId = req.params.postId;
    const userId = req.params.userId;
    try {
      const todoListItems = req.body;
      const doc = await Trip.findOneAndUpdate(
        { _id: postId },
        { $push: { toDoList: { ...todoListItems , updatedAt: new Date() } } },
        { new: true }
      );
      console.log(doc);

    } catch (error) {
      console.log(error);
    }
    return res.status(200).json({ message: "List added!"});
  }
  
}