'use strict';


angular.module('hackAppApp')
  .controller('Register2Ctrl', function (uiGridConstants, userService, $location) {

    var scope = this;
    userService.getUserData(function(data) {
      scope.userData = data;
      scope.userData.ownedGames.forEach(function(game) {
        game.imageUrl = "http://media.steampowered.com/steamcommunity/public/images/apps/"+game.appid+"/"+game.img_logo_url+".jpg";
      });
      console.log(data);


      scope.gameGridOptions = {
        enableColumnMenus: false,
        rowHeight: 69,
        enableSorting: true,
        showSelectionCheckbox: true,
        enableFullRowSelection: true,
        enableRowSelection: true,
        selectionRowHeaderWidth: 35,
        multiSelect: true,
        enableHorizontalScrollbar: false,
        columnDefs: [
          { field: 'image', cellTemplate: "<img src=\"{{row.entity.imageUrl}}\" lazy-src>", maxWidth: 184, enableSorting: false},
          { field: 'name' },
          { field: 'playtime_forever',
            maxWidth: 132,
            sort: {
              direction: uiGridConstants.DESC,
              priority: 0
            },
            cellTemplate: "<span>{{row.entity.playtime_forever/60 | number : 0}} h</span>"
          }

        ],
        data: scope.userData.ownedGames
      };

      scope.gameGridOptions.onRegisterApi = function( gridApi ) {

        gridApi.selection.on.rowSelectionChanged(null,function(row){
          var index = scope.userData.ownedGames.indexOf(row.entity);
          scope.userData.ownedGames[index].advertise = row.isSelected;
          if(row.isSelected) {
            scope.noGamesSelected = false;
          }
        });
      };



    });



    this.finishRegistration = function() {
      scope.noGamesSelected = true;
      scope.userData.ownedGames.forEach(function(game){
        if(game.advertise) scope.noGamesSelected = false;
      });
      if(scope.noGamesSelected === true) {
        return;
      }

      userService.setUserData(scope.userData);
      userService.saveUserData(function(response) {
        if(response.status===200) {
          $location.path("/home");
        }
        else {
          scope.errorCreatingAccount = true;
          console.log(response);
        }
      });

    };


    this.goBack = function () {
      userService.setUserData(scope.userData);
      $location.path("/register");
    }



  });
