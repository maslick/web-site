define(['../module'], function (controllers) {
    'use strict';
    controllers.controller('MyCtrl1', ['$scope',function ($scope) {
        $scope.text = "hello world!";

        var files = [
            'gorenje.jpg',
            'gorenje1.jpg',
            'gorenje2.jpg',
            'heli.jpg',
            'nikon.jpg',
            'nikon2.jpg',
            'robot.jpg',
            'scholl1.jpg',
            'scholl2.jpg',
            'termos1.jpg',
            'termos2.jpg',
            'termos3.jpg',
            'turnigy.jpg',
            'wiha.jpg'
        ];

        function shuffle(o){
            for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
            return o;
        }

        function makeArray (array) {
            $scope.thumbs = [];
            var i,j,temparray,chunk = 3;
            for (i=0,j=array.length; i<j; i+=chunk) {
                temparray = array.slice(i,i+chunk);
                $scope.thumbs.push(temparray);
            }
        }

        $scope.btn_sort = function() {
            makeArray(shuffle(files));
        }

        makeArray(shuffle(files));

    }]);
});
