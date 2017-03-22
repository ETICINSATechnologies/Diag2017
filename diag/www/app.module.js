(function () {
    'use strict';

    angular
        .module('diag', [
            'ionic',
            'ionic-material',
            'ui.router'
        ])
        .run(run)
        .config(config);

    run.$inject = ['$ionicPlatform'];
    config.$inject = [];

    function run($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)

            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    }

    function config() {

    }

})();
