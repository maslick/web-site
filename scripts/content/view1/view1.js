define(['../module'], function (controllers) {
    'use strict';
    controllers.controller('MyCtrl1', ['$scope',function ($scope) {
        $scope.text = "hello world!";
    }]);
});
