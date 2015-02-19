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
  '$scope',
  function($scope) {

    // create the list first
    var tmpList = [];
    for (var i = 1; i <= 5; i++){
      tmpList.push({
        number: i,
        value: i
      });
    }

    $scope.list = tmpList;

    $scope.sortableOptions = {

    };
  }
]);
