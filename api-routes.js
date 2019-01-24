// Initialize Express router
let router = require('express').Router()

// Set default API response
router.get('/', function (req, res) {
  res.json({
    status: 'API is working',
    message: 'Welcome to yek yok! yuh',
  });
});

// Import event controller
var eventController = require('./eventController')

// Event routes
router.route('/events')
  .get(eventController.index)
  .post(eventController.new)

router.route('/events/:event_id')
  .get(eventController.view)
  .patch(eventController.update)
  .put(eventController.update)
  .delete(eventController.delete)

// Export API routes
module.exports = router