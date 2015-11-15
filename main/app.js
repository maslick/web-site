define([
    'angular', 'jquery', 'rainbow', 'keycloak', 'angular-ui-router'
], function (angular, $, topbar) {


    var rainbow = function() {
        topbar.show();
        var sleeping = function() {
            $('#splash').fadeOut(300, function() {
                $(this).remove();
            });
            topbar.hide();
        }
        setTimeout(sleeping, 1000);
    }

    var spinner = function() {
        var sleeping = function() {
            $('#spinner').fadeOut(300, function() {
                $(this).remove();
            });
        }
        setTimeout(sleeping, 1000);
    }

    var authenticate = function() {
        keycloak = new Keycloak();
        console.log(keycloak);
        keycloak.init({ onLoad: 'login-required' })
            .success(function(authenticated) {
                $("#hello").append("<p>Authenticated</p>");
            }).error(function() {
                $("#hello").append("<p>Failed to authenticate</p>");
            });
    }

    var init = function() {
        var app = angular.module('myApp', ['ui.router'])
            .controller('MyController', ['$scope', function ($scope) {
                $scope.greetMe = 'World';
            }]);

        app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
            $urlRouterProvider.otherwise("/");
            $locationProvider.html5Mode(true).hashPrefix('!');
            $stateProvider
                .state('index', {
                    url: "/",
                    templateUrl: "partials/index.html"
                })
                .state('state1', {
                    url: "/state1",
                    templateUrl: "partials/state1.html"
                })
                .state('state2', {
                    url: "/state2",
                    templateUrl: "partials/state2.html"
                });
        });
        angular.bootstrap(document, ['myApp']);
    }



    return {
        authenticate: authenticate,
        rainbow: rainbow,
        spinner: spinner,
        init: init
    };
});