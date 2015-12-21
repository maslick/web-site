module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    var paths = {
        dist: 'dist'
    };

    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: '3003',
                    hostname: '0.0.0.0',
                    keepalive: true,
                    open: true,
                    base: ['.tmp', '.']
                }
            }
        },
        clean: {
            options: {
                force: true
            },
            temp: {
                src: ['.tmp']
            }
        },
        less: {
            develop: {
                files: {
                    ".tmp/css/layout.css": "css/layout.less"
                }
            }
        },
        copy: {
            develop: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        dot: true,
                        cwd: '.',
                        dest: '.tmp/css/',
                        src: [
                            'vendor/typopro-web/web/TypoPRO-BukhariScript/*.{otf,eot,svg,ttf,woff,woff2}',
                        ]
                    }
                ]
            }
        }
    });

    grunt.registerTask('dev', [
        'clean:temp',
        'less:develop',
        'copy:develop',
        'connect:server'
    ]);
};