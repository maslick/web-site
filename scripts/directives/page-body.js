define([
    './module',
    'text!./body/body.html'
], function (directives, body) {
    'use strict';
    directives.directive('pageBody', function () {
        return  {
            template: body,
            restrict: 'E'
        };
    });
});
