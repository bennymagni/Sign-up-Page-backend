const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const { connectDB } = require('./config/dbConn');
const cors = require('cors');
const cookieParser = require('cookie-parser');

connectDB();
URL = process.env.PORT || 5000

/* const corsOptions = {
    origin: 'http://localhost:3000/',
    optionsSuccessStatus: 200
} */

app.use(cors())

app.use(express.urlencoded({ extended : false}))

app.use(express.json())

app.use(cookieParser())

app.use('/', require('./routes/api/signup'))

mongoose.connection.once('open', () => {
    console.log('connected to MongoDB');
    app.listen(URL, () => {console.log(`We are live on port ${URL}`)})
})
