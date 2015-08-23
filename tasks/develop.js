"use strict";

module.exports = function develop(grunt) {
  
  grunt.loadNpmTasks('grunt-develop');

  return {
      server: {
          file: "server.js",
          cmd: "node"
      }
  };

};

