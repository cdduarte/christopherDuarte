'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * Thing Schema
 */
var IntroSchema = new Schema({
  title : String,
  subtitle : String,
  text : String,
  date: { type: Date, default: Date.now },
  awesomeness: Number
});

/**
 * Validations
 */
IntroSchema.path('awesomeness').validate(function (num) {
  return num >= 1 && num <= 10;
}, 'Awesomeness must be between 1 and 10');

mongoose.model('Intro', IntroSchema);