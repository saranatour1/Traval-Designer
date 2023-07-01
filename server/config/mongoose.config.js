
const mongoose = require('mongoose');
require('dotenv').config();

const DB_URL= process.env.DB_URL;


mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
  .then(() => console.log('Established a connection to the database'))
  .catch(err => console.log('Something went wrong when connecting to the database ', err));

