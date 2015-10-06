var mongoose = require('mongoose');

var skillSchema = new mongoose.Schema({
  name: String,
  prerequisites: Array,
  isPrerequisite: Boolean
});