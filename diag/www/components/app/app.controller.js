(function () {
  'use strict';

  angular
    .module('diag')
    .controller('appController', appController);

  appController.$inject = ['$scope', '$state', '$ionicModal', '$ionicPopover', '$timeout', 'ProjectService'];

  function appController($scope, $state, $ionicModal, $ionicPopover, $timeout, ProjectService) {
    // Form data for the login modal
    $scope.loginData = {};
    $scope.ProjectService = ProjectService;

    ProjectService.getAllProjects();

    var navIcons = document.getElementsByClassName('ion-navicon');
    for (var i = 0; i < navIcons.length; i++) {
      navIcons.addEventListener('click', function () {
        this.classList.toggle('active');
      });
    }
  }
})();

