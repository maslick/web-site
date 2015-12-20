define([
    '../module',
    'text!./header.html',
    'dropdown'
], function (directives, header) {
    'use strict';
    directives.directive('pageHeader', function () {
        return  {
            template: header,
            restrict: 'E',
            controller: function ($scope) {
                $scope.hey = "never mind";
            }
        };
    });
});