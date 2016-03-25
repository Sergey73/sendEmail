'use strict';
var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/print-data");

module.exports = mongoose;
