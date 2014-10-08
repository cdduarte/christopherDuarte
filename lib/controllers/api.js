'use strict';

var mongoose = require('mongoose'),
    Thing = mongoose.model('Thing'),
    Gist = mongoose.model('Gist'),
    InfoMgmt = mongoose.model('InfoMgmt'),
    Intro = mongoose.model('Intro'),
    Background = mongoose.model('Background');

/**
 * Get awesome things
 */
exports.awesomeThings = function(req, res) {
  return Thing.find(function (err, things) {
    if (!err) {
      return res.json(things);
    } else {
      return res.send(err);
    }
  });
};

exports.awesomeGists = function(req, res) {
  return Gist.find(function (err, things) {
    if (!err) {
      return res.json(things);
    } else {
      return res.send(err);
    }
  });
};

exports.awesomeInfoMgmts = function(req, res) {
  return InfoMgmt.find(function (err, things) {
    if (!err) {
      return res.json(things);
    } else {
      return res.send(err);
    }
  });
};

exports.awsomeIntros = function(req, res) {
  return Intro.find(function (err, things) {
    if (!err) {
      return res.json(things);
    } else {
      return res.send(err);
    }
  });
};

exports.awesomeBackground = function(req, res) {
  return Background.find(function (err, things) {
    if (!err) {
      return res.json(things);
    } else {
      return res.send(err);
    }
  });
};