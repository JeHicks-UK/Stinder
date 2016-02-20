"use strict";
/**
 * Created by karlkerem on 20/02/16.
 */


angular.module('hackAppApp')
  .service("server", function($http) {

    this.getUserData = function(callback) {
      $http.get("/user").then(function(data) {
        callback(data);
      }, function(error) {
        callback(error);
      });
    };




  });
