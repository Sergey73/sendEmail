'use strict';
var mongo = require('mongoose');
var Schema = mongo.Schema;
var ObjectId = Schema.Types.ObjectId;

var PrintDataSchema = new Schema({
  id: {type: ObjectId},
  name: {type: String, trim: true, required: true}/*,
  status: {type: String, trim: true, required: true},
  priority: {type: Number, required: true},
  comment: {type: String},
  data: {}*/
});

module.exports = mongo.model('PrintData', PrintDataSchema);