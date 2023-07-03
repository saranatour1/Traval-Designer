const Trip = require('../models/trip.model');

// @desc    Create a new trip
// @route   POST /trips
// @access  Public
const createTrip = async (req, res) => {
    try {
        const { title, content, labels, toDoList, collab } = req.body;
        const author = req.params.authorId;

        const trip = new Trip({
            title,
            content,
            labels,
            author,
            toDoList,
            collab,
        });

        const createdTrip = await trip.save();
        res.status(201).json(createdTrip);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};


// @desc    Update a trip
// @route   PUT /trips/:id
// @access  Public
const updateTrip = async (req, res) => {
    try {
        const { title, content, labels, toDoList, collab } = req.body;
        const trip = await Trip.findById(req.params.id);

        if (!trip) {
            return res.status(404).json({ error: 'Trip not found' });
        }

        trip.title = title;
        trip.content = content;
        trip.labels = labels;
        trip.toDoList = toDoList;
        trip.collab = collab;

        const updatedTrip = await trip.save();
        res.json(updatedTrip);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// @desc    Get a single trip by ID
// @route   GET /trips/:id
// @access  Public
// sara has changed this to bring the author object into the output
// Source https://mongoosejs.com/docs/populate.html#populating-multiple-paths
const getTripById = async (req, res) => {
  try {
    const trip = await Trip.findById(req.params.id)
      .populate("author")
      .populate("likedBy")
      .populate("comments.commentBy")
      .populate("collab")
      .exec();

    if (!trip) {
      return res.status(404).json({ error: 'Trip not found' });
    }

    res.json(trip);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};


// @desc    Get all trips
// @route   GET /trips
// @access  Public
const getAllTrips = async (req, res) => {
  try {
    const trips = await Trip.find()
      .populate("author")
      .populate("likedBy")
      .populate("comments.commentBy")
      .populate("collab")
      .exec();

    res.json(trips);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};


// @desc    Delete a trip
// @route   DELETE /trips/:id
// @access  Public
const deleteTrip = async (req, res) => {
    try {
        const trip = await Trip.findById(req.params.id);

        if (!trip) {
            return res.status(404).json({ error: 'Trip not found' });
        }

        await Trip.deleteOne({ _id: trip._id });
        res.json({ message: 'Trip removed' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};


const addLabelToTrip = async (req, res) => {
    try {
        const { label } = req.body;
        const trip = await Trip.findById(req.params.id);

        if (!trip) {
            return res.status(404).json({ error: 'Trip not found' });
        }
        if(!label) {
            return res.status(404).json({ error: 'Please Enter a Label' });
        }
        trip.labels.push(label);
        const updatedTrip = await trip.save();
        res.json(updatedTrip);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};

// @desc    Edit a specific label in a trip
// @route   PUT /trips/:id/labels/:label
// @access  Public
const editLabelInTrip = async (req, res) => {
    try {
        const { label } = req.body;
        const trip = await Trip.findById(req.params.id);

        if (!trip) {
            return res.status(404).json({ error: 'Trip not found' });
        }

        const { label: labelToEdit } = req.params;
        const labelIndex = trip.labels.findIndex((l) => l === labelToEdit);

        if (labelIndex === -1) {
            return res.status(404).json({ error: 'Label not found' });
        }

        trip.labels[labelIndex] = label;
        const updatedTrip = await trip.save();
        res.json(updatedTrip);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};


// @desc    Delete a specific label from a trip
// @route   DELETE /trips/:id/labels/:label
// @access  Public
const deleteLabelFromTrip = async (req, res) => {
    try {
        const trip = await Trip.findById(req.params.id);

        if (!trip) {
            return res.status(404).json({ error: 'Trip not found' });
        }

        const { label } = req.params;
        trip.labels = trip.labels.filter((l) => l !== label);
        const updatedTrip = await trip.save();
        res.json(updatedTrip);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};


module.exports = {
    createTrip,
    updateTrip,
    getTripById,
    getAllTrips,
    deleteTrip,
    addLabelToTrip,
    deleteLabelFromTrip,
    editLabelInTrip,
};
