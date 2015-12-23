module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt, { pattern: 'grunt-contrib-*'});


    var paths = {
        dist: 'dist'
    };

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: '3003',
                    hostname: '0.0.0.0',
                    keepalive: true,
                    open: true,
                    base: ['.tmp']
                }
            }
        },
        clean: {
            options: {
                force: true
            },
            temp: {
                src: ['.tmp']
            },
            dist: {
                src: ['<%= paths.dist %>']
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
                        src: [
                            'vendor/typopro-web/web/TypoPRO-BukhariScript/*.{otf,eot,svg,ttf,woff,woff2}'
                        ],
                        dest: '.tmp/css/'
                    },
                    {
                        cwd: '.',
                        src: 'index.html',
                        dest: '.tmp/'
                    },
                    {
                        cwd: '.',
                        src: ['scripts/**/*.{html,}'],
                        dest: '.tmp/'
                    },
                    {
                        cwd: '.',
                        src: ['vendor/requirejs/**'],
                        dest: '.tmp/'

                    }
                ]
            }
        },
        less: {
            develop: {
                files: {
                    ".tmp/css/layout.css": "css/layout.less"
                }
            },
            dist: {
                options: {
                    modifyVars: {

                    }
                },
                files: {
                    ".tmp/css/layout.css": "scripts/content/layout.less"
                }
            }
        },
        sass: {
            options: {
                loadPath: ['vendor/foundation/scss']
            },
            dist: {
                options: {
                    sourcemap: 'none',
                    style: 'nested'
                },
                files: [{
                    expand: true,
                    cwd: 'scripts',
                    src: ['**/*.scss'],
                    dest: paths.dist,
                    ext: '.css'
                }]
            }
        },
        requirejs: {
            // Options: https://github.com/jrburke/r.js/blob/master/build/example.build.js
            options: {
                name: 'main',
                baseUrl: 'scripts',
                mainConfigFile: 'scripts/main.js',
                out: '.tmp/scripts/main.js',
                optimize: 'none',
                almond: true,
                preserveLicenseComments: false,
                useStrict: true,
                wrap: true,
                findNestedDependencies: true,
                paths: {
                    //config: '../.tmp/scripts/config'
                }
            },
            dist: {}
        },
    });

    grunt.registerTask('dev', [
        'sass',
        'clean:temp',
        'less:develop',
        'copy:develop',
        'requirejs',
        'connect:server'
    ]);

};