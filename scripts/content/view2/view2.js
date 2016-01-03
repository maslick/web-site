define(['../module', 'jquery'], function (controllers, $) {
    'use strict';
    controllers.controller('MyCtrl2', ['$scope', function ($scope) {

        $("#menu-toggle").click( function (e){
            e.preventDefault();
            $("#wrapper").toggleClass("menuDisplayed");
        });

    }]);
});
