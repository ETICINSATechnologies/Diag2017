(function () {
  'use strict';

  angular
    .module('diag')
    .controller('homeController', homeController);

  homeController.$inject = ['$scope', 'WindowService'];

  function homeController($scope, WindowService) {
    $scope.WindowService = WindowService;
  }
})();
