'use strict';


angular.module('hackAppApp')
  .controller('HomeCtrl', function (matchService, uiGridConstants) {

    var scope = this;
    scope.potentialReady = false;

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





    var getPotentialMatch = function() {
      scope.potentialReady = false;
      console.log("Getting next guy");
      matchService.getPotentialMatch(function(data) {

        console.log(data);
        scope.userData = data;
        if(scope.userData && scope.userData.steamid) {
          updateGameGrid();
        }
        else {
          scope.noMorePotential = true;
        }

      });
    };
    getPotentialMatch();



    var updateGameGrid = function() {


      scope.userData.ownedGames = scope.userData.ownedGames.filter(function(game) {
        return game.advertise;
      });

      scope.userData.ownedGames.forEach(function(game) {
        game.imageUrl = "http://media.steampowered.com/steamcommunity/public/images/apps/"+game.appid+"/"+game.img_logo_url+".jpg";
      });


      scope.gameGridOptions.minRowsToShow = scope.userData.ownedGames.length>4 ? 4 : scope.userData.ownedGames.length;

      scope.gameGridOptions.enableVerticalScrollbar = scope.userData.ownedGames.length>4 ? uiGridConstants.scrollbars.ALWAYS : uiGridConstants.scrollbars.NEVER;
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

      scope.gameGridOptions.data = scope.userData.ownedGames;

      if(scope.gridApi) {
        scope.gridApi.core.refresh();
      }
      scope.potentialReady = true;
    };


    this.accept = function(user) {
      matchService.acceptMatch(user._id, function(response) {
        if(response.data.message==="match") {
          alert("You have new match!!");
        }
        getPotentialMatch();
      });

    };


    this.reject = function(user) {
      matchService.rejectMatch(user._id, function(response) {
        console.log(response);
        if (response.status === 200) {
          getPotentialMatch();
        }
        else {
          console.log("failed to reject!");
        }
      });
    };



  });
