module.exports = function gruntInit(grunt) {
    grunt.initConfig({
        browserSync: {dev: {options: {proxy: 'localhost:3000'}}},
        copy:    {build: {cwd: 'src/', expand: true, src: ['index.js'], dest: 'dist/'}},
        eslint:  {target: ['src/index.js']},
        flow:    {files: {}},
        nodemon: {dev: {script: 'dist/index.js'}}
    });

    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-flow');
    grunt.loadNpmTasks('grunt-nodemon');

    grunt.registerTask('build', ['eslint', 'flow', 'copy']);
    grunt.registerTask('develope', ['build', 'nodemon', 'browserSync']);
};
