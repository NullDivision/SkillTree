/**
 * App kernel
 *
 * @version 0.0.1
 * @flow
 */

import * as express from 'express';

const port = process.env.PORT || 3000;
const app = express();

require('./controllers/routes')(app); // setup routes

// set configs
app.set('view engine', 'jade');
app.listen(port);
