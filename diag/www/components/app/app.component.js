(function () {
    'use strict';

    angular
        .module('diag')
        .component('appComponent', appComponent());

    function appComponent() {
        return {
            bindings: {},
            controller: "appController",
            templateUrl: "app/components/app/presentation.template.html"
        }
    }
})();