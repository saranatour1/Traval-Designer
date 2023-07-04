const Trip = require("../models/trip.model");

module.exports = {
  // create a set of list items
  create: async (req, res) => {
    const postId = req.params.postId;
    try {
      const todoListItems = req.body;

      const trip = await Trip.findOne({ _id: postId });
      if (!trip) {
        return res.status(404).json({ message: "Trip not found" });
      }

      //the added items must be an array of objects
      const addedItems = todoListItems.map((item) => ({
        ...item,
        updatedAt: new Date(),
      }));

      trip.toDoList.push(...addedItems);
      const updatedTrip = await trip.save();

      console.log(updatedTrip.toDoList);

      return res
        .status(200)
        .json({ message: "List added!", items: addedItems });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  },
  // get all the list items 
  getAll: async (req, res) => {
    const postId = req.params.postId;
    try {
      const trip = await Trip.findOne({ _id: postId });
      if (!trip) {
        return res.status(404).json({ message: "Trip not found!" });
      }
      const toDoList = trip.toDoList;
      console.log(toDoList);
      return res.status(200).json(toDoList);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  },
  // editing all the items, small defect: when editing like this we are editing the whole entire thing
  // so it will add on top of that, or delete all the previous items
  editToDo: async (req, res) => {
    const postId = req.params.postId;
    try {
      // map all over the items and add the updated at manually
      const updatedToDoList = req.body.map((item) => ({
        ...item,
        updatedAt: new Date(),
      }));

      const trip = await Trip.findOneAndUpdate(
        { _id: postId },
        {
          toDoList: updatedToDoList,
          updatedAt: new Date(),
        },
        { new: true }
      );

      if (!trip) {
        return res.status(404).json({ message: "Trip not found" });
      }

      return res.status(200).json({ message: "To-do list updated", trip });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  },

  deleteItem: async (req, res) => {
    const postId = req.params.postId;
    const itemId = req.params.itemId;
    console.log("I am deleting something ");
    try {
      const trip = await Trip.findOne({ _id: postId });

      if (!trip) {
        return res.status(404).json({ message: "Trip not found" });
      }

      trip.toDoList = trip.toDoList.filter(
        (item) => item._id.toString() !== itemId
      );

      const updatedTrip = await trip.save();

      return res
        .status(200)
        .json({ message: "To-do list item deleted", trip: updatedTrip });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  },

  // delete all items? maybe not 
};
