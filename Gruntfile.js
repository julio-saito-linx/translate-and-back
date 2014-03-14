'use strict';

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        nodeunit: {
            files: ['tests/**/*.js'],
            options: {
                reporter: 'verbose',
                reporterOptions: {
                    output: 'outputdir'
                }
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            gruntfile: {
                src: 'Gruntfile.js'
            },
            lib: {
                src: [
                    'clientapp/*.js',
                    'clientapp/helpers/**/*.js',
                    'clientapp/models/**/*.js',
                    'clientapp/pages/**/*.js',
                    'clientapp/views/**/*.js'
                ]
            },
            test: {
                src: ['tests/**/*.js']
            },
        },
        watch: {
            gruntfile: {
                files: '<%= jshint.gruntfile.src %>',
                tasks: ['jshint:gruntfile']
            },
            lib: {
                files: '<%= jshint.lib.src %>',
                tasks: ['jshint:lib', 'nodeunit']
            },
            test: {
                files: '<%= jshint.test.src %>',
                tasks: ['jshint:test', 'nodeunit']
            },
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task.
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('test', ['nodeunit']);

};
