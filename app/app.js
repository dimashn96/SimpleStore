'use strict';

let catalogApp = angular.module('catalogApp', ["ngRoute"])
    .config(function($routeProvider){
        $routeProvider
            .when('/phones',
            {
                templateUrl:'views/phones.html',
                controller:'PhonesController'
            })
            .when('/phones/:id', {
            templateUrl:'views/phone.html',
            controller:'PhonesController'
            })
            .when('/tablets', {
                templateUrl:'views/tablets.html',
                controller:'TabletsController'
            })
            .when('/tablets/:id', {
            templateUrl:'views/tablet.html',
            controller:'TabletsController'
            })
            .when('/notebooks', {
                templateUrl:'views/notebooks.html',
                controller:'NotebooksController'
            })
            .when('/notebooks/:id', {
                templateUrl:'views/notebook.html',
                controller:'NotebooksController'
            })
            .otherwise( {
                redirectTo: '/phones'
            });
    })
    .filter('startFrom', function(){
        return function(input, start){
            start = +start;
            return input.slice(start);
        }
    });