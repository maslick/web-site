module.exports = function(grunt) {

    var paths = {
        tmp: 'target'
    };

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        paths: paths,
        clean: {
            options: {
                force: true
            },
            temp: {
                src: ['<%= paths.tmp %>']
            }
        },
        copy: {
            develop: {
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
                        dest: '<%= paths.tmp %>/css/'
                    },
                    // index.html
                    {
                        cwd: '.',
                        src: 'index.html',
                        dest: '<%= paths.tmp %>/'
                    },
                    // content
                    {
                        cwd: '.',
                        src: ['scripts/**/*.html'],
                        dest: '<%= paths.tmp %>/'
                    },
                    // require.js
                    {
                        cwd: '.',
                        src: ['vendor/requirejs/require.js'],
                        dest: '<%= paths.tmp %>/require.js'
                    }
                ]
            }
        },
        less: {
            develop: {
                files: {
                    "<%= paths.tmp %>/css/layout.css": "css/layout.less"
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
                    dest: '<%= paths.tmp %>',
                    ext: '.css'
                }]
            }
        },
        requirejs: {
            options: {
                name: 'main',
                baseUrl: 'scripts',
                mainConfigFile: 'scripts/main.js',
                out: '<%= paths.tmp %>/scripts/main.js',
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
                        src: '<%= paths.tmp %>/scripts/main.js',
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
                    '<%= paths.tmp %>/require.js': ['<%= paths.tmp %>/require.js'],
                    '<%= paths.tmp %>/scripts/main.js': ['<%= paths.tmp %>/scripts/main.js']
                }
            }
        },
        htmlmin: {
            options: {
                //removeCommentsFromCDATA: true,
                collapseWhitespace: true
                //collapseBooleanAttributes: true,
                //removeAttributeQuotes: true,
                //removeRedundantAttributes: true,
                //useShortDoctype: true,
                //removeEmptyAttributes: true,
                //removeOptionalTags: true
            },
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= paths.tmp %>',
                        src: '**/*.html',
                        dest: '<%= paths.tmp %>'
                    },
                    {
                        expand: true,
                        cwd: '<%= paths.tmp %>',
                        src: '**/*.css',
                        dest: '<%= paths.tmp %>'
                    }
                ]
            }
        },
        connect: {
            server: {
                options: {
                    port: '3003',
                    hostname: '0.0.0.0',
                    keepalive: true,
                    open: true,
                    base: ['<%= paths.tmp %>']
                }
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


    grunt.registerTask('dev', [
        'clean',
        'sass',
        'less',
        'copy',
        'requirejs',
        'connect:server'
    ]);

    grunt.registerTask('prod', [
        'clean',
        'sass',
        'less',
        'copy',
        'requirejs',
        'ngAnnotate',
        'uglify',
        'htmlmin',
        'connect:server'
    ]);

    grunt.registerTask('serve', [
        'connect:server'
    ]);

};