define(['../module', 'jquery', './data2', './graph'], function (controllers, $) {
    'use strict';
    controllers.controller('MyCtrl3', ['$scope', '$http', function ($scope, $http) {
        draw(m2, "#graph");
    }]);
});
