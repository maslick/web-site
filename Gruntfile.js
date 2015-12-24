module.exports = function(grunt) {

    var paths = {
        dev: 'scripts',
        prod: 'target'
    };

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        paths: paths,
        connect: {
            dev: {
                options: {
                    port: '3003',
                    hostname: '0.0.0.0',
                    keepalive: true,
                    open: true,
                    base: ['.', 'scripts/content', 'vendor/requirejs']
                }
            },
            prod: {
                options: {
                    port: '3003',
                    hostname: '0.0.0.0',
                    keepalive: true,
                    open: true,
                    base: ['<%= paths.prod %>']
                }
            }
        },
        clean: {
            options: {
                force: true
            },
            dev: {
                src: ['<%= paths.dev %>/content/css']
            },
            prod: {
                src: ['<%= paths.prod %>']
            }
        },
        copy: {
            dev: {
                files: [
                    // fonts
                    {
                        expand: true,
                        flatten: true,
                        dot: true,
                        cwd: '.',
                        src: [
                            'vendor/typopro-web/web/TypoPRO-BukhariScript/*.{otf,eot,svg,ttf,woff,woff2}'
                        ],
                        dest: '<%= paths.dev %>/content/css/'
                    }
                ]
            },
            prod: {
                files: [
                    // fonts
                    {
                        expand: true,
                        flatten: true,
                        dot: true,
                        cwd: '.',
                        src: [
                            'vendor/typopro-web/web/TypoPRO-BukhariScript/*.{otf,eot,svg,ttf,woff,woff2}'
                        ],
                        dest: '<%= paths.prod %>/css/'
                    },
                    // index.html
                    {
                        cwd: '.',
                        src: 'index.html',
                        dest: '<%= paths.prod %>/'
                    },
                    // content
                    {
                        cwd: '.',
                        src: ['scripts/**/*.html'],
                        dest: '<%= paths.prod %>/'
                    },
                    // require.js
                    {
                        cwd: '.',
                        src: ['vendor/requirejs/require.js'],
                        dest: '<%= paths.prod %>/require.js'
                    }
                ]
            }
        },
        less: {
            dev: {
                files: {
                    "<%= paths.dev %>/content/css/layout.css": "scripts/content/layout.less",
                    "<%= paths.dev %>/content/css/loading.css": "scripts/content/loading.less"
                }
            },
            prod: {
                files: {
                    "<%= paths.prod %>/css/layout.css": "scripts/content/layout.less",
                    "<%= paths.prod %>/css/loading.css": "scripts/content/loading.less"
                }
            }
        },
        sass: {
            options: {
                loadPath: ['vendor/foundation/scss']
            },
            prod: {
                options: {
                    sourcemap: 'none',
                    style: 'nested'
                },
                files: [{
                    expand: true,
                    cwd: 'scripts',
                    src: ['**/*.scss'],
                    dest: '<%= paths.prod %>',
                    ext: '.css'
                }]
            }
        },
        requirejs: {
            options: {
                name: 'main',
                baseUrl: 'scripts',
                mainConfigFile: 'scripts/main.js',
                out: '<%= paths.prod %>/scripts/main.js',
                optimize: 'none',
                almond: true,
                preserveLicenseComments: false,
                useStrict: true,
                wrap: true,
                findNestedDependencies: true,
                paths: {}
            },
            dist: {}
        },
        ngAnnotate: {
            options: {
                singleQuotes: true
            },
            dist: {
                files: [
                    {
                        expand: true,
                        src: '<%= paths.prod %>/scripts/main.js',
                        extDot: 'last'
                    }
                ]
            }
        },
        uglify: {
            options: {
                compress: {
                    sequences: false,
                    dead_code: false,
                    drop_debugger: false,
                    comparisons: false,
                    conditionals: false,
                    evaluate: false,
                    booleans: false,
                    loops: false,
                    if_return: false,
                    join_vars: false,
                    drop_console: false
                }
            },
            requirejs: {
                files: {
                    '<%= paths.prod %>/require.js': ['<%= paths.prod %>/require.js'],
                    '<%= paths.prod %>/scripts/main.js': ['<%= paths.prod %>/scripts/main.js']
                }
            }
        },
        htmlmin: {
            options: {
                collapseWhitespace: true
            },
            prod: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= paths.prod %>',
                        src: '**/*.html',
                        dest: '<%= paths.prod %>'
                    },
                    {
                        expand: true,
                        cwd: '<%= paths.prod %>',
                        src: '**/*.css',
                        dest: '<%= paths.prod %>'
                    }
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-ng-annotate');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-connect');


    grunt.registerTask('prod', [
        'clean:prod',
        'sass',
        'less:prod',
        'copy:prod',
        'requirejs',
        'connect:prod'
    ]);

    grunt.registerTask('prod.min', [
        'clean:prod',
        'sass',
        'less:prod',
        'copy:prod',
        'requirejs',
        'ngAnnotate',
        'uglify',
        'htmlmin',
        'connect:prod'
    ]);

    grunt.registerTask('dev', [
        'clean:dev',
        'copy:dev',
        'less:dev',
        'connect:dev'
    ]);

};