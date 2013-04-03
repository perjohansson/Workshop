/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    less: {
      development: {
        options: {
          paths: ['public/styles/less'],
          compress: false,
          yuicompress: false
        },
        files: {
          'public/styles/css/main.css': 'public/styles/less/main.less'
        }         
      },
      production: {
        options: {
          paths: ['public/styles/less'],
          compress: true,
          yuicompress: true
        },
        files: {
          'public/styles/css/main.min.css': 'public/styles/less/main.less'
        }
      }
    },
    watch: {
      files: ['public/styles/less/**/*.less'],
      tasks: 'less'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['less', 'watch']);

};