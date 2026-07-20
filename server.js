const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { connectDB } = require('./config/dbConn');
const cookieParser = require('cookie-parser');
const cors = require('cors');



connectDB();
const PORT = process.env.PORT || 5000

app.use(cors());
app.use(cookieParser());

app.use(express.json());


//app.use('/', require('./routes/submit'));
app.use('/userdata', require('./routes/submit'))
app.use('/uploadImage', require('./routes/uploadImage'))

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDb');
    app.listen(PORT, () => {console.log(`we are live on Port ${PORT}`);})
})


