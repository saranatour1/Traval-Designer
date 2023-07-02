const Trip = require("../models/trip.model");

const addLike = async (req, res) => {
    

        const createdTrip = await trip.save();
        res.status(201).json(createdTrip);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};