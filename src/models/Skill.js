const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
    name: String,
    prerequisites: Array,
    isPrerequisite: Boolean
});

module.exports = mongoose.model('Skill', skillSchema);
