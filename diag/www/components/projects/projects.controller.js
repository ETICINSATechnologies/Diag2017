(function () {
  'use strict';

  angular
    .module('diag')
    .controller('projectsController', projectsController);

  projectsController.$inject = ['$scope', 'ProjectService'];

  function projectsController($scope, ProjectService) {
    $scope.ProjectService = ProjectService;

    var w = angular.element(window);
    $scope.$watch(
      function () {
        return window.innerWidth;
      },
      function (value) {
        $scope.windowWidth = value;
      },
      true
    );
    $scope.$watch(
      function () {
        return window.innerHeight;
      },
      function (value) {
        $scope.windowHeight = value;
      },
      true
    );
    w.bind('resize', function () {
      $scope.$apply();
    });

    ProjectService.getAllProjects();
  }
})();
