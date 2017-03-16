(function () {
    'use strict';

    angular
        .module('diag')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function stateConfig($stateProvider, $urlRouterProvider) {
        $stateProvider

            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'components/app/app.template.html',
                controller: 'appController'
            })
            .state('app.home', {
                url: '/home',
                views: {
                    'menuContent': {
                        templateUrl: 'components/home/home.template.html',
                        controller: 'homeController'
                    }
                }
            })
            .state('app.presentation', {
                url: '/presentation',
                views: {
                    'menuContent': {
                        templateUrl: 'components/presentation/presentation.template.html',
                        controller: 'presentationController'
                    }
                }
            })
            .state('app.stats', {
                url: '/stats',
                views: {
                    'menuContent': {
                        templateUrl: 'components/stats/stats.template.html',
                        controller: 'statsController'
                    }
                }
            })
            .state('app.projects', {
                url: '/projects',
                views: {
                    'menuContent': {
                        templateUrl: 'components/projects/projects.template.html',
                        controller: 'projectsController'
                    }
                }
            });

        $urlRouterProvider.otherwise('/app/home');
    }
}) ();
