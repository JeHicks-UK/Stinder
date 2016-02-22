"use strict";
/**
 * Created by jehicks on 20/02/16.
 */


angular.module('hackAppApp')
  .service("userService", function(server) {
    var userData;

    this.getUserData = function(callback) {
      if (userData){
        callback(userData);
      }
      else {
        server.getUserData(function (data) {
          if(data.status!==401) {
            userData = data.data;
          }
          else {
            userData = {status: data.status};
          }
          callback(userData);
        });
      }
    };

    this.isRegistrationComplete = function(callback){
      this.getUserData(function(userdata){
        callback(userdata.registrationComplete);
      })
    };

    this.getUserDataWithGames = function(callback){
      if (userData && userData.ownedGames) {
        callback(userData);
      }
      else{
        server.getUserGameData(function(gameData){
          userData.ownedGames = gameData;
          callback(userData);
        });
      }
    };

    this.setUserData = function(data){
      userData = data;
    };

    this.saveUserData = function (callback){
      server.saveUserData(userData, function(response){
        if(response.status === 200){
          userData.registrationComplete = true;
        }
        callback(response);
      });
    };
  });
