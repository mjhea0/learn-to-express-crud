var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Blog' });
});

/**
 * Attach the post API routes to the main router
 */
router.use('/api/', require('./post'))

module.exports = router;
