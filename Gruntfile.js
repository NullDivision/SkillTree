module.exports = function gruntInit(grunt) {
    grunt.initConfig({
        eslint: {target: ['src/index.js']},
        flow: {files: {}},
        browserSync: {dev: {options: {proxy: 'localhost:3000'}}}
    });

    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-flow');

    grunt.registerTask('develope', ['eslint', 'flow', 'browserSync']);
};
