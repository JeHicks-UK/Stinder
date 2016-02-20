'use strict';


angular.module('hackAppApp')
  .controller('Register2Ctrl', function () {


    var exampleGameData = [
      {
        "appid": 220,
        "name": "Half-Life 2",
        "playtime_forever": 0,
        "img_icon_url": "fcfb366051782b8ebf2aa297f3b746395858cb62",
        "img_logo_url": "e4ad9cf1b7dc8475c1118625daf9abd4bdcbcad0",
        "has_community_visible_stats": true
      },
      {
        "appid": 240,
        "name": "Counter-Strike: Source",
        "playtime_forever": 3131,
        "img_icon_url": "9052fa60c496a1c03383b27687ec50f4bf0f0e10",
        "img_logo_url": "ee97d0dbf3e5d5d59e69dc20b98ed9dc8cad5283",
        "has_community_visible_stats": true
      },
      {
        "appid": 320,
        "name": "Half-Life 2: Deathmatch",
        "playtime_forever": 0,
        "img_icon_url": "795e85364189511f4990861b578084deef086cb1",
        "img_logo_url": "6dd9f66771300f2252d411e50739a1ceae9e5b30",
        "has_community_visible_stats": true
      },
      {
        "appid": 340,
        "name": "Half-Life 2: Lost Coast",
        "playtime_forever": 0,
        "img_icon_url": "795e85364189511f4990861b578084deef086cb1",
        "img_logo_url": "867cce5c4f37d5ed4aeffb57c60e220ddffe4134"
      },
      {
        "appid": 300,
        "name": "Day of Defeat: Source",
        "playtime_forever": 177,
        "img_icon_url": "062754bb5853b0534283ae27dc5d58200692b22d",
        "img_logo_url": "e3a4313690bd551495a88e1c01951eb26cec7611",
        "has_community_visible_stats": true
      },
      {
        "appid": 2810,
        "name": "X3: Reunion",
        "playtime_forever": 0,
        "img_icon_url": "f715f27302974e0f84d0b85f019174a0e7071b9e",
        "img_logo_url": "9fe54683c740a6eb982a342c3cd9e74145db6e28"
      },
      {
        "appid": 1510,
        "name": "Uplink",
        "playtime_forever": 0,
        "img_icon_url": "3f24e709b546f06641586190a6a84be791161830",
        "img_logo_url": "80982651e79b8556f04e0c0012e65f7c9b6850f2"
      },
      {
        "appid": 2610,
        "name": "GUN",
        "playtime_forever": 251,
        "img_icon_url": "e8203b27619704c8e7f6fc16150b614e63759852",
        "img_logo_url": "ad151699ef2d29eb62d8e4474886d1a45451a85d",
        "has_community_visible_stats": true
      },
      {
        "appid": 4000,
        "name": "Garry's Mod",
        "playtime_forever": 0,
        "img_icon_url": "d9101cbeddcc4ff06c7fa1936c3f381b0bbf2e92",
        "img_logo_url": "dca12980667e32ab072d79f5dbe91884056a03a2",
        "has_community_visible_stats": true
      },
      {
        "appid": 380,
        "name": "Half-Life 2: Episode One",
        "playtime_forever": 0,
        "img_icon_url": "795e85364189511f4990861b578084deef086cb1",
        "img_logo_url": "b5a666a961d8b39896887abbed3b78c2b837c238",
        "has_community_visible_stats": true
      },
      {
        "appid": 400,
        "name": "Portal",
        "playtime_forever": 56,
        "img_icon_url": "cfa928ab4119dd137e50d728e8fe703e4e970aff",
        "img_logo_url": "4184d4c0d915bd3a45210667f7b25361352acd8f",
        "has_community_visible_stats": true
      },
      {
        "appid": 420,
        "name": "Half-Life 2: Episode Two",
        "playtime_forever": 0,
        "img_icon_url": "795e85364189511f4990861b578084deef086cb1",
        "img_logo_url": "553e6a2e7a469dcbaada729baa1f5fd7764668df",
        "has_community_visible_stats": true
      },
      {
        "appid": 13230,
        "name": "Unreal Tournament 2004",
        "playtime_forever": 190,
        "img_icon_url": "db3782214c4285c254f632b0e803ed341c250c9d",
        "img_logo_url": "9fa56d442d3a5d9c31706fb350115aeabf7a52d5"
      },
      {
        "appid": 17410,
        "name": "Mirror's Edge",
        "playtime_forever": 47,
        "img_icon_url": "cfea4731163004b2e5117c3b42a798c48c483d8f",
        "img_logo_url": "8c5a900802fabf20a7922c6a69cec9320c940514"
      },
      {
        "appid": 23310,
        "name": "The Last Remnant",
        "playtime_forever": 0,
        "img_icon_url": "295601b8f28db268004564eb1ff77ef6a0b23bfe",
        "img_logo_url": "8f1ba5318378e32bdd7489178e825bf581c0c207"
      },
      {
        "appid": 6060,
        "name": "Star Wars - Battlefront II",
        "playtime_forever": 0,
        "img_icon_url": "52b9ef75e3c5ada065e990069f71d5f4ffeff300",
        "img_logo_url": "b69d967213be9876d04db44486f9366e861a6f2e",
        "has_community_visible_stats": true
      },
      {
        "appid": 6000,
        "name": "Star Wars Republic Commando",
        "playtime_forever": 0,
        "img_icon_url": "aa2e1e8fffec8e5ee1906bdc970df960da4467b5",
        "img_logo_url": "c7bcd6c6b33eb981bb5f2fe3b8ca4845ecdb26ec",
        "has_community_visible_stats": true
      },
      {
        "appid": 32350,
        "name": "Star Wars Starfighter",
        "playtime_forever": 0,
        "img_icon_url": "95b64d9e847951edc885d8386c222ce8fa0ee3d9",
        "img_logo_url": "f048a2666661aa0ae4decb045974033ef757c623",
        "has_community_visible_stats": true
      },
      {
        "appid": 32400,
        "name": "Star Wars: Dark Forces",
        "playtime_forever": 0,
        "img_icon_url": "b221ef1aa908bd0c1634b57f2d09b3fb34ce2d75",
        "img_logo_url": "80ab33ccd0034a282815dec1d6fea8ffc5ca0361",
        "has_community_visible_stats": true
      },
      {
        "appid": 32380,
        "name": "Star Wars Jedi Knight: Dark Forces II",
        "playtime_forever": 0,
        "img_icon_url": "b221ef1aa908bd0c1634b57f2d09b3fb34ce2d75",
        "img_logo_url": "d501b4595cccaec6133f618d1dbdeb709d4ded5f",
        "has_community_visible_stats": true
      },
      {
        "appid": 6030,
        "name": "Star Wars - Jedi Knight II: Jedi Outcast",
        "playtime_forever": 0,
        "img_icon_url": "ae515d8417902f2eff4b274073dd25da2fcd366a",
        "img_logo_url": "b29a47a5c4e24095b56c397197db20a00f94ee41",
        "has_community_visible_stats": true
      }
    ];

    exampleGameData.forEach(function(game) {
      game.image = "<img width=\"50px\" ng-src=\"http://media.steampowered.com/steamcommunity/public/images/apps/6030/{{row.entity[col.field]}}.jpg\"";
    });

    this.gameGridOptions = {
      enableSorting: true,
      columnDefs: [
        { field: 'Icon', cellTemplate:"<img width=\"50px\" ng-src=\"http://media.steampowered.com/steamcommunity/public/images/apps/6030/{{row.entity[col.field]}}.jpg\" lazy-src>"},
        { field: 'name' },
        { field: 'playtime_forever' }

      ],
      data: exampleGameData
    };




  });
