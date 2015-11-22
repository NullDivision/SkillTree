module.exports = function gruntInit(grunt) {
    grunt.initConfig({
        babel: {
            options: {plugins: ['transform-es2015-modules-commonjs']},
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
            dist: {
                files: [
                    {expand: true, cwd: 'src/client/modules', src: ['./**/assets/**/*'], dest: 'dist/client/modules'}
                ]
            }
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
        sass: {
            dist: {
                files: {
                    'dist/client/assets/main.css': 'src/client/assets/main.scss',
                    'dist/client/modules/sidebar/assets/sidebar.css': 'src/client/modules/sidebar/assets/sidebar.scss'
                },
                options: {compass: true, sourcemap: 'inline', unixNewlines: true}
            }
        },
        watch: {
            client: {files: 'src/client/**/*', tasks: ['minifyHtml', 'sass', 'copy']},
            server: {files: 'src/server/**/*.js', tasks: ['build:server']}
        }
    });

    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-flow');
    grunt.loadNpmTasks('grunt-minify-html');
    grunt.loadNpmTasks('grunt-nodemon');

    grunt.registerTask('check', ['eslint', 'flow']);
    grunt.registerTask('build:client', ['minifyHtml', 'sass', 'copy']);
    grunt.registerTask('build:server', ['babel']);
    grunt.registerTask('build', ['build:server', 'build:client']);
    grunt.registerTask('develop:client', ['build', 'concurrent:client']);
    grunt.registerTask('develop:server', ['build:server', 'concurrent:server']);
};
