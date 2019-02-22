var mongoose = require('mongoose');

// Set up schema
var eventSchema = new mongoose.Schema({
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
  date_event: String, 
  start_time: Date,
  end_time: Date,
  location: String, 
  saved: {
    type: Number,
    default: 0
  },
  coordinate: {
    latitude: {
      type: Number,
      required: true
    },
    longitude: {
      type: Number,
      required: true
    },
  }
})

// Export event model
var Event = module.exports = mongoose.model('Events', eventSchema);

// module.exports.get = function (callback, limit) {
//   Event.find(callback).limit(limit);
// }