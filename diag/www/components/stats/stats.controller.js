(function () {
    'use strict';

    angular
        .module('diag')
        .controller('statsController', statsController);

    statsController.$inject = ['$scope', 'WindowService'];

    function statsController($scope, WindowService) {
      $scope.WindowService = WindowService;
    }
})();
