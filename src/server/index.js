/**
 * App kernel
 *
 * @version 0.0.1
 * @flow
 */

import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import * as routes from './controllers/routes';
import users from './controllers/users';

const port = process.env.PORT || 3000;
const app = express();

/**
 * Connect to MongoDB.
 */
mongoose.connect('mongodb://localhost:27017/skillTree');
mongoose.connection.on('error', function() {
    process.exit(1);
});

// set configs
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/api/v1/user', users);
routes(app); // setup routes
app.listen(port);