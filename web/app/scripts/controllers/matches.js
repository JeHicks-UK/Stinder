'use strict';


angular.module('hackAppApp')
  .controller('MatchesCtrl', function (matchService, uiGridConstants) {

    var scope = this;
    matchService.getYourMatches(function(matches) {
      console.log(matches);
      scope.matches = matches;
      showMatchDetails(0);
    });


    scope.gameGridOptions = {};

    var showMatchDetails = function(index) {

      var match = scope.matches[index]._user;
      var count = 0;
      match.ownedGames = match.ownedGames.filter(function(game) {
        if(count<5) {++count; return true;}
        else {return false;}
      });

      match.ownedGames.forEach(function(game) {
        game.imageUrl = "http://media.steampowered.com/steamcommunity/public/images/apps/"+game.appid+"/"+game.img_logo_url+".jpg";
      });
      console.log(match);


      scope.gameGridOptions = {
        enableColumnMenus: false,
        rowHeight: 69,
        minRowsToShow: match.ownedGames.length>4 ? 4 : match.ownedGames.length,
        enableSorting: true,
        showSelectionCheckbox: false,
        enableFullRowSelection: false,
        enableRowSelection: false,
        multiSelect: false,
        enableHorizontalScrollbar: false,
        enableVerticalScrollbar: match.ownedGames.length>4 ? uiGridConstants.scrollbars.ALWAYS : uiGridConstants.scrollbars.NEVER,
        columnDefs: [
          { field: 'image', cellTemplate: "<img src=\"{{row.entity.imageUrl}}\" lazy-src>", maxWidth: 184, enableSorting: false},
          { field: 'name' },
          { field: 'playtime_forever',
            displayName: 'Playtime',
            maxWidth: 90,
            sort: {
              direction: uiGridConstants.DESC,
              priority: 0
            },
            cellTemplate: "<span class='playtime-cell-content'>{{row.entity.playtime_forever/60 | number : 0}} h</span>"
          }

        ],
        data: match.ownedGames
      };

    };



  });
