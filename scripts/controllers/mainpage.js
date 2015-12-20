define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('mainpage', ['$scope',function ($scope) {
        $scope.hi = "This is the main page!";
    }]);
});
