const express = require('express');
const mongoose = require('mongoose');
const urlSchema = require('./models/urlSchema');
const ejs = require('ejs');
const app = express();
require('dotenv').config();

const MONGOURL = process.env.MONGOURL

mongoose.connect(MONGOURL);

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false}));

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/url', (req, res) => {

});

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`server running on port ${PORT}`));