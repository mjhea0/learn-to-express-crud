var mongoose = require('mongoose')

/**
 * Define what a post is
 */
var Post = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
})

/**
 * Mongoose wraps this up into a nice object for interacting with the database
 * with the model method, which we export.
 */
module.exports = mongoose.model('Post', Post)
