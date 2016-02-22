"use strict";
/**
 * Created by karlkerem on 21/02/16.
 */


angular.module('hackAppApp')
  .controller('NavigationCtrl', function ($location, $scope, $rootScope, userService) {
    $rootScope.$on("$locationChangeSuccess", function(event, next, current) {
      $scope.activePage = $location.path();
      userService.isRegistrationComplete(function(isRegistrationComplete){
        //if(!isRegistrationComplete && $location.path() !== '/accountsetup2'){
        //  $location.path('/accountsetup');
        //}
      })
    });

    $scope.activePage = $location.path();
    console.log($scope.activePage);

  });
