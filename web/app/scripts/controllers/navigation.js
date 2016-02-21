"use strict";
/**
 * Created by karlkerem on 21/02/16.
 */


angular.module('hackAppApp')
  .controller('NavigationCtrl', function ($location, $scope, $rootScope) {


    $rootScope.$on("$locationChangeSuccess", function(event, next, current) {
      $scope.activePage = $location.path();

    });

    $scope.activePage = $location.path();
    console.log($scope.activePage);

  });
