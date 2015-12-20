/**
 * Defines the main routes in the application.
 * The routes you see here will be anchors '#/' unless specifically configured otherwise.
 */

define(['./app'], function(app) {
    'use strict';
    return app.config(function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
        //$httpProvider.defaults.headers.common.Accept = 'application/json, text/plain';
        //$httpProvider.defaults.headers.common['Content-Type'] = 'application/json';
        //$httpProvider.defaults.timeout = 15000;


        $stateProvider.state('view1',{
            url: '/view1',
            templateUrl: 'scripts/content/view1.html',
            controller:'MyCtrl1'
        })
            .state('view2',{
                url: '/view2',
                templateUrl: 'scripts/content/view2.html',
                controller: 'MyCtrl2'
            })
            .state('index',{
                url: '/',
                templateUrl: 'scripts/content/index.html',
                controller: 'mainpage'
            });

        $urlRouterProvider.otherwise('/');

        var html5 = {
            enabled: false,
            requireBase: false,
            rewriteLinks: false
        };
        $locationProvider.html5Mode(html5).hashPrefix('');
    });
});