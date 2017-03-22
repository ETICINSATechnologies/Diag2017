(function () {
  'use strict';

  angular
    .module('diag')
    .controller('projectViewController', projectViewController);

  projectViewController.$inject = ['$scope', '$state', 'WindowService', 'ProjectService'];

  function projectViewController($scope, $state, WindowService, ProjectService) {
    $scope.WindowService = WindowService;
    ProjectService.getAllProjects().success(function (data) {
      $scope.project = ProjectService.projects[$state.params.x][$state.params.y];
    }).error(function (error) {
      console.log(error);
    });
  }
})();
