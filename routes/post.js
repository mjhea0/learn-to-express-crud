var Router = require('express').Router
var router = new Router
var Post = require('../models/post')

router.get('/posts', function(req, res, next) {

  Post.find({}, function (err, results) {
    if(err) {
      res.send(err);
    } else {
      res.send(results);
    }
  });

});

// GET post
router.get('/post/:id', function(req, res, next) {

  Post.findById(req.params.id, function(err, results) {
    if(err) {
      res.send(err);
    } else {
      res.send(results);
    }
  });

});

// POST post
router.post('/posts', function(req, res, next) {

  var newPost = req.body;
  var post = new Post(newPost);

  post.save(function(err, results){
    if(err) {
      res.send(err);
    } else {
      res.send(results);
    }
  });

});

// PUT post
router.put('/post/:id', function(req, res, next) {

  Post.findByIdAndUpdate(req.params.id, req.body, function(err, results){
    if(err) {
      res.send(err);
    } else {
      res.send(results);
    }
  });

});

// DELETE post
router.delete('/post/:id', function(req, res, next) {

  Post.findByIdAndRemove(req.params.id, function(err, results){
    if(err) {
      res.send(err);
    } else {
      res.send(results);
    }
  });

});

module.exports = router
