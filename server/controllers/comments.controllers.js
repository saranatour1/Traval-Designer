const Trip = require("../models/trip.model");

const createComment = async (req, res) => {
  console.log("sara");
  console.log(req.body);
  const { content } = req.body;
  const author = req.params.authorId;
  const postId = req.params.postId;
  try {
    const trip = await Trip.findOne({ _id: postId });
    console.log(trip);
    const comment = {
      content: content,
      commentBy: author,
    };

    // @ts-ignore
    trip.comments.push(comment);

    console.log(trip);
    // @ts-ignore
    const updatedTrip = (await trip.save());

    return res.status(200).json(updatedTrip);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

const editComment = async (req, res) => {
  try {
    const { commentId } = req.params;
    const { content } = req.body;

    const trip = await Trip.findOne({ "comments._id": commentId });

    if (!trip) {
      return res.status(404).json({ error: "Comment not found" });
    }

    // @ts-ignore
    const comment = trip.comments.find((c) => c._id.toString() === commentId);

    if (!comment) {
      return res.status(404).json({ error: "Comment not found" });
    }

    comment.content = content;
    comment.updatedAt = new Date();

    const updatedTrip = await trip.save();

    res.json(updatedTrip);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

const deleteComment = async (req, res) => {
  try {
    const { commentId } = req.params;

    const trip = await Trip.findOne({ "comments._id": commentId });

    if (!trip) {
      return res.status(404).json({ error: "Comment not found" });
    }

    // @ts-ignore
    trip.comments.pull({_id:commentId});
    
    // trip.comments = trip.comments.filter((c) => c._id.toString() !== commentId);
      const updatedTrip = await trip.save().then((item) => item.populate('author')).then(item => item.populate('comments.commentBy'))
      console.log(updatedTrip);
    res.json(updatedTrip);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  createComment,
  editComment,
  deleteComment,
};
