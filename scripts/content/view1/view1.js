define(['../module'], function (controllers) {
    'use strict';

    controllers.controller('MyCtrl1', ['$scope',function ($scope) {
        $scope.text = "hello world!";
        var infiniteScrollCalled = false;
        var infiniteScrollEnabled = true;

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
            'wiha.jpg',
            'wiha.jpg'
        ];

        function shuffle(o){
            for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
            return o;
        }

        function makeArrayChuncked(arrayin, chuck_size) {
            var resarray = [];
            var i,j,temparray;
            for (i=0,j=arrayin.length; i<j; i+=chuck_size) {
                temparray = arrayin.slice(i,i+chuck_size);
                resarray.push(temparray);
            }
            return resarray;
        }


        $scope.btn_sort = function() {
            $scope.shuffled = shuffle($scope.shuffled);
            $scope.thumbs = makeArrayChuncked($scope.shuffled, 3);
        }


        $scope.pagingFunction = function() {
            if(!infiniteScrollCalled && infiniteScrollEnabled) {
                //infiniteScrollCalled = true;
                getMorePics();
                //infiniteScrollCalled = false;
            }
        };

        var getMorePics = function() {
            if ($scope.thumbs.length > 30) return;
            var array = shuffle(files).slice(0,5);

            $scope.shuffled = $scope.shuffled.concat(array);
            $scope.thumbs = makeArrayChuncked($scope.shuffled, 3);

        }

        // ACTION
        $scope.shuffled = shuffle(files);
        $scope.thumbs = makeArrayChuncked($scope.shuffled, 3);

    }]);
});
