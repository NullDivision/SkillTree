/**
 * User API controller
 *
 * @version 0.0.1
 * @flow
 */

import * as express from 'express';
import * as validator from 'node-validator';
import User from '../models/user';
import * as map from 'lodash/collection/map';
import * as pick from 'lodash/object/pick';

let router = express.Router();

let addCheck = validator.isObject()
                        .withRequired('name', validator.isString({regex: /^[a-zA-Z]+$/}))
                        .withRequired('role', validator.isString({
                            regex:   /^ADMIN|USER$/,
                            message: "Valid roles are 'ADMIN' and 'USER'."
                        }));
let updateCheck = validator.isObject()
                           .withOptional('name', validator.isString({regex: /^[a-zA-Z]+$/}))
                           .withOptional('role', validator.isString({
                               regex:   /^ADMIN|USER$/,
                               message: "Valid roles are 'ADMIN' and 'USER'."
                           }));

router.post('/', [validator.express(addCheck), function (req, res) {
    let user = new User(req.body);

    res.statusCode = 201;
    user.save(function () {
        res.statusCode = 500;
    });

    res.send();
}]);

router.get('/', function (req, res) {
    User.find().exec(function (error, results) {
        res.send(map(results, function (result) {return pick(result, ['id', 'name', 'role', 'skills']);}));
    });
});

router.put('/:id', [validator.express(updateCheck), function (req, res) {
    User.findOneAndUpdate({_id: req.params.id}, req.body, function () {
        res.statusCode = 204;
        res.send();
    });
}]);

router.delete('/:id', function (req, res) {
    User.remove({_id: req.params.id}, function () {
        res.statusCode = 204;
        res.send();
    });
});

export default router;
