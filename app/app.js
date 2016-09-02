"use strict";

let app = angular.module('TravelApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'partials/guide-list.html',
    controller: 'BookCtrl'
  })
  .otherwise('/');

}]);
