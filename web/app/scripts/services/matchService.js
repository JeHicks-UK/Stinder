"use strict";
/**
 * Created by karlkerem on 21/02/16.
 */


angular.module('hackAppApp')
  .service("matchService", function(server) {


    var matchData;

    this.getYourMatches = function(callback) {
      if (matchData){
        callback(matchData);
      }
      else {
        server.getMatches(function (data) {
          if(data.status===200) {
            matchData = data.data;
          }
          else {
            console.log(data);
            callback([]);
          }
          callback(matchData);
        });
      }
    };



    this.getPotentialMatch = function(callback) {

      server.getNextPotentialMatch(function(data) {
        if(data.status===200) {
          callback(data.data[0]);
        }
        else {
          callback({});
        }

      });


      /*
      callback({
        ownedGames: [
          {
            "appid": 220,
            "name": "Half-Life 2",
            "playtime_forever": 1234,
            "img_icon_url": "fcfb366051782b8ebf2aa297f3b746395858cb62",
            "img_logo_url": "e4ad9cf1b7dc8475c1118625daf9abd4bdcbcad0",
            "has_community_visible_stats": true,
            "advertise": true
          },
          {
            "appid": 240,
            "name": "Counter-Strike: Source",
            "playtime_forever": 3131,
            "img_icon_url": "9052fa60c496a1c03383b27687ec50f4bf0f0e10",
            "img_logo_url": "ee97d0dbf3e5d5d59e69dc20b98ed9dc8cad5283",
            "has_community_visible_stats": true,
            "advertise": true
          },
          {
            "appid": 320,
            "name": "Half-Life 2: Deathmatch",
            "playtime_forever": 0,
            "img_icon_url": "795e85364189511f4990861b578084deef086cb1",
            "img_logo_url": "6dd9f66771300f2252d411e50739a1ceae9e5b30",
            "has_community_visible_stats": true,
            "advertise": true
          },
          {
            "appid": 340,
            "name": "Half-Life 2: Lost Coast",
            "playtime_forever": 9973,
            "img_icon_url": "795e85364189511f4990861b578084deef086cb1",
            "img_logo_url": "867cce5c4f37d5ed4aeffb57c60e220ddffe4134",
            "advertise": true
          },
          {
            "appid": 300,
            "name": "Day of Defeat: Source",
            "playtime_forever": 177,
            "img_icon_url": "062754bb5853b0534283ae27dc5d58200692b22d",
            "img_logo_url": "e3a4313690bd551495a88e1c01951eb26cec7611",
            "has_community_visible_stats": true,
            "advertise": true
          }
        ]
      }) */


    }


    this.acceptMatch = function(_id, callback) {

    };

  });
