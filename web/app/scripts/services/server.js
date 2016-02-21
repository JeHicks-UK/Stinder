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

    this.getUserGameData = function(callback) {
      $http.get("/user/games").then(function(data) {
        callback(data);
      }, function(error) {
        callback(error);
      });
    };

    this.saveUserData = function(data, callback) {
      $http.post("/user", {user: data}).then(function(response) {
        callback(response);
      }, function(error) {
        callback(error);
      });
    };

    this.getMatches = function(callback) {
      $http.get("/matches").then(function(data) {
        callback(data);
      }, function(error) {
        callback(error);
      });
    };

    this.getNextPotentialMatch = function(callback) {
      $http.get("/potential/next").then(function(data) {
        callback(data);
      }, function(error) {
        callback(error);
      });
    };

  });
