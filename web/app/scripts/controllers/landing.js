'use strict';

/**
 * @ngdoc function
 * @name hackAppApp.controller:LandingCtrl
 * @description
 * # LandingCtrl
 * Controller of the hackAppApp
 */
angular.module('hackAppApp')
  .controller('LandingCtrl', function (userService) {
    userService.getUserData(function(data){
      //alert(JSON.stringify(data));
    })


  });
