module.exports = function gruntInit(grunt) {
    grunt.initConfig({
        babel:   {
            options: {experimental: true, modules: 'commonStrict'},
            server:  {files: [{cwd: 'src/', dest: 'dist', expand: true, ext: '.js', src: ['**/*.js']}]}
        },
        concurrent: {tasks: ['nodemon', 'watch'], options: {logConcurrentOutput: true}},
        eslint:     {target: ['src/**/*.js']},
        flow:       {files: {}},
        nodemon:    {
            dev: {
                script:  'dist/index.js',
                options: {
                    args:        ['dev'],
                    env:         {PORT: 9000},
                    nodeArgs:    ['--debug'],
                    watch:       ['dist'],
                    legacyWatch: true
                }
            }
        },
        watch: {dist: {files: 'src/**/*.js', tasks: ['build']}}
    });

    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-flow');
    grunt.loadNpmTasks('grunt-nodemon');

    grunt.registerTask('build', ['eslint', 'flow', 'babel']);
    grunt.registerTask('develop', ['build', 'concurrent']);
};
