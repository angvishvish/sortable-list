'use strict';

angular.module('angularApp.sortableApp', [
  'ngRoute',
  'xeditable',
  'ui.sortable',
  'ui.bootstrap.tpls',
  'ui.bootstrap'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/sortableApp', {
    templateUrl: 'sortableApp/sortableApp.html',
    controller: 'sortableAppCtrl'
  });
}])

.controller(
  'sortableAppCtrl',[
  '$scope', '$http', '$modal',
  function($scope, $http, $modal) {

    $scope.docs = [];

    $http.get('sortableApp/sortableDays.json').success(function(data) {
       $scope.docs = data;
    });

    $scope.sortableOptions = {
      placeholder: "app",
      connectWith: ".apps-container"
    };

    $scope.addTask = function () {
      var modalInstance = $modal.open({
        templateUrl: '/sortableApp/app/sortableApp/add-task.html',
        controller: 'addTaskCtrl',
        resolve: {
          docs: function () {
            return $scope.docs;
          }
        }
      });
    };

    $scope.dropzoneFields = [];

    $scope.draggable = {
      connectWith: ".dropzone"
    };
  }
])

.controller(
  'addTaskCtrl', [
  '$scope', '$modalInstance', 'docs',
  function($scope, $modalInstance, docs) {
    $scope.addTask = function (task) {

      task.number = docs[0].tasks.length;
      docs[0].tasks.push(task);
      $modalInstance.dismiss('cancel');
    };
  }
]);
