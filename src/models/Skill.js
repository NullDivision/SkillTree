const mongoose = require('mongoose');

new mongoose.Schema({
    name: String,
    prerequisites: Array,
    isPrerequisite: Boolean
});