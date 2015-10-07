'use strict'; //eslint-disable-line

const app = require('express')();
const port = process.env.PORT || 3000;

require('./controllers/routes')(app); // setup routes

// set configs
app.set('view engine', 'jade');
app.listen(port);