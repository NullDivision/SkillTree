const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.ObjectId;

const userSkillSchema = new mongoose.Schema({
    user: ObjectId,
    skill: ObjectId,
    current_xp: {
        type: Number,
        default: 0
    },
    minimum_xp: Number
});

module.exports = mongoose.model('UserSkill', userSkillSchema);
