/**
 * App kernel
 *
 * @version 0.0.1
 * @flow
 */

import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import users from './controllers/users';
import skills from './controllers/skills';

const port = process.env.PORT || 3000;
const app = express();

/**
 * Connect to MongoDB.
 */
mongoose.connect('mongodb://localhost:27017/skillTree');
mongoose.connection.on('error', function(e) {
    if (e) {
        throw new Error(e);
    }
    process.exit(1);
});

// set configs
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api/v1/user', users);
app.use('/api/v1/skills', skills);

app.listen(port);
