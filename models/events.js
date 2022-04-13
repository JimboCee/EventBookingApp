const mongoose = require('mongoose')

const eventSchema = mongoose.Schema({
    name: String,
    type: String,
    location: String,
    description: String,
    date: String,
    
    
},
{versionKey: false})

module.exports.Events = mongoose.model('events', eventSchema )