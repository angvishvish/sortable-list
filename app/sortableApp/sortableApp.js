'use strict';

angular.module('angularApp.sortableApp', [
  'ngRoute',
  'ui.sortable'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/sortableApp', {
    templateUrl: 'sortableApp/sortableApp.html',
    controller: 'sortableAppCtrl'
  });
}])

.controller(
  'sortableAppCtrl',[
  '$scope', '$http',
  function($scope, $http) {

    // create the list first

    $http.get('sortableApp/sortableJson.json').success(function(data) {
       $scope.list = data;
    });

    // grabbing the days
    $http.get('sortableApp/sortableDays.json').success(function(data) {
       $scope.days = data;
    });
  }
]);
