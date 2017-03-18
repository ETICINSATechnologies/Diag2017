(function () {
    'use strict';

    angular
        .module('diag')
        .controller('homeController', homeController);

    homeController.$inject = ['$scope'];

    function homeController($scope) {
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
      w.bind('resize', function(){
        $scope.$apply();
      });
    }
})();
