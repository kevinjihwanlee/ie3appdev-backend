// Import event model
Event = require('./eventModel');

// Handle index actions
exports.index = function (req, res) {
  Event.get(function (err, events) {
    if (err) {
      res.json({
        status: 'error',
        message: err,
      })
    }
    res.json({
      status: 'success',
      message: 'Events retrieved successfully',
      data: events
    })
  })
}

// Handle create event actions
exports.new = function (req, res) {
  var event = new Event()
  event.name = req.body.name 
  event.author = req.body.author 
  event.description = req.body.description
  event.latitude = req.body.latitude
  event.longitude = req.body.longitude
  // save event and check for errors
  event.save(function (err) {
    if (err) {
      res.json({
        status: 'error',
        message: err,
      })
    }
    res.json({
      message: 'New event created',
      data: event
    })
  })
}

// Handle view event
exports.view = function (req, res) {
  Event.findById(req.params.event_id, function (err, event) {
    if (err) {
      res.json({
        status: 'error',
        message: err,
      })
    }
    res.json({
      message: 'Event details loading...',
      data: event
    })
  })
}

// Handle update event info
exports.update = function (req, res) {
  Event.findById(req.params.event_id, function (err, contact) {
    if (err) {
      res.json({
        status: 'error',
        message: err,
      })
    }
  })
  event.name = req.body.name
  event.name = req.body.name 
  event.author = req.body.author 
  event.description = req.body.description
  event.latitude = req.body.latitude
  event.longitude = req.body.longitude

  // save event and check for errors
  event.save(function (err) {
    if (err) {
      res.json({
        status: 'error',
        message: err,
      })
    }
    res.json({
      message: 'New event created',
      data: event
    })
  })
}

// Handle delete event
exports.delete = function (req, res) {
  Event.remove({
    _id: req.params.event_id
  }, function (err, event) {
    if (err) {
      res.json({
        status: 'error',
        message: err,
      })
    }
    res.json({
      status: 'success',
      message: 'Event deleted'
    })
  })
}
