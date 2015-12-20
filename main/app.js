define([
    'angular', 'jquery', 'rainbow', './routing/stateTree',
    'keycloak', 'angular-ui-router'
], function (angular, $, topbar, router) {

    var rainbow = function() {
        topbar.show();
        var sleeping = function() {
            $('#splash').fadeOut(300, function() {
                $(this).remove();
            });
            topbar.hide();
        }
        setTimeout(sleeping, 1000);
    };

    var loading = function () {

    };

    var spinner = function() {
        var sleeping = function() {
            $('#spinner').fadeOut(300, function() {
                $(this).remove();
            });
        }
        setTimeout(sleeping, 1000);
    };

    var authenticate = function() {
        keycloak = new Keycloak();
        keycloak.init({ onLoad: 'login-required' })
            .error(function(){
                console.log("error!!!");
            });




        keycloak.onAuthSuccess = function() {
            alert('authenticated');
            keycloak.loadUserProfile()
                .success(function (data) {
                    console.log(data);
                });
        }
        keycloak.onReady = function () {
            console.log(keycloak.token);
            console.log(keycloak);
        };

            /*.success(function(authenticated) {
                $("#hello").append("<p>Authenticated</p>");
                console.log(keycloak.authenticated);
                console.log(keycloak);
            }).error(function() {
                $("#hello").append("<p>Failed to authenticate</p>");
            });*/

    };

    var init = function() {
        var app = angular.module('DCDB-tool', ['ui.router']);

        app.config(
            function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
                $urlRouterProvider.otherwise("/");
                $locationProvider.html5Mode(true).hashPrefix('!');


                $stateProvider
                    .state('index', {
                        url: "/",
                        templateUrl: "partials/index.html",
                        controller: function($scope) {
                            //$scope.hi = "hello world"
                        }
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
        angular.bootstrap(document, ['DCDB-tool']);
    };



    return {
        authenticate: authenticate,
        rainbow: rainbow,
        spinner: spinner,
        init: init
    };
});