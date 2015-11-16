module.exports = function gruntInit(grunt) {
    grunt.initConfig({
        babel: {
            options: {experimental: true, modules: 'commonStrict'},
            server:  {files: [{cwd: 'src/', dest: 'dist', expand: true, ext: '.js', src: ['**/*.js']}]}
        },
        browserSync: {
            bsFiles: {src: ['dist/client/**/*', 'bower_components']},
            options: {
                server: {baseDir: './dist/client/', routes: {'/bower_components': 'bower_components'}, watchTask: true}
            }
        },
        concurrent: {
            client:  ['nodemon', 'watch', 'browserSync'],
            server:  ['nodemon', 'watch'],
            options: {logConcurrentOutput: true}
        },
        copy: {
            dist: {files: [{expand: true, cwd: 'src/client/', src: ['./**/assets/**/*'], dest: 'dist/client/'}]}
        },
        eslint:     {target: ['src/**/*.js']},
        flow:       {files: {}},
        minifyHtml: {dist: {files: grunt.file.expandMapping('**/*.html', 'dist/client/', {cwd: 'src/client'})}},
        nodemon:    {
            dev: {
                script:  'dist/server/index.js',
                options: {args: ['dev'], env: {PORT: 9000}, nodeArgs: ['--debug'], watch: ['dist'], legacyWatch: true}
            }
        },
        watch: {
            client: {files: 'src/client/**/*', tasks: ['minifyHtml', 'copy']},
            server: {files: 'src/server/**/*.js', tasks: ['build:server']}
        }
    });

    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-flow');
    grunt.loadNpmTasks('grunt-minify-html');
    grunt.loadNpmTasks('grunt-nodemon');

    grunt.registerTask('build:client', ['minifyHtml', 'copy']);
    grunt.registerTask('build:server', ['eslint', 'flow', 'babel']);
    grunt.registerTask('build', ['build:server', 'build:client']);
    grunt.registerTask('develop:client', ['build', 'concurrent:client']);
    grunt.registerTask('develop:server', ['build:server', 'concurrent:server']);
};
