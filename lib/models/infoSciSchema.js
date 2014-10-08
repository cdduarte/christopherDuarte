'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * Thing Schema
 */
var GistSchema = new Schema({
  id : String,
  title : String,
  subtitle : String,
  language : String,
  text : String,
  awesomeness: Number
});

/**
 * Validations
 */
GistSchema.path('awesomeness').validate(function (num) {
  return num >= 1 && num <= 10;
}, 'Awesomeness must be between 1 and 10');

mongoose.model('Gist', GistSchema);