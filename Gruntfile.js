module.exports = function gruntInit(grunt) {
    grunt.initConfig({
        babel:   {
            options: {experimentals: true, modules: 'commonStrict'},
            server: {files: [{cwd: 'src/', dest: 'dist', expand: true, ext: '.js', src: ['**/*.js']}]}
        },
        eslint:  {target: ['src/**/*.js']},
        flow:    {files: {}},
        nodemon: {
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

    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-flow');
    grunt.loadNpmTasks('grunt-nodemon');

    grunt.registerTask('build', ['eslint', 'flow', 'babel']);
    grunt.registerTask('develop', ['build', 'nodemon', 'watch']);
};
