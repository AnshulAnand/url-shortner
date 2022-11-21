const mongoose = require('mongoose');
const shortid = require('shortid');

const urlSchema = mongoose.Schema({
    fullURL: {
        type: String,
        required: true
    },
    shortURL: {
        type: String,
        required: true,
        default: shortid.generate
    }
});

module.exports = mongoose.model('urls', urlSchema);