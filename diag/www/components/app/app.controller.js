﻿(function () {
    'use strict';

    angular
        .module('diag')
        .controller('appController', appController);

    appController.$inject = ['$scope', '$state', '$ionicModal', '$ionicPopover', '$timeout'];

    function appController($scope, $state, $ionicModal, $ionicPopover, $timeout) {
        // Form data for the login modal
        $scope.loginData = {};

        var navIcons = document.getElementsByClassName('ion-navicon');
        for (var i = 0; i < navIcons.length; i++) {
            navIcons.addEventListener('click', function () {
                this.classList.toggle('active');
            });
        }

        // .fromTemplate() method
        var template = '<ion-popover-view>' +
            '   <ion-header-bar>' +
            '       <h1 class="title">My Popover Title</h1>' +
            '   </ion-header-bar>' +
            '   <ion-content class="padding">' +
            '       My Popover Contents' +
            '   </ion-content>' +
            '</ion-popover-view>';

        $scope.popover = $ionicPopover.fromTemplate(template, {
            scope: $scope
        });
        $scope.closePopover = function () {
            $scope.popover.hide();
        };
        //Cleanup the popover when we're done with it!
        $scope.$on('$destroy', function () {
            $scope.popover.remove();
        });

        $scope.backToHome = function () {
            for (var i = 0; i < navIcons.length; i++) {
                navIcons[i].click();
            }
            $state.go('app.home');
        };
    }
})();

