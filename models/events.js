const mongoose = require('mongoose')

const eventSchema = mongoose.Schema({
    name: String,
    type: String,
    location: String,
    description: String,
    date: String,
    
    
})

module.exports.Events = mongoose.model('events', eventSchema )