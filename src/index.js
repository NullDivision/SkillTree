'use strict';

const app = require('express')();
const browserSync = require('browser-sync');
const port = process.env.PORT || 3000;

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