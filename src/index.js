'use strict';

const app = require('express')();
const port = process.env.PORT || 3000;

// set configs
app.set('view engine', 'jade');

// admin section
app.get('/', function (req, res) {
    res.render('index');
});
app.listen(port);