/**
 * App kernel
 *
 * @version 0.0.1
 * @flow
 */

import * as express from 'express';
import users from './controllers/users';

const port = process.env.PORT || 3000;
const app = express();

require('./controllers/routes')(app); // setup routes

// set configs
app.use('/api/v1/user', users);
app.listen(port);
