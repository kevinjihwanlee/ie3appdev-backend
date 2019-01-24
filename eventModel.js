var mongoose = require('mongoose');

// Set up schema
var eventSchema = mongoose.Schema({
  name: {
    type: String, 
    required: true 
  },
  author: {
    type: String,
    required: true
  },
  description: String,
  date_created: {
    type: Date,
    default: Date.now
  },
  saved: {
    type: Number,
    default: 0
  },
  latitude: {
    type: Number,
    required: true
  },
  longitude: {
    type: Number,
    required: true
  },
})

// Export event model
var Event = module.exports = mongoose.model('event', eventSchema);

module.exports.get = function (callback, limit) {
  Event.find(callback).limit(limit);
}