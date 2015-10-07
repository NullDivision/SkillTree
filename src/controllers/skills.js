import * as HttpStatus from 'http-status-codes';
import * as Skill from '../models/Skill';

/**
 * GET /skills
 *
 */
export const findAllSkills = function(req, res) {
    Skill.find({}, function(err, skills) {
        res.send(skills);
    });
};

/**
 * GET /skills/id
 *
 */
export const findSkill = function(req, res) {
    var skillToFind = {
        _id: req.params.id
    };
    Skill.findOne(skillToFind, function(err, skill) {
        if (err) {
            res.json('Not found', 404);
        } else {
            res.json(skill);
        }
    });
};

/**
 * POST /skills
 *
 */
export const addSkill = function(req, res) {
    var skillToAdd = new Skill(req.body);
    console.log(req.body);
    skillToAdd.save({}, function(err) {
        if (err) {
            if (err.code === 11000) {
                res.send(HttpStatus.CONFLICT);
            }
            if (err.name === 'ValidationError') {
                res.send(HttpStatus.BAD_REQUEST);
            }
        } else {
            res.send(HttpStatus.OK);
        }
    });
};

/**
 * PUT /skills/id
 *
 */
export const updateSkill = function(req, res) {
    var skillToUpdate = {
            _id: req.params.id
        },
        updatedSkill = req.body;
    Skill.update(skillToUpdate, updatedSkill, function(err) {
        if (err) {
            res.send(HttpStatus.BAD_REQUEST);
        } else {
            res.send(HttpStatus.OK);
        }
    });
};

/**
 * DELETE /skills/id
 *
 */
export const deleteSkill = function(req, res) {
    var skillToDelete = {
        _id: req.params.id
    };

    Skill.remove(skillToDelete, function(err) {
        if (err) {
            res.send(HttpStatus.BAD_REQUEST);
        } else {
            res.send(HttpStatus.OK);
        }
    });
};
