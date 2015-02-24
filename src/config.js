angular.module('mainApp.config', [])
.config(function ($routeProvider) {'use strict';
  
  $routeProvider
    .when('/', {
      controller: 'HomeController',
      templateUrl: 'controllers/home/template.html'
    })
    .otherwise('/');
  
});