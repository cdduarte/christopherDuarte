'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * Thing Schema
 */
var InfoMgmtSchema = new Schema({
  title : String,
  subtitle : String,
  category : String,
  text : String,
  awesomeness: Number
});

/**
 * Validations
 */
InfoMgmtSchema.path('awesomeness').validate(function (num) {
  return num >= 1 && num <= 10;
}, 'Awesomeness must be between 1 and 10');

mongoose.model('InfoMgmt', InfoMgmtSchema);