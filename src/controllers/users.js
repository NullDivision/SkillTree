/**
 * User API controller
 *
 * @version 0.0.1
 * @flow
 */

import * as express from 'express';

let router = express.Router();

router.post('/', function add(req, res) {
    res.statusCode = 400;
    res.send();
});

export default router;
