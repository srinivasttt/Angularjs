/**
 * Created by Sreenivasulu.t on 8/13/2015.
 */
'use strict';

angular.module('myApp.main', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'views/home.html',
            controller: 'listCtrl'
        }).
         when('/add',{
                templateUrl:'views/addWine.html',
                controller:'addCtrl'
            }).
            when('/detail',{
                templateUrl:'views/detail.html',
                controller:'detailCtrl'
            })
    }])

    .controller('listCtrl', function($scope) {
        $scope.wines = [
            {id:0,name:'Jani',country:'Norway',year:2010},
            {id:1,name:'Hege',country:'Sweden',year:2010},
            {id:2,name:'Kai',country:'Denmark',year:2010},
            {id:3,name:'Jani',country:'Norway',year:2010},
            {id:4,name:'Hege',country:'Sweden',year:2010},
            {id:5,name:'Kai',country:'Denmark',year:2010},
            {id:6,name:'Jani',country:'Norway',year:2010},
            {id:7,name:'Hege',country:'Sweden',year:2010},
            {id:8,name:'Kai',country:'Denmark',year:2010}
        ];
    })
.controller('addCtrl', function($scope) {
        alert('inside controller');
        $scope.createTodo = function() {
            $http.post('/api/wines', $scope.formData)
                .success(function(data) {
                    $scope.formData = {}; // clear the form so our user is ready to enter another
                    $scope.todos = data;
                    console.log(data);
                })
                .error(function(data) {
                    console.log('Error: ' + data);
                });
        };

    });

