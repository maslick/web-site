require.config({
    locale: 'en',
    waitSeconds: 0,
    paths: {
        'jquery': '../vendor/jquery/dist/jquery',
        'i18n': '../vendor/requirejs-i18n/i18n',
        'text': '../vendor/requirejs-text/text',
        'angular': '../vendor/angular/angular',
        'keycloak': '../vendor/keycloak/dist/keycloak',
        'bootstrap' : '../vendor/bootstrap/dist/js/bootstrap.min',
        'jsonFormatter': '../vendor/json-formatter/dist/json-formatter',
        'rainbow': '../vendor/rainbow.js/topbar',
        'angular-ui-router': '../vendor/angular-ui-router/release/angular-ui-router',
        'lodash': '../vendor/lodash/lodash',
    },
    shim: {
        'angular': {
            exports: 'angular',
            deps: ['jquery']
        },
        'angular-ui-router': {
            deps: ['angular']
        },
        'bootstrap': {
            deps:['jquery']
        }
    }
});

require(['app'], function (App) {
    App.spinner();
    App.rainbow();
    //App.authenticate();
    //App.init();
});