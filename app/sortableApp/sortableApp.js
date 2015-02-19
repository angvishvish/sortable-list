'use strict';

angular.module('angularApp.sortableApp', [
  'ngRoute',
  'ui.sortable',
  'xeditable'
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
       $scope.docs = data;
    });

    $scope.sortableOptions = {
      placeholder: "app",
      connectWith: ".apps-container"
    };
  }
])

.directive("contenteditable", function() {
  return {
    require: "ngModel",
    link: function(scope, element, attrs, ngModel) {

      function read() {
        ngModel.$setViewValue(element.html());
      }

      ngModel.$render = function() {
        element.html(ngModel.$viewValue || "");
      };

      element.bind("blur keyup change", function() {
        scope.$apply(read);
      });
    }
  };
});
