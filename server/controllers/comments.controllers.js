const Trip = require('../models/trip.model');

const createComment = async (req, res) => {
    console.log("sara");
    try {
        const { content } = req.body;
        const author = req.params.authorId;
        const postId = req.params.postId;
        const trip = await Trip.findOne({ _id: postId });
        const comment = {
            content: content,
            commentBy: author,
        };
        console.log(comment);

        // @ts-ignore
        trip.comments.push(comment);

        // @ts-ignore
        const updatedTrip = await trip.save();

        res.status(201).json(updatedTrip);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};


const editComment = async (req, res) => {
    try {
        const { commentId } = req.params;
        const { content } = req.body;

        const trip = await Trip.findOne({ 'comments._id': commentId });

        if (!trip) {
            return res.status(404).json({ error: 'Comment not found' });
        }

        // @ts-ignore
        const comment = trip.comments.find((c) => c._id.toString() === commentId);

        if (!comment) {
            return res.status(404).json({ error: 'Comment not found' });
        }

        comment.content = content;
        comment.updatedAt = new Date();

        const updatedTrip = await trip.save();

        res.json(updatedTrip);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

const deleteComment = async (req, res) => {
    try {
        const { commentId } = req.params;

        const trip = await Trip.findOne({ 'comments._id': commentId });

        if (!trip) {
            return res.status(404).json({ error: 'Comment not found' });
        }

        // @ts-ignore
        trip.comments = trip.comments.filter((c) => c._id.toString() !== commentId);
        const updatedTrip = await trip.save();

        res.json(updatedTrip);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

module.exports = {
    createComment,
    editComment,
    deleteComment,
};
