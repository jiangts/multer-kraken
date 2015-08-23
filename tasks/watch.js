"use strict";

module.exports = function watch(grunt) {

  var reloadPort = 35729;
  grunt.loadNpmTasks('grunt-contrib-watch');

  return {
      options: {
        nospawn: true,
        livereload: reloadPort
      },
      server: {
        files: ["controllers/**/*.js", "models/**/*.js", "server.js", "index.js", "lib/**/*.js"],
        tasks: ["develop", "delayed-livereload"]
      },
      js: {
        files: ["public/js/*.js"],
        options: {
          livereload: reloadPort
        }
      },
      css: {
        files: ["public/css/*.css"],
        options: {
          livereload: reloadPort
        }
      },
      styl: {
        files: ["public/css/*.styl"],
        options: {
          livereload: reloadPort
        }
      },
      views: {
        files: ["public/**/*.jade"],
        options: {
          livereload: reloadPort
        }
      }
  };

};

