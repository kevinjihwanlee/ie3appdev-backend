// Import event model
Event = require('./eventModel');

// Handle index actions
exports.index = function (req, res) {
  Event.find({}).exec(function (err, events) {
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
  event.coordinate.latitude = req.body.coordinate.latitude
  event.coordinate.longitude = req.body.coordinate.longitude
  // optional values
  if ("description" in req.body) {
    event.description = req.body.description
  }
  if ("date_event" in req.body) {
    event.date_event = req.body.date_event
  }
  if ("start_time" in req.body) {
    event.start_time = req.body.start_time
  }
  if ("end_time" in req.body) {
    event.end_time = req.body.end_time
  }
  if("location" in req.body) {
    event.location = req.body.location
  }
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
  Event.findById(req.params.event_id, function (err, event) {
    if (err) {
      res.json({
        status: 'error',
        message: err,
      })
    }
    if ("name" in req.body) {
      event.name = req.body.name 
    }
    if ("author" in req.body) {
      event.author = req.body.author 
    }
    if ("coordinate" in req.body) {
      // a little lazy by not enforcing both lat & long
      event.coordinate.latitude = req.body.coordinate.latitude
      event.coordinate.longitude = req.body.coordinate.longitude
    }
    if ("description" in req.body) {
      event.description = req.body.description
    }
    if ("start_time" in req.body) {
      event.start_time = req.body.start_time
    }
    if ("end_time" in req.body) {
      event.end_time = req.body.end_time
    }
    if ("location" in req.body) {
      event.location = req.body.location
    }
    if ("saved" in req.body) {
      event.saved = req.body.saved
    }
  
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
