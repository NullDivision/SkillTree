/**
 * Skills API controller
 *
 * @version 0.0.2
 * @flow
 */

import * as express from 'express';
import * as HttpStatus from 'http-status-codes';
import * as Skill from '../models/Skill';

const router = express.Router();

/**
 * Get all skills
 *
 * @param  {Object} req
 * @param  {Object} res
 */
router.get('/', function (req, res) {
    Skill.find({}, function(err, skills) {
        res.send(skills);
    });
});

/**
 * Get skill by ID
 *
 * @param  {Object} req
 * @param  {Object} res
 */
router.get('/:id', function(req, res) {
    var skillToFind = {_id: req.params.id};

    Skill.findOne(skillToFind, function(err, skill) {
        if (err) {
            res.json('Not found', 404);
        } else {
            res.json(skill);
        }
    });
});

/**
 * Add new skill
 *
 * @param  {Object} req
 * @param  {Object} res
 */
router.post('/', function(req, res) {
    var skillToAdd = new Skill(req.body);

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
});

/**
 * Update skill
 *
 * @param  {Object} req
 * @param  {Object} res
 */
router.put('/:id', function(req, res) {
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
});

/**
 * Delete skill
 *
 * @param  {Object} req
 * @param  {Object} res
 */
router.delete('/:id', function(req, res) {
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
});

export default router;
