'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * Background Schema
 */
var BackgroundSchema = new Schema({
  section : String,
  title : String,
  date : String,
  text : String,
  awesomeness: Number
});

/**
 * Validations
 */
BackgroundSchema.path('awesomeness').validate(function (num) {
  return num >= 1 && num <= 10;
}, 'Awesomeness must be between 1 and 10');

mongoose.model('Background', BackgroundSchema);