(function () {
  'use strict';

  angular
    .module('diag')
    .factory('ProjectService', ProjectService);

  ProjectService.$inject = ['$http'];

  function ProjectService($http) {

    var projectFactory = {};

    projectFactory.getAllProjects = function () {
      return $http.get("data/projects.json", {cache: true}).success(function (data) {
        projectFactory.projects = [];
        for (var i = 0; i < data.length; i += 2) {
          projectFactory.projects.push([
            data[i], data[i + 1]
          ]);
        }
      }).error(function (error) {
        console.log(error);
      });
    };

    return projectFactory;
  }
})();
