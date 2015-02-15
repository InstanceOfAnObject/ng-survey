module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    jshint: {
        all: [ 'src/**/*.js' ]
    },
    
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'build/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    
    concat: {
        options: {
            separator: ';\n\n'
        },
        dist: {
            src: [ 'src/module.js', 'src/directives/**/*.js' ],
            dest: 'build/<%= pkg.name %>.js'
        }
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['jshint', 'concat', 'uglify']);

};