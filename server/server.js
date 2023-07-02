const mongoose = require('mongoose');
const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');
app.use(cors({credentials: true, origin: 'http://localhost:5173'}));
// app.use(cors());
app.use(cookieParser());
const allUsersRoutes = require("./routes/users.routes");
const allTripRoutes = require('./routes/trip.routes');
const allToDoListRoutes = require('./routes/todo.routes');
// Change the app.use(cors()) to the one below


require("./config/mongoose.config");

app.get("/api", (req, res) => {
  res.json({ message: "Hello World" });
});

app.use(express.json(), express.urlencoded({ extended: true }));
    

allUsersRoutes(app);
allTripRoutes(app); 
allToDoListRoutes(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));


