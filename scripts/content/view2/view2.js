define(['../module', 'jquery'], function (controllers, $) {
    'use strict';
    controllers.controller('MyCtrl2', ['$scope', '$http', function ($scope, $http) {

        $scope.editor = {
            useWrapMode: true,
            theme:'dawn',
            mode: 'xml',
            onLoad: function (_ace) {
                _ace.setShowPrintMargin(false);
                _ace.getSession().setUseWrapMode(false);
                _ace.$blockScrolling = Infinity;
            },
            advanced: {
                fontSize: 18
            }
        };

        $scope.send = function () {
            $scope.message = "";
        }

    }]);
});
