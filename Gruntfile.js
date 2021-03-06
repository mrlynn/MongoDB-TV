module.exports = function (grunt) {
  grunt.initConfig({
    pkg: require('./package.json'),
    nodemon: {
      dev: {
        options: {
          file: 'server.js',
          watchedExtensions: ['js'],
          ignoredFiles: ['docs/**', 'node_modules/**', 'public/**', 'views/**', 'data/**', 'presentation/**'],
          nodeArgs: ['--debug']
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-nodemon');
  grunt.registerTask('default', ['nodemon']);
};