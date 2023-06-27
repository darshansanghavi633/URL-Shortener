const mongoose = require('mongoose');
//inorder to connect to the database

//schema to store data in database
const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true
    },
    redirectURL: {
        type: String,
        required: true
    },
    //visitHistory is an Array of objects which keeps track of the time when user visited the shorten url
    visitHistory: [{
        timestamps: {
            type: Number
        }
    }]

    //{timestamps:true} keeps track of when documents were created and updated
}, { timestamps: true });


const URL = mongoose.model("url", urlSchema);
module.exports = URL;