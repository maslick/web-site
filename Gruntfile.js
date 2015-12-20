module.exports = function(grunt) {
    // Do grunt-related things in here
    //grunt.loadNpmTasks('grunt-contrib-connect');

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: '3003',
                    hostname: '0.0.0.0',
                    keepalive: true,
                    open: true
                }
            }
        }
    });

    grunt.registerTask('dev', [
        'connect:server'
    ]);
};