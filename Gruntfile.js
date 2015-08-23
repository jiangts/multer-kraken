'use strict';

var request = require('request');


module.exports = function (grunt) {

    require('time-grunt')(grunt);

    // Load the project's grunt tasks from a directory
    require('grunt-config-dir')(grunt, {
        configDir: require('path').resolve('tasks')
    });

    // Register group tasks
    grunt.registerTask('build', [ 'jshint', 'less', 'requirejs', 'i18n', 'copyto' ]);
    grunt.registerTask('test', [ 'jshint', 'mochacli' ]);


    var reloadPort = 35729;
    grunt.config.requires('watch.server.files');
    var files = grunt.config('watch.server.files');
    files = grunt.file.expand(files);

    grunt.registerTask('delayed-livereload', 'Live reload after the node server has restarted.', function() {
        var done;
        done = this.async();
        return setTimeout((function() {
            return request.get('http://localhost:' + reloadPort + '/changed?files=' + files.join(','), function(err, res) {
                var reloaded;
                reloaded = !err && res.statusCode === 200;
                if (reloaded) {
                    grunt.log.ok('Delayed live reload successful.');
                } else {
                    grunt.log.error('Unable to make a delayed live reload.');
                }   
                return done(reloaded);
            }); 
        }), 500);
    }); 

    grunt.registerTask('default', ['develop', 'watch']);


};
