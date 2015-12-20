define([
    './module',
    'text!./header/header.html'
], function (directives, header) {
    'use strict';
    directives.directive('pageHeader', function () {
        return  {
            template: header,
            restrict: 'E'
        };
    });
});