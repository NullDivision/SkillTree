'use strict';

var app = require('express')();
var browserSync = require('browser-sync');
var port = process.env.PORT || 3000;

require('./controllers/routes')(app); // setup routes

app.listen(port, listening);

function listening() {
    if (!browserSync) {
        return false;
    }

    browserSync({
        proxy: 'localhost:' + port,
        files: ['public/**/*.{js,css}']
    });
}