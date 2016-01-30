/**
 * loads sub modules and wraps them up into the main module
 * this should be used for top-level module definitions only
 */
define([
    'angular',
    'uiRouter',
    'angular-infinite-scroll',
    'angular-ui-ace',
    './content/index',
    './directives/index',
    './filters/index',
    './services/index'
], function (ng) {
    'use strict';

    var application = ng.module('app', [
        'app.services',
        'app.controllers',
        'app.filters',
        'app.directives',
        'ui.router',
        'infinite-scroll',
        'ui.ace'
    ]);

    ng.module('infinite-scroll').value('THROTTLE_MILLISECONDS', 250);

    return application;
});
