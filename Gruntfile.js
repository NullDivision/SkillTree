module.exports = function gruntInit(grunt) {
    grunt.initConfig({
        eslint: {target: ['src/index.js']},
        flow: {files: {}},
        browserSync: {dev: {options: {proxy: 'localhost:3000'}}},
        copy: {build: {files: [{src: ['src/index.js'], dest: 'build/'}]}}
    });

    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-flow');
    grunt.loadNpmTasks('grunt-nodemon');

    grunt.registerTask('build', ['eslint', 'flow', 'copy']);
    grunt.registerTask('develope', ['build', 'browserSync']);
};
