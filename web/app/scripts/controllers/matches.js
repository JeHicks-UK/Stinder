'use strict';


angular.module('hackAppApp')
  .controller('MatchesCtrl', function (matchService, uiGridConstants) {

    var scope = this;

    scope.gameGridOptions = {
      enableColumnMenus: false,
      rowHeight: 69,
      enableSorting: true,
      showSelectionCheckbox: false,
      enableFullRowSelection: false,
      enableRowSelection: false,
      multiSelect: false,
      enableHorizontalScrollbar: false,
      onRegisterApi: function(gridApi){
        scope.gridApi = gridApi;
      }
    };


    this.showMatchDetails = function(index) {

      scope.matches.forEach(function(match) {
        match.selected = false;
      });
      scope.matches[index].selected = true;

      var match = scope.matches[index]._user;
      scope.matchDetails = match;
      var count = 0;
      match.ownedGames = match.ownedGames.filter(function(game) {
        if(count<5) {++count; return true;}
        else {return false;}
      });

      match.ownedGames.forEach(function(game) {
        game.imageUrl = "http://media.steampowered.com/steamcommunity/public/images/apps/"+game.appid+"/"+game.img_logo_url+".jpg";
      });
      console.log(match);

      scope.gameGridOptions.minRowsToShow = match.ownedGames.length>4 ? 4 : match.ownedGames.length;

      scope.gameGridOptions.enableVerticalScrollbar = match.ownedGames.length>4 ? uiGridConstants.scrollbars.ALWAYS : uiGridConstants.scrollbars.NEVER;
      scope.gameGridOptions.columnDefs = [
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

      ];
      scope.gameGridOptions.data = match.ownedGames;

      if(scope.gridApi) {
        scope.gridApi.core.refresh();
      }

    };



    matchService.getYourMatches(function(matches) {
      console.log(matches);
      if(matches.length && matches.length>0) {
        scope.matches = matches;
        scope.showMatchDetails(0);
      }
    });








  });
