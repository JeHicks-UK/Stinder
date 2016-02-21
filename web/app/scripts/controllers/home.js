'use strict';


angular.module('hackAppApp')
  .controller('HomeCtrl', function (matchService, uiGridConstants) {

    var scope = this;

    scope.gameGridOptions = {
      enableColumnMenus: false,
      rowHeight: 69,
      enableSorting: true,
      showSelectionCheckbox: false,
      enableFullRowSelection: false,
      enableRowSelection: false,
      multiSelect: false,
      enableHorizontalScrollbar: false
    };

    scope.gameGridOptions.onRegisterApi = function(gridApi){
      scope.gridApi = gridApi;
    };



    matchService.getPotentialMatch(function(data) {

      console.log(data);
      scope.userData = data;
      scope.userData.ownedGames = scope.userData.ownedGames.filter(function(game) {
        return game.advertise;
      });

      scope.userData.ownedGames.forEach(function(game) {
        game.imageUrl = "http://media.steampowered.com/steamcommunity/public/images/apps/"+game.appid+"/"+game.img_logo_url+".jpg";
      });


      scope.gameGridOptions = {
        minRowsToShow: scope.userData.ownedGames.length>4 ? 4 : scope.userData.ownedGames.length,
        enableVerticalScrollbar: scope.userData.ownedGames.length>4 ? uiGridConstants.scrollbars.ALWAYS : uiGridConstants.scrollbars.NEVER,
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
        data: scope.userData.ownedGames
      };
      scope.gridApi.core.refresh();


    });


    this.accept = function(user) {
      matchService.acceptMatch(user._id, function(response) {
        console.log(response);
      });


    };


  });
