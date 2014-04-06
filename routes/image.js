
/*
 * GET images page.
 */

var fs = require('fs'),
    md5 = require('blueimp-md5').md5;

exports.find = function(req, res){
  res.render('find', {title: 'Images'}); 
};

exports.view = function(req, res){
  res.render('display-image', {title: 'Profiler', hash: req.params.image})
};

exports.process = function(req, res){
  var hashedEmail = md5(req.body.email).substring(0, 20);
  res.redirect('/profile-image/' + hashedEmail);
};

exports.response = function(req, res){
  res.sendfile("profile-image/" + req.params.image + ".jpg");
};
