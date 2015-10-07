module.exports = function gruntInit(grunt) {
    grunt.initConfig({
        copy:       {build: {cwd: 'src/', expand: true, src: ['**/*.js'], dest: 'dist/'}},
        eslint:     {target: ['src/**/*.js']},
        flow:       {files: {}},
        nodemon:    {
            dev: {
                script:  'dist/index.js',
                options: {
                    args:        ['dev'],
                    env:         {PORT: 9000},
                    ext:         'js,jade',
                    nodeArgs:    ['--debug'],
                    watch:       ['dist'],
                    legacyWatch: true
                }
            }
        },
        watch: {server: {files: 'src/index.js', tasks: ['build']}}
    });

    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-flow');
    grunt.loadNpmTasks('grunt-nodemon');

    grunt.registerTask('build', ['eslint', 'flow', 'copy']);
    grunt.registerTask('develope', ['build', 'nodemon']);
};
