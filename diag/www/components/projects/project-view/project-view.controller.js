(function () {
  'use strict';

  angular
    .module('diag')
    .controller('projectViewController', projectViewController);

  projectViewController.$inject = ['$scope', '$state', 'WindowService', 'ProjectService'];

  function projectViewController($scope, $state, WindowService, ProjectService) {
    $scope.WindowService = WindowService;

    $scope.currentTask = 0;

    $scope.setCurrentTask = function (n) {
      $scope.currentTask = n;
    };

    ProjectService.getAllProjects().success(function (data) {
      $scope.project = ProjectService.projects[$state.params.x][$state.params.y];
      console.log($scope.project);
    }).error(function (error) {
      console.log(error);
    });
  }
})();
