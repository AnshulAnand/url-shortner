const express = require('express');
const mongoose = require('mongoose');
const urlSchema = require('./models/urlSchema');
require('dotenv').config();
const ejs = require('ejs');
const app = express();

const MONGOURL = process.env.MONGOURL

mongoose.connect(MONGOURL);

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false}));

app.get('/', async (req, res) => {
    const data = await urlSchema.find();
    res.render('index', { data: data });
});

app.post('/url', async (req, res) => {
    await urlSchema.create({ fullURL: req.body.url });
    res.redirect('/');
});

app.get('/:url', async (req, res) => {
    const url = await urlSchema.findOne({shortURL: req.params.url});
    if (url == null) return res.sendStatus(404);
    res.redirect(url.fullURL);
});

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`server running on port ${PORT}`));