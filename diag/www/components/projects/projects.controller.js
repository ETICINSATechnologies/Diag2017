(function () {
  'use strict';

  angular
    .module('diag')
    .controller('projectsController', projectsController);

  projectsController.$inject = ['$scope', 'ProjectService', 'WindowService'];

  function projectsController($scope, ProjectService, WindowService) {
    $scope.ProjectService = ProjectService;
    $scope.WindowService = WindowService;

    ProjectService.getAllProjects();
  }
})();
