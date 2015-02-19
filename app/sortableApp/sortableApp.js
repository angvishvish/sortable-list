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

    // grabbing the categories
    $http.get('sortableApp/sortableDays.json').success(function(data) {
       $scope.days = data;
    });
  }
]);
