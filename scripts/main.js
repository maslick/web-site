    require.config({
    locale: 'en',
    waitSeconds: 0,
    paths: {
        'domReady': '../vendor/requirejs-domready/domReady',
        'jquery': '../vendor/jquery/dist/jquery',
        'i18n': '../vendor/requirejs-i18n/i18n',
        'text': '../vendor/requirejs-text/text',
        'angular': '../vendor/angular/angular',
        'twitter-bootstrap' : '../vendor/bootstrap/dist/js/bootstrap.min',
        'rainbow': '../vendor/rainbow.js/topbar',
        'uiRouter': '../vendor/angular-ui-router/release/angular-ui-router',
        'dropdown': '../vendor/bootstrap/js/dropdown',
        'modernizr': '../vendor/modernizr/modernizr',
        'angular-infinite-scroll': '../vendor/ngInfiniteScroll/build/ng-infinite-scroll'
    },
    shim: {
        'angular': {
            exports: 'angular',

        },
        'uiRouter': {
            deps: ['angular']
        },
        'twitter-bootstrap': {
            deps:['jquery']
        },
        'angular-infinite-scroll': {
            deps: ['angular','jquery']
        },
    },
    deps: [
        // kick start application... see bootstrap.js
        './bootstrap'
    ]
});
