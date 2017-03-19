(function () {
  'use strict';

  angular
    .module('diag')
    .factory('WindowService', WindowService);

  WindowService.$inject = ['$rootScope'];

  function WindowService($rootScope) {

    var windowFactory = {};

    windowFactory.window = angular.element(window);
    $rootScope.$watch(
      function () {
        return window.innerWidth;
      },
      function (value) {
        windowFactory.width = value;
      },
      true
    );
    $rootScope.$watch(
      function () {
        return window.innerHeight;
      },
      function (value) {
        windowFactory.height = value;
      },
      true
    );
    windowFactory.window.bind('resize', function () {
      $rootScope.$apply();
    });

    windowFactory.portrait = function () {
      return windowFactory.height > windowFactory.width;
    };

    windowFactory.landscape = function () {
      return windowFactory.height <= windowFactory.width;
    };

    return windowFactory;
  }
})();

