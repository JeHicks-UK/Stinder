'use strict';

/**
 * @ngdoc overview
 * @name hackAppApp
 * @description
 * # hackAppApp
 *
 * Main module of the application.
 */
angular
  .module('hackAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/landing.html',
        controller: 'LandingCtrl',
        controllerAs: 'landing'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl',
        controllerAs: 'register'
      })
      .when('/register2', {
        templateUrl: 'views/register2.html',
        controller: 'Register2Ctrl',
        controllerAs: 'register2'
      })
      .when('/register3', {
        templateUrl: 'views/register3.html',
        controller: 'Register3Ctrl',
        controllerAs: 'register3'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(['$rootScope', '$location', '$cookies', '$http',
    function ($rootScope, $location, $cookieStore, $http) {
      // keep user logged in after page refresh
      $rootScope.globals = {
        currentUser: {
          sessionToken: $cookieStore.get('sessionToken') || ''
        }
      };

      if ($rootScope.globals.currentUser.sessionToken) {
        $http.defaults.headers.common['Authorization'] = $rootScope.globals.currentUser.sessionToken; // jshint ignore:line
        if($location.path() === '/') {
          $location.path('/home');
        }
      }

      $rootScope.$on('$locationChangeStart', function () {
        // redirect to login page if not logged in
        if ($location.path() !== '/' && !$rootScope.globals.currentUser.sessionToken) {
          $location.path('/');
        }
      });
    }]);
