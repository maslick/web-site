    require.config({
    locale: 'en',
    waitSeconds: 0,
    paths: {
        'domReady': '../vendor/requirejs-domready/domReady',
        'jquery': '../vendor/jquery/dist/jquery',
        'i18n': '../vendor/requirejs-i18n/i18n',
        'text': '../vendor/requirejs-text/text',
        'angular': '../vendor/angular/angular',
        'keycloak': '../vendor/keycloak/dist/keycloak',
        'twitter-bootstrap' : '../vendor/bootstrap/dist/js/bootstrap.min',
        'jsonFormatter': '../vendor/json-formatter/dist/json-formatter',
        'rainbow': '../vendor/rainbow.js/topbar',
        'uiRouter': '../vendor/angular-ui-router/release/angular-ui-router',
        'lodash': '../vendor/lodash/lodash',
        'dropdown': '../vendor/bootstrap/js/dropdown'
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
        }
    },
    deps: [
        // kick start application... see bootstrap.js
        './bootstrap'
    ]
});