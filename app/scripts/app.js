'use strict';

angular.module('christopherDuarteApp', [
  'ngCookies',
  'ngRoute',
  'restangular',
  'ui.bootstrap',
  'gist',
  'ngSanitize'
])
  .config(function ($routeProvider, $locationProvider, RestangularProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main',
        controller: 'MainCtrl'
      })
      .when('/contact', {
        templateUrl: 'partials/contact',
        controller: 'MainCtrl'
      })
      .when('/infoSci', {
        templateUrl: 'partials/infoSci',
        controller: 'InfoSciCtrl',
        authenticate: true
      })
      .when('/infoMgmt', {
        templateUrl: 'partials/infoMgmt',
        controller: 'InfoMgmtCtrl',
        authenticate: true
      })
      .when('/infoViz', {
        templateUrl: 'partials/infoViz',
        controller: 'InfoVizCtrl',
        authenticate: true
      })
      .when('/about', {
        templateUrl: 'partials/about',
        controller: 'AboutCtrl',
        authenticate: true
      })
      .otherwise({
        redirectTo: '/'
      });
      
    $locationProvider.html5Mode(true);

    RestangularProvider.setBaseUrl('/api');
  })
  .factory('_', ['$window',
    function($window) {
      return $window._;
    }
    ]);