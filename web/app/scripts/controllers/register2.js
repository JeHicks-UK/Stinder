'use strict';


angular.module('hackAppApp')
  .controller('Register2Ctrl', function (uiGridConstants, userService, $location) {

    var scope = this;
    userService.getUserDataWithGames(function(data) {
      scope.userData = data;
      console.log(data);
    });

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
      },
      {
        "appid": 6020,
        "name": "Star Wars Jedi Knight: Jedi Academy",
        "playtime_forever": 0,
        "img_icon_url": "3ad0cfd9c9cd91196805fe0bd58c66dc874916b3",
        "img_logo_url": "027e513fe7e7681203587f7926828fb188af54ed",
        "has_community_visible_stats": true
      },
      {
        "appid": 24860,
        "name": "Battlefield 2",
        "playtime_forever": 22,
        "img_icon_url": "e9db9128c6b1ac96afa9c2a492331d44643f493a",
        "img_logo_url": "5ec5e6c6a08bf90e8e1c77f9581fad785cfb08d7"
      },
      {
        "appid": 40700,
        "name": "Machinarium",
        "playtime_forever": 2,
        "img_icon_url": "33e11d52f0a2335671d7bf73341c14ae6e596809",
        "img_logo_url": "5101b896d69a6eafc32667689a7f5d8756a4ac87"
      },
      {
        "appid": 17450,
        "name": "Dragon Age: Origins",
        "playtime_forever": 0,
        "img_icon_url": "8cc583d72b84ae9a4026c762e130869127dd05e4",
        "img_logo_url": "c313ab7941ba8375dd17a0531b724ef94ca54dea"
      },
      {
        "appid": 500,
        "name": "Left 4 Dead",
        "playtime_forever": 804,
        "img_icon_url": "428df26bc35b09319e31b1ffb712487b20b3245c",
        "img_logo_url": "0f67ee504d8f04ecd83986dd7855821dc21f7a78",
        "has_community_visible_stats": true
      },
      {
        "appid": 550,
        "name": "Left 4 Dead 2",
        "playtime_forever": 112,
        "img_icon_url": "7d5a243f9500d2f8467312822f8af2a2928777ed",
        "img_logo_url": "205863cc21e751a576d6fff851984b3170684142",
        "has_community_visible_stats": true
      },
      {
        "appid": 223530,
        "name": "Left 4 Dead 2 Beta",
        "playtime_forever": 0,
        "img_icon_url": "",
        "img_logo_url": ""
      },
      {
        "appid": 4500,
        "name": "S.T.A.L.K.E.R.: Shadow of Chernobyl",
        "playtime_forever": 0,
        "img_icon_url": "c57f5fdde74464aed0a09c2e5dd41f8973cbee8d",
        "img_logo_url": "a4f810cb3cbfa8562493e6d9b4fa0afb9706aeb7"
      },
      {
        "appid": 4520,
        "name": "Full Spectrum Warrior",
        "playtime_forever": 0,
        "img_icon_url": "123a07859884932cd2fa5f3159fa9e001730a505",
        "img_logo_url": "0dfe63aa591499ee7028cb23de77ecd35a9074fa"
      },
      {
        "appid": 4530,
        "name": "Full Spectrum Warrior: Ten Hammers",
        "playtime_forever": 0,
        "img_icon_url": "e647427559701c2ce2907c9996ab73f213f719df",
        "img_logo_url": "62ee3e42ba14ba521a882ca991b514886b747cc7"
      },
      {
        "appid": 4540,
        "name": "Titan Quest",
        "playtime_forever": 32,
        "img_icon_url": "d59f857aed0d38c69960a9d80e3d23e0863f4e01",
        "img_logo_url": "e82186f6efe8d5d593c2fb1b57f8b1e056e6d82e",
        "has_community_visible_stats": true
      },
      {
        "appid": 4550,
        "name": "Titan Quest: Immortal Throne",
        "playtime_forever": 0,
        "img_icon_url": "e06510f40941e9ac62688d34a57c293594049274",
        "img_logo_url": "6b92b036480303ed864c4ac3d85a6700aa49c963",
        "has_community_visible_stats": true
      },
      {
        "appid": 4560,
        "name": "Company of Heroes",
        "playtime_forever": 161,
        "img_icon_url": "64946619217da497c9b29bc817bb40dd7d28c912",
        "img_logo_url": "e12e8695c6766b47a089351dd9c4531e669c2a7b"
      },
      {
        "appid": 4570,
        "name": "Warhammer 40,000: Dawn of War - Game of the Year Edition",
        "playtime_forever": 0,
        "img_icon_url": "a4c7a8cce43d797c275aaf601d6855b90ba87769",
        "img_logo_url": "2068980dca52521b069abc109f976d72ba0b1651",
        "has_community_visible_stats": true
      },
      {
        "appid": 4580,
        "name": "Warhammer 40,000: Dawn of War – Dark Crusade",
        "playtime_forever": 0,
        "img_icon_url": "584fcb6284ffd2fcf378fb3c199a9275a0a01b2d",
        "img_logo_url": "ed04f5f4ca5bd374fa09da62f583a7dbbf1d8558",
        "has_community_visible_stats": true
      },
      {
        "appid": 9310,
        "name": "Warhammer 40,000: Dawn of War – Winter Assault",
        "playtime_forever": 0,
        "img_icon_url": "60d48bf5f8a11fc4aeacb546a20cb40f537290bf",
        "img_logo_url": "88ca73c99d1a64b81a3306c690f0354a1643c1c1",
        "has_community_visible_stats": true
      },
      {
        "appid": 9340,
        "name": "Company of Heroes: Opposing Fronts",
        "playtime_forever": 0,
        "img_icon_url": "29725d719946c3e1aa4eea15d262c9fd789c1392",
        "img_logo_url": "830c99099ea2cfecfe74c41f376fc892a09dd181"
      },
      {
        "appid": 9400,
        "name": "Juiced 2: Hot Import Nights",
        "playtime_forever": 175,
        "img_icon_url": "6f26ac583d7bac966032677a7c550dcece8dec90",
        "img_logo_url": "b1b99939af3afb82ae47431993b4ba12eb8f2298"
      },
      {
        "appid": 9450,
        "name": "Warhammer 40,000: Dawn of War – Soulstorm",
        "playtime_forever": 0,
        "img_icon_url": "d13abadb0f456659a634d2cd8286665a0c76a2c6",
        "img_logo_url": "3b300beec0113261da00267121eccd8702059a88",
        "has_community_visible_stats": true
      },
      {
        "appid": 9460,
        "name": "Frontlines: Fuel of War",
        "playtime_forever": 0,
        "img_icon_url": "11c7e899769cc8827e86e1f33e94442d68d67f14",
        "img_logo_url": "ff2ec38d0f22cdf825875bf0221933dabbf5706b"
      },
      {
        "appid": 9480,
        "name": "Saints Row 2",
        "playtime_forever": 0,
        "img_icon_url": "1a0aef912300d396a67f9eda9d8b4e66c41c9891",
        "img_logo_url": "2b9558ad2e909957d66b4d8aa5e8b51eda951f69"
      },
      {
        "appid": 15620,
        "name": "Warhammer® 40,000™: Dawn of War® II",
        "playtime_forever": 0,
        "img_icon_url": "63d290e28741128c7f979d329401a6c83676ec66",
        "img_logo_url": "0a042d72a270d1a67fb42b9fc452316c01741911",
        "has_community_visible_stats": true
      },
      {
        "appid": 20500,
        "name": "Red Faction: Guerrilla Steam Edition",
        "playtime_forever": 22,
        "img_icon_url": "e7f356bc74c871f6955c9caec5d38a8d56f49490",
        "img_logo_url": "27632013243c01b01cbbc7a34184d93b08bd5f9f",
        "has_community_visible_stats": true
      },
      {
        "appid": 20530,
        "name": "Red Faction",
        "playtime_forever": 0,
        "img_icon_url": "bcf2c44a533f16f814662bdeae25e4f0d25bcd9e",
        "img_logo_url": "dcc8527d450920539a412a71aef33c25e25ac1d7"
      },
      {
        "appid": 20540,
        "name": "Company of Heroes: Tales of Valor",
        "playtime_forever": 0,
        "img_icon_url": "64946619217da497c9b29bc817bb40dd7d28c912",
        "img_logo_url": "ed0c55412acea558d025a3e238e2b7341edc5c41"
      },
      {
        "appid": 20550,
        "name": "Red Faction II",
        "playtime_forever": 0,
        "img_icon_url": "e062d37ca0ff9134ec5de34f2a4e1ec10d7203c0",
        "img_logo_url": "727dd95870e3142cfcf0e6fa4079924f173d6a3c"
      },
      {
        "appid": 228200,
        "name": "Company of Heroes (New Steam Version)",
        "playtime_forever": 0,
        "img_icon_url": "df92dc239acb3cf5d3e3eba645f3df2aaf7f91ad",
        "img_logo_url": "87aa009e93d5aa56a55d0e9056708d018ddd6483",
        "has_community_visible_stats": true
      },
      {
        "appid": 32430,
        "name": "Star Wars: The Force Unleashed Ultimate Sith Edition",
        "playtime_forever": 0,
        "img_icon_url": "1234c993cec87eefc8e44e34d382f5a55e9d34dc",
        "img_logo_url": "5a545bd2a5df4e8ff82072243ebf7beff46eb977",
        "has_community_visible_stats": true
      },
      {
        "appid": 8190,
        "name": "Just Cause 2",
        "playtime_forever": 76,
        "img_icon_url": "73582e392a2b9413fe93b011665a5b9cf26ff175",
        "img_logo_url": "26c2c027f835e968d78b212b4cc6438f692b027a",
        "has_community_visible_stats": true
      },
      {
        "appid": 24980,
        "name": "Mass Effect 2",
        "playtime_forever": 0,
        "img_icon_url": "e6f3b9b0762fd4d42a732abfc41887f6c5903a52",
        "img_logo_url": "d446fe6d77c9f434cd7fd871400b978fc01fb4e7"
      },
      {
        "appid": 32470,
        "name": "Star Wars: Empire at War Gold",
        "playtime_forever": 0,
        "img_icon_url": "2f20ce95a245469010875533f5a4e8564d188410",
        "img_logo_url": "df33c13604aaa6ca436c84d3218433e244b5b092",
        "has_community_visible_stats": true
      },
      {
        "appid": 12100,
        "name": "Grand Theft Auto III",
        "playtime_forever": 0,
        "img_icon_url": "646c4b3bc16b6726e190b7a29717c4b71f9abc7d",
        "img_logo_url": "0e73825e3abd7bfe43b55a49bbcb862aee7c2e71",
        "has_community_visible_stats": true
      },
      {
        "appid": 12110,
        "name": "Grand Theft Auto: Vice City",
        "playtime_forever": 64,
        "img_icon_url": "5f7423da14152cfbe201103ceba3112988624a98",
        "img_logo_url": "6ba37ecba052f89c72272dd28b2daa89087a7eb3",
        "has_community_visible_stats": true
      },
      {
        "appid": 12120,
        "name": "Grand Theft Auto: San Andreas",
        "playtime_forever": 0,
        "img_icon_url": "895e9391da2b8155989022d9dd95b12e09766375",
        "img_logo_url": "32e2d1d2054295603724f30c81c3cf46dc6392c0",
        "has_community_visible_stats": true
      },
      {
        "appid": 12170,
        "name": "Grand Theft Auto",
        "playtime_forever": 0,
        "img_icon_url": "05170ada07df182d63e1f341b4e97e49a6749db5",
        "img_logo_url": "7aa48bc3166266e3eadc75603229c3423ee5fb77",
        "has_community_visible_stats": true
      },
      {
        "appid": 12180,
        "name": "Grand Theft Auto 2",
        "playtime_forever": 0,
        "img_icon_url": "f88776c0d065fa4990da9a4c280e70b40593c3af",
        "img_logo_url": "2d694ee5a4f8ad23cbd20899e03481ef4a3a3c75",
        "has_community_visible_stats": true
      },
      {
        "appid": 12210,
        "name": "Grand Theft Auto IV",
        "playtime_forever": 0,
        "img_icon_url": "a3cf6a64c73f991898a9e34681d0db8226eaa191",
        "img_logo_url": "47fb2a3e0763be24e49662591d6e076c58b2178d",
        "has_community_visible_stats": true
      },
      {
        "appid": 12220,
        "name": "Grand Theft Auto: Episodes from Liberty City",
        "playtime_forever": 0,
        "img_icon_url": "603a444d9092d007f2d9640d12ebba62b1efc377",
        "img_logo_url": "40d1512d5922313878298c3731ffc066091a113a",
        "has_community_visible_stats": true
      },
      {
        "appid": 12230,
        "name": "Grand Theft Auto III",
        "playtime_forever": 0,
        "img_icon_url": "",
        "img_logo_url": "0e73825e3abd7bfe43b55a49bbcb862aee7c2e71",
        "has_community_visible_stats": true
      },
      {
        "appid": 12240,
        "name": "Grand Theft Auto: Vice City",
        "playtime_forever": 97,
        "img_icon_url": "",
        "img_logo_url": "6ba37ecba052f89c72272dd28b2daa89087a7eb3",
        "has_community_visible_stats": true
      },
      {
        "appid": 12250,
        "name": "Grand Theft Auto: San Andreas",
        "playtime_forever": 0,
        "img_icon_url": "",
        "img_logo_url": "32e2d1d2054295603724f30c81c3cf46dc6392c0",
        "has_community_visible_stats": true
      },
      {
        "appid": 28000,
        "name": "Kane & Lynch 2: Dog Days",
        "playtime_forever": 0,
        "img_icon_url": "e82911b452dd182875dc83cd03767de44f68856c",
        "img_logo_url": "793577fdb584bef7ff8880bead9818eb80b2f0a1",
        "has_community_visible_stats": true
      },
      {
        "appid": 35130,
        "name": "Lara Croft and the Guardian of Light",
        "playtime_forever": 0,
        "img_icon_url": "b06fc7740d5e2e02ffd47fec3c56f7d38534f598",
        "img_logo_url": "fb2fdfd5c7146381b137cb8591c67f6919d6d6ea",
        "has_community_visible_stats": true
      },
      {
        "appid": 32500,
        "name": "Star Wars: The Force Unleashed II",
        "playtime_forever": 0,
        "img_icon_url": "2cfd391f9a2b20d37ad11cb1673d3937c06fcda4",
        "img_logo_url": "3256757659e8d38690d382324f9f31dc64845fc8",
        "has_community_visible_stats": true
      },
      {
        "appid": 78000,
        "name": "Bejeweled 3",
        "playtime_forever": 0,
        "img_icon_url": "53d0a60a240a6795f86a1815fc994e843df4b58f",
        "img_logo_url": "7c4e103ce278e3bc50d7e7b33c4ddb8196f88817",
        "has_community_visible_stats": true
      },
      {
        "appid": 22610,
        "name": "Alien Breed: Impact",
        "playtime_forever": 37,
        "img_icon_url": "963d4d2b346f7258940a9bb9c8a5e319ec1bc781",
        "img_logo_url": "fcf02acbd58c5a7ee29f15df2e849054d1f3a021",
        "has_community_visible_stats": true
      },
      {
        "appid": 22650,
        "name": "Alien Breed 2: Assault",
        "playtime_forever": 0,
        "img_icon_url": "a10e00aa5fc77cc14deb38f7da48e5da40b18503",
        "img_logo_url": "57b8df3a30a02c1a013fa6301563dcc2e941ef11",
        "has_community_visible_stats": true
      },
      {
        "appid": 22670,
        "name": "Alien Breed 3: Descent",
        "playtime_forever": 0,
        "img_icon_url": "276d9c54a181c2baf809c53c6172a5475866e693",
        "img_logo_url": "6bd254a867864ef8b4e6d2b979547e9c67d669a3",
        "has_community_visible_stats": true
      },
      {
        "appid": 21100,
        "name": "F.E.A.R. 3",
        "playtime_forever": 0,
        "img_icon_url": "01b73115a3ff7315d14f0bcf7beff01ef76162b4",
        "img_logo_url": "d2fcf83ec76e845ed19f4ff8324304e2981af391",
        "has_community_visible_stats": true
      },
      {
        "appid": 95300,
        "name": "Capsized",
        "playtime_forever": 0,
        "img_icon_url": "d89b6b69c1b57bae98710d574698ffbc4445e68d",
        "img_logo_url": "4ed97f9c05ae4e0351dd5191f907adf5ddb1d356",
        "has_community_visible_stats": true
      },
      {
        "appid": 44340,
        "name": "Operation Flashpoint: Red River",
        "playtime_forever": 0,
        "img_icon_url": "f66dd400734a6c0be674b6086059073db94af4f7",
        "img_logo_url": "c2321e427db6dc9f2d3c80c285cd7a8cc98272ac"
      },
      {
        "appid": 620,
        "name": "Portal 2",
        "playtime_forever": 0,
        "img_icon_url": "2e478fc6874d06ae5baf0d147f6f21203291aa02",
        "img_logo_url": "d2a1119ddc202fab81d9b87048f495cbd6377502",
        "has_community_visible_stats": true
      },
      {
        "appid": 98200,
        "name": "Frozen Synapse",
        "playtime_forever": 19,
        "img_icon_url": "646297e1b481ae0e57c4597452fb45ff9ce16989",
        "img_logo_url": "3b20447980b019783a4e37893660d1ce54893699",
        "has_community_visible_stats": true
      },
      {
        "appid": 7760,
        "name": "X-COM: UFO Defense",
        "playtime_forever": 34,
        "img_icon_url": "7d0f9be3db221de0795ade38ae2d27530314f465",
        "img_logo_url": "4449650c699b0f876be9968735e66d719e714f5a"
      },
      {
        "appid": 21090,
        "name": "F.E.A.R.",
        "playtime_forever": 0,
        "img_icon_url": "71f118282be5aaa34eb82506593130ecfcc6a90b",
        "img_logo_url": "df122e0ee9eb2a5371910ffda0f8a3382e09232e"
      },
      {
        "appid": 21110,
        "name": "F.E.A.R.: Extraction Point",
        "playtime_forever": 0,
        "img_icon_url": "153d4f89ef0bd59a0039c396ff963a31d4d5e71b",
        "img_logo_url": "df122e0ee9eb2a5371910ffda0f8a3382e09232e"
      },
      {
        "appid": 21120,
        "name": "F.E.A.R.: Perseus Mandate",
        "playtime_forever": 0,
        "img_icon_url": "7b1d0271f2735ca66e1cb681eb4da1a7c985d53f",
        "img_logo_url": "df122e0ee9eb2a5371910ffda0f8a3382e09232e"
      },
      {
        "appid": 16450,
        "name": "F.E.A.R. 2: Project Origin",
        "playtime_forever": 0,
        "img_icon_url": "6611d8b01c7a2cc3538c478c044d1e09f3140eaa",
        "img_logo_url": "41734347c3f05fe7dd797570130f5069c08f9d1b"
      },
      {
        "appid": 97000,
        "name": "Solar 2",
        "playtime_forever": 44,
        "img_icon_url": "35753e134e2ad6fd3ff288b5ef721051d5558005",
        "img_logo_url": "84c08604a715af02172b79c1f2a7563d51a2cd96",
        "has_community_visible_stats": true
      },
      {
        "appid": 49600,
        "name": "Beat Hazard",
        "playtime_forever": 0,
        "img_icon_url": "2eec97f6dc441691097d3e14f39e2550059b90ee",
        "img_logo_url": "3e31b151706448a72eb55d88d2e99e0d0cd18ec3",
        "has_community_visible_stats": true
      },
      {
        "appid": 44200,
        "name": "Galcon Fusion",
        "playtime_forever": 0,
        "img_icon_url": "a4de13aa82964fe761be40f1525595780be32f10",
        "img_logo_url": "664563d2b8c2d2fb66d8ab183d8689eb58073274",
        "has_community_visible_stats": true
      },
      {
        "appid": 41210,
        "name": "Eufloria",
        "playtime_forever": 0,
        "img_icon_url": "35d1e6feb7adb783b629ec24bff503cbf5c66d47",
        "img_logo_url": "49cb5913b7fafddca5138d7db58d3c7c821a441f",
        "has_community_visible_stats": true
      },
      {
        "appid": 221180,
        "name": "Eufloria HD",
        "playtime_forever": 0,
        "img_icon_url": "acb7c5ca4c4b91ed8c161e695e9f2a0ac042cf4a",
        "img_logo_url": "85c4b38c5306f85d33dbcd1b74caf9ad31613b44",
        "has_community_visible_stats": true
      },
      {
        "appid": 33440,
        "name": "Driver San Francisco",
        "playtime_forever": 10,
        "img_icon_url": "51bf6ce549a81619823bea5197a41783be7799cf",
        "img_logo_url": "e268b6988157b317c3992d20727a0dfa38678cb2"
      },
      {
        "appid": 50130,
        "name": "Mafia II",
        "playtime_forever": 0,
        "img_icon_url": "62f1f7324e520be067aec1ab06d1ec6fa56f25bd",
        "img_logo_url": "31c60ba32d7ff5b53b5d2a5795b42077279f499a",
        "has_community_visible_stats": true
      },
      {
        "appid": 32800,
        "name": "The Lord of the Rings: War in the North",
        "playtime_forever": 0,
        "img_icon_url": "56dcf3fe99a90c25daae1cbe84319bb8af3c6ac5",
        "img_logo_url": "b90d899806ebaff87ed7d2cdc4d9e0a3f11b73b0",
        "has_community_visible_stats": true
      },
      {
        "appid": 6910,
        "name": "Deus Ex: Game of the Year Edition",
        "playtime_forever": 0,
        "img_icon_url": "03c8e5e89d83c536b44798e77ead5d813103991f",
        "img_logo_url": "4b9b2932405def5c3b4053e0b801b01d04965bf6"
      },
      {
        "appid": 70600,
        "name": "Worms Ultimate Mayhem",
        "playtime_forever": 0,
        "img_icon_url": "7caa0768906381efd8ad6381cfae8385647d6323",
        "img_logo_url": "4b64c3a7293e02213417687a381763c7dd4e1ec1",
        "has_community_visible_stats": true
      },
      {
        "appid": 63000,
        "name": "HOARD",
        "playtime_forever": 0,
        "img_icon_url": "8ee1c07fe6f7c5d432a498420286331589ce4617",
        "img_logo_url": "5f25e8a8b1e498bdc33efdb4ea35a44b09ffe844",
        "has_community_visible_stats": true
      },
      {
        "appid": 102840,
        "name": "Shank 2",
        "playtime_forever": 0,
        "img_icon_url": "6f916b594b1056789013a3e210cdc89a5245cd6d",
        "img_logo_url": "eec11d103112f36876bd746854d6e8f130ea6078",
        "has_community_visible_stats": true
      },
      {
        "appid": 55230,
        "name": "Saints Row: The Third",
        "playtime_forever": 0,
        "img_icon_url": "ec83645f13643999e7c91da75d418053d6b56529",
        "img_logo_url": "1129528455a8b297fb6404cbb90e802a62881b11",
        "has_community_visible_stats": true
      },
      {
        "appid": 70620,
        "name": "Worms Crazy Golf",
        "playtime_forever": 0,
        "img_icon_url": "9a8c5e040b57d720ce15259053bcfad246a469fc",
        "img_logo_url": "e73b1bdb6867c477fb13a8eebc033c41dec5ee4b",
        "has_community_visible_stats": true
      },
      {
        "appid": 70660,
        "name": "Worms Pinball",
        "playtime_forever": 0,
        "img_icon_url": "49db762d97583d351d208db2567a2112e4bb5646",
        "img_logo_url": "232b3ba8ed3ab029f825eaf121762fd259db5e72"
      },
      {
        "appid": 70650,
        "name": "Worms Blast",
        "playtime_forever": 0,
        "img_icon_url": "b5f9ddaec3f6ee7c857b5eea863ea33e2edb3bab",
        "img_logo_url": "cd5af38fbad34ee8fa15dd3dcc98c14a0ac830d2"
      },
      {
        "appid": 41070,
        "name": "Serious Sam 3: BFE",
        "playtime_forever": 0,
        "img_icon_url": "2e7a17d4b345ffb13ef3d9e39257c2659fe4a86b",
        "img_logo_url": "cc3a3c30187b5fbbd0a8861ad08b4f7d779ba239",
        "has_community_visible_stats": true
      },
      {
        "appid": 61310,
        "name": "Fractal: Make Blooms Not War",
        "playtime_forever": 1,
        "img_icon_url": "f075ed949a760da0097759274517c3fdc5676d0b",
        "img_logo_url": "6d65a8b7b27e2d3c175366c2b770f1361a6b686a"
      },
      {
        "appid": 202730,
        "name": "Dynamite Jack",
        "playtime_forever": 0,
        "img_icon_url": "501c3c0955248589c694567ac238ac63a634f625",
        "img_logo_url": "6ef5da8f6b3ebee850ebd9997e7bea19f59c928e",
        "has_community_visible_stats": true
      },
      {
        "appid": 203810,
        "name": "Dear Esther",
        "playtime_forever": 0,
        "img_icon_url": "f1ff3d3ea4499d02ea72971ff0d77456a1908fad",
        "img_logo_url": "39f2f2baf454fabdd8a6161e9353ebd9ee335ed2",
        "has_community_visible_stats": true
      },
      {
        "appid": 6120,
        "name": "Shank",
        "playtime_forever": 50,
        "img_icon_url": "936571702a9ed84a6c267003b3f5b26df9ae830d",
        "img_logo_url": "b5938715bdb8479a24b3fc6b5c74936d160a5878",
        "has_community_visible_stats": true
      },
      {
        "appid": 40800,
        "name": "Super Meat Boy",
        "playtime_forever": 44,
        "img_icon_url": "64eec20c9375e7473b964f0d0bc41d19f03add3b",
        "img_logo_url": "70f084857297d5fdd96d019db3a990d6d9ec64f1",
        "has_community_visible_stats": true
      },
      {
        "appid": 63710,
        "name": "BIT.TRIP RUNNER",
        "playtime_forever": 817,
        "img_icon_url": "a208835fd59b0c549ab848303ddb1dfa142045fa",
        "img_logo_url": "13cdddc55559cd4f47fbe970c9ad0de6bebb2f21",
        "has_community_visible_stats": true
      },
      {
        "appid": 94200,
        "name": "Jamestown",
        "playtime_forever": 47,
        "img_icon_url": "fc71d80266e726c2ddd946fea19b386947bf679c",
        "img_logo_url": "7a4178ca9546cef28ebb78c5889a01181c2b4e93",
        "has_community_visible_stats": true
      },
      {
        "appid": 99700,
        "name": "NightSky",
        "playtime_forever": 0,
        "img_icon_url": "9a7b3f61a0c8ba8ac717aa4845343b66cc60ce90",
        "img_logo_url": "b86dc9596e72add75073d01c2e8452da87a0240e",
        "has_community_visible_stats": true
      },
      {
        "appid": 41800,
        "name": "Gratuitous Space Battles",
        "playtime_forever": 24,
        "img_icon_url": "c9dd42b84a380a4f002bbb56aab8a7a91d664fa1",
        "img_logo_url": "d77409d24f8d41331ccbe0efef2582c9703b56bc"
      },
      {
        "appid": 200900,
        "name": "Cave Story+",
        "playtime_forever": 73,
        "img_icon_url": "076431cdb43f9a04364076bf13f7010d8d2e0670",
        "img_logo_url": "a242e0465a65ffafbf75eeb521812fb575990a33",
        "has_community_visible_stats": true
      },
      {
        "appid": 18700,
        "name": "And Yet It Moves",
        "playtime_forever": 56,
        "img_icon_url": "594bca683a74677e7eba64b93d6b0277100e5202",
        "img_logo_url": "181003daaa94da1fb275727587b970324a868c40",
        "has_community_visible_stats": true
      },
      {
        "appid": 26500,
        "name": "Cogs",
        "playtime_forever": 13,
        "img_icon_url": "79586b14e3c64d447a3dbb6e18369636b9b5dfb0",
        "img_logo_url": "db01e5e8973e4a9590f1423b9c7c2199d7cb0186",
        "has_community_visible_stats": true
      },
      {
        "appid": 26900,
        "name": "Crayon Physics Deluxe",
        "playtime_forever": 0,
        "img_icon_url": "06308f69919438a41b62f0525ebb6d6f537f9128",
        "img_logo_url": "c1d7c6248392fae24328cb2f2e307c636b831202"
      },
      {
        "appid": 41100,
        "name": "Hammerfight",
        "playtime_forever": 0,
        "img_icon_url": "17452d643b4cd903618ed00fb943f66bbd3fcbb6",
        "img_logo_url": "d157763946f91bf65cf853dc480a2a6e34819c47"
      },
      {
        "appid": 70300,
        "name": "VVVVVV",
        "playtime_forever": 0,
        "img_icon_url": "28c3dfe9f29b7933226aa5be2c7d2de61ee4f578",
        "img_logo_url": "3d362d64d51ce524f12c853290ca6cce5761ff1c",
        "has_community_visible_stats": true
      },
      {
        "appid": 67370,
        "name": "The Darkness II",
        "playtime_forever": 0,
        "img_icon_url": "6ca6291fe216a8cc5c56f01b1e7f83e396a8fa81",
        "img_logo_url": "349189b0ac9570679227cb1bd2c742bec12bf97a",
        "has_community_visible_stats": true
      },
      {
        "appid": 7730,
        "name": "X-COM: Interceptor",
        "playtime_forever": 0,
        "img_icon_url": "56596b43115ff3ce8e7e464fc1281f709f15e6d5",
        "img_logo_url": "4df564f8463f552f2746b209e29935684b0c1270"
      },
      {
        "appid": 29180,
        "name": "Osmos",
        "playtime_forever": 32,
        "img_icon_url": "1ef1227747d1a46aa8c51b1e6592551e3cf78b29",
        "img_logo_url": "d14a2097cad1a45fdb6eca2c22cc31d8dd133705",
        "has_community_visible_stats": true
      },
      {
        "appid": 38740,
        "name": "EDGE",
        "playtime_forever": 10,
        "img_icon_url": "a80d29a04b9c8bbd4762e9cb265784fa18a085ae",
        "img_logo_url": "9c86ad3f647def777dc7072d72f4081b006b4844",
        "has_community_visible_stats": true
      },
      {
        "appid": 91200,
        "name": "Anomaly Warzone Earth",
        "playtime_forever": 5,
        "img_icon_url": "8b8010ddbc76c7a445648f89162f453ea7e1e101",
        "img_logo_url": "9b71353b7e93eb3c82ca5f35d4d7241c8f545a07",
        "has_community_visible_stats": true
      },
      {
        "appid": 22000,
        "name": "World of Goo",
        "playtime_forever": 6,
        "img_icon_url": "fce27346192c28e854b7381f160bd19ae645f62f",
        "img_logo_url": "d2a60cb23c6743862af40267817099b08602ee92",
        "has_community_visible_stats": true
      },
      {
        "appid": 38700,
        "name": "Toki Tori",
        "playtime_forever": 0,
        "img_icon_url": "71adfce6503f6a73c094d0dbab17aaa719691d95",
        "img_logo_url": "7840e49fc48b78295983973d0d2158d020fa5f75",
        "has_community_visible_stats": true
      },
      {
        "appid": 6860,
        "name": "Hitman: Blood Money",
        "playtime_forever": 0,
        "img_icon_url": "c8f46248ca288cf332f170a954ffafff2c122131",
        "img_logo_url": "e67a1e905379399095d5dd509e1e58be3e4889b3"
      },
      {
        "appid": 35000,
        "name": "Mini Ninjas",
        "playtime_forever": 0,
        "img_icon_url": "02f702c604e0692b8185f1b0e94e013d0a242d3a",
        "img_logo_url": "5da10ac68dbbe1e253d9aca64c4a341ed080eeaa"
      },
      {
        "appid": 207170,
        "name": "Legend of Grimrock",
        "playtime_forever": 0,
        "img_icon_url": "c10a0441101d642bc5e59d2a6c9bb14bce7daaa5",
        "img_logo_url": "5898cd32c949e03f95a5333c2399508b1a95aa4a",
        "has_community_visible_stats": true
      },
      {
        "appid": 207570,
        "name": "English Country Tune",
        "playtime_forever": 0,
        "img_icon_url": "050fff353212159607331411d67c8bbcfd47c682",
        "img_logo_url": "eb960b8e42669cdf36b19536230a5ffbdea0b96f",
        "has_community_visible_stats": true
      },
      {
        "appid": 207650,
        "name": "A Virus Named TOM",
        "playtime_forever": 0,
        "img_icon_url": "2bbbd2a7bfe9d85c568f652f2396dc8e468b2abb",
        "img_logo_url": "d6491d7919f9da534d1695e6cde5c69fc5f0ec0c",
        "has_community_visible_stats": true
      },
      {
        "appid": 102600,
        "name": "Orcs Must Die!",
        "playtime_forever": 0,
        "img_icon_url": "0d14a70abb580146741de26bbad46d0ad81a67c7",
        "img_logo_url": "9b79e98212c10141aac10471be1c5efa9786bad8",
        "has_community_visible_stats": true
      },
      {
        "appid": 61600,
        "name": "Zen Bound® 2",
        "playtime_forever": 0,
        "img_icon_url": "b47885f7892396032dfb2906bce89ac0ce458e8a",
        "img_logo_url": "bde7fad7a2427df529dc7ec34dca9520444afb6c",
        "has_community_visible_stats": true
      },
      {
        "appid": 111100,
        "name": "Snuggle Truck",
        "playtime_forever": 24,
        "img_icon_url": "30da4da336389c4f4fa382d1acd7d9eee3bef825",
        "img_logo_url": "8344f6eeb3fb971ae1574de5aa9efb3234694f84",
        "has_community_visible_stats": true
      },
      {
        "appid": 112100,
        "name": "Avadon: The Black Fortress",
        "playtime_forever": 0,
        "img_icon_url": "25e92c3367d18079b171b65fc473dbbd1d4847d4",
        "img_logo_url": "26f6cd7f9574c8a14b454ed9a927b511e3435925",
        "has_community_visible_stats": true
      },
      {
        "appid": 63500,
        "name": "Swords and Soldiers HD",
        "playtime_forever": 0,
        "img_icon_url": "77301d7df269837401e0ab7e82af9e4250be4a43",
        "img_logo_url": "0e5a29f1eed738fbcba95b773a596e50bba6c768",
        "has_community_visible_stats": true
      },
      {
        "appid": 208580,
        "name": "STAR WARS™ Knights of the Old Republic™ II: The Sith Lords™",
        "playtime_forever": 0,
        "img_icon_url": "8dfa2008b9f04a54217c74f0232ef78607127b27",
        "img_logo_url": "8ea9e31137c047943fef4979ca36ee3ab562b1da",
        "has_community_visible_stats": true
      },
      {
        "appid": 201700,
        "name": "DiRT Showdown",
        "playtime_forever": 0,
        "img_icon_url": "cc23d301fb2dcd0fcb1c442ff26ccef79fb891da",
        "img_logo_url": "531aad068bd1950bfff9c3f92cf908b58c507d89",
        "has_community_visible_stats": true
      },
      {
        "appid": 6920,
        "name": "Deus Ex: Invisible War",
        "playtime_forever": 0,
        "img_icon_url": "8feb3c4e692882dbd1f30f3a8bfe89b9928c68c1",
        "img_logo_url": "ac3aa418680fb52a05f8d91c79ac3f86fea11732"
      },
      {
        "appid": 6870,
        "name": "Battlestations: Midway",
        "playtime_forever": 0,
        "img_icon_url": "2ff65a5c9e0b8cf26fbb98697783feedf79aa850",
        "img_logo_url": "c76d364ce505cd3d56f563f974076a3d73f897e0"
      },
      {
        "appid": 6900,
        "name": "Hitman: Codename 47",
        "playtime_forever": 0,
        "img_icon_url": "e70bdfd4711b79b67d7e7f7cb0fda9bef539254a",
        "img_logo_url": "093e9f48d3f11c6fee729cfc50a13fc89488fd11"
      },
      {
        "appid": 6880,
        "name": "Just Cause",
        "playtime_forever": 40,
        "img_icon_url": "aeaef41cac61d12ef93cf5eddc86859b1f0c73fa",
        "img_logo_url": "60d726f5e078a6da168414cf45b8619973f6d69c"
      },
      {
        "appid": 211600,
        "name": "Thief Gold",
        "playtime_forever": 0,
        "img_icon_url": "70d127f48cd8a1bc6e3cddfdf14b791f45b5f086",
        "img_logo_url": "c78db2a09012e4af5696249d3bf07b6187836655"
      },
      {
        "appid": 50300,
        "name": "Spec Ops: The Line",
        "playtime_forever": 0,
        "img_icon_url": "55ae859a90d61c08f18ed3aa0ee2579169d2c2bf",
        "img_logo_url": "e449c7dc5a9861cf94476de1b394640f3866ddda",
        "has_community_visible_stats": true
      },
      {
        "appid": 205350,
        "name": "Mortal Kombat Kollection",
        "playtime_forever": 0,
        "img_icon_url": "048e463386c8f0049d6e08bbf8f5ebb5d232394f",
        "img_logo_url": "44281a64a93a583fdd2435036ac794e7dcc7beb8",
        "has_community_visible_stats": true
      },
      {
        "appid": 205530,
        "name": "Gratuitous Tank Battles",
        "playtime_forever": 0,
        "img_icon_url": "90a60a6f5d6fdb151e1cfeaf49cddca40726f4ea",
        "img_logo_url": "3ffeb775c8c323402dacf51d4eba925d23e15e03",
        "has_community_visible_stats": true
      },
      {
        "appid": 7670,
        "name": "BioShock",
        "playtime_forever": 47,
        "img_icon_url": "9a7c9f640a76e6a32592277dbbc36a0f6da05372",
        "img_logo_url": "4c2a7f97e6556a95319eb346aed7beff9fe0535c",
        "has_community_visible_stats": true
      },
      {
        "appid": 211360,
        "name": "Offspring Fling!",
        "playtime_forever": 0,
        "img_icon_url": "7b8986d52c8cd691449683c3fc4ccca141f8922e",
        "img_logo_url": "109f59a841a271e4f97175c0ef56ce6809d93fdc",
        "has_community_visible_stats": true
      },
      {
        "appid": 32370,
        "name": "Star Wars: Knights of the Old Republic",
        "playtime_forever": 0,
        "img_icon_url": "ae88c78ce133d20b4644cad7a60414d4c488aa1c",
        "img_logo_url": "1ff50dc1426313a63c1209bb338682c8185e0396",
        "has_community_visible_stats": true
      },
      {
        "appid": 7660,
        "name": "X-COM: Apocalypse",
        "playtime_forever": 0,
        "img_icon_url": "7d0f9be3db221de0795ade38ae2d27530314f465",
        "img_logo_url": "4923dd4eb4543002e32a0a0b9fc91b131c908c49"
      },
      {
        "appid": 7770,
        "name": "X-COM: Enforcer",
        "playtime_forever": 0,
        "img_icon_url": "7d0f9be3db221de0795ade38ae2d27530314f465",
        "img_logo_url": "243a13984cf8c2a9ac67ca2139c488e4af455ae2"
      },
      {
        "appid": 7650,
        "name": "X-COM: Terror from the Deep",
        "playtime_forever": 0,
        "img_icon_url": "821a3d898b1f90adb4290ee8bd1988a7c79a3d80",
        "img_logo_url": "a6a66cdc8f2f59fd3b7fab14cb7930cbbc21f311"
      },
      {
        "appid": 200260,
        "name": "Batman: Arkham City GOTY",
        "playtime_forever": 0,
        "img_icon_url": "746ecf3ce44b2525eb7ad643e76a3b60913d2662",
        "img_logo_url": "9b229e12fd5ce27bd101d5862c19b1a6e3d01239",
        "has_community_visible_stats": true
      },
      {
        "appid": 212680,
        "name": "FTL: Faster Than Light",
        "playtime_forever": 0,
        "img_icon_url": "e8770ddb95fde0804694b116dfe3479f5a65900d",
        "img_logo_url": "975193db5ca8cc2a4c969cea8f80d93157264ec1"
      },
      {
        "appid": 3830,
        "name": "Psychonauts",
        "playtime_forever": 8,
        "img_icon_url": "460b6471db7d83ee6943c1a87f7a9f2898634952",
        "img_logo_url": "b361ab26b2c47d4abd11be0ebd3d6b675512ec1b",
        "has_community_visible_stats": true
      },
      {
        "appid": 48000,
        "name": "LIMBO",
        "playtime_forever": 14,
        "img_icon_url": "463f57855017564301b17050fba73804b3bd86d6",
        "img_logo_url": "9f35c3d64649a5a03b69d6a9218b1f77caf15025",
        "has_community_visible_stats": true
      },
      {
        "appid": 57300,
        "name": "Amnesia: The Dark Descent",
        "playtime_forever": 51,
        "img_icon_url": "2c08de657a8b273eeb55bb5bf674605ca023e381",
        "img_logo_url": "75b8a82acfb05abda97977ac4eb5af20e0dcf01e"
      },
      {
        "appid": 204060,
        "name": "Superbrothers: Sword & Sworcery EP",
        "playtime_forever": 0,
        "img_icon_url": "0c484d2181a32b89e3675b4f8965c62558418646",
        "img_logo_url": "b522ef5ae83648bef02bd3303801aed881d17761",
        "has_community_visible_stats": true
      },
      {
        "appid": 107100,
        "name": "Bastion",
        "playtime_forever": 0,
        "img_icon_url": "8377b4460f19465c261673f76f2656bdb3288273",
        "img_logo_url": "d113d66ef88069d7d35a74cfaf2e2ee917f61133",
        "has_community_visible_stats": true
      },
      {
        "appid": 200390,
        "name": "Oil Rush",
        "playtime_forever": 0,
        "img_icon_url": "e05fd158f61dd196822222ce77d3d847ff5aaf73",
        "img_logo_url": "ec58f4b09ffbe30810e511ea6d609ae2c3dd96c8",
        "has_community_visible_stats": true
      },
      {
        "appid": 207080,
        "name": "Indie Game: The Movie",
        "playtime_forever": 0,
        "img_icon_url": "1d29a72931dc845cf9ec7a04501fe40a7ed57dd1",
        "img_logo_url": "f2c3f3e7104ad6d8719c2698406c79efe6de41e7",
        "has_community_visible_stats": true
      },
      {
        "appid": 26800,
        "name": "Braid",
        "playtime_forever": 0,
        "img_icon_url": "1468d086e684d6a3067bd4bdc63f699fc0aede3d",
        "img_logo_url": "dc76bb847fbb82ca81e122927541398d41638ac8",
        "has_community_visible_stats": true
      },
      {
        "appid": 209830,
        "name": "Lone Survivor: The Director's Cut",
        "playtime_forever": 0,
        "img_icon_url": "67dc6dd4cfa936460c5e6b1069621eb4918c009e",
        "img_logo_url": "14171f54fd558e9ae53c19018b9f5d67465bad21"
      },
      {
        "appid": 12750,
        "name": "GRID",
        "playtime_forever": 0,
        "img_icon_url": "c9367af908a9527040b41f6323aee4507bcba722",
        "img_logo_url": "4d703d465e6e83f272ff07b3b9636fe52f2e9a19"
      },
      {
        "appid": 11590,
        "name": "Hospital Tycoon",
        "playtime_forever": 0,
        "img_icon_url": "b1810df56eabad54637c937d079627fe140865db",
        "img_logo_url": "9cd2384a1fca7df258ed889d956ed4178984b24d"
      },
      {
        "appid": 12830,
        "name": "Operation Flashpoint: Dragon Rising",
        "playtime_forever": 0,
        "img_icon_url": "ee4443a4f7619cf1118ec5b4ca5c191370d662f6",
        "img_logo_url": "f3b280a927511a7ff71041cf99e494ae0dd5572b"
      },
      {
        "appid": 12810,
        "name": "Overlord II",
        "playtime_forever": 0,
        "img_icon_url": "cc38122745bd44454e7e122e86023fb35e652d9d",
        "img_logo_url": "7107ed1429c4be7637571fdf262f61af6bc7d4a2"
      },
      {
        "appid": 12770,
        "name": "Rise of the Argonauts",
        "playtime_forever": 0,
        "img_icon_url": "73d9b642364286a510c6a1b2457064a8884634ed",
        "img_logo_url": "610e14ba8087dcb41cf2ad6f60e3cddd43ae9088"
      },
      {
        "appid": 209790,
        "name": "Splice",
        "playtime_forever": 0,
        "img_icon_url": "9249e556bad96d4bb43a295fbaac60d0aa76ef7d",
        "img_logo_url": "ee5c6cca66ce1f897bbc6b23fd8982a5b59c2621",
        "has_community_visible_stats": true
      },
      {
        "appid": 205910,
        "name": "Tiny and Big: Grandpa's Leftovers",
        "playtime_forever": 0,
        "img_icon_url": "eac569bb84b1f8459d4203e3ad3e00a70514d3b4",
        "img_logo_url": "794f54ce125b1528293c521c99924e749cc3e394",
        "has_community_visible_stats": true
      },
      {
        "appid": 17710,
        "name": "Nuclear Dawn",
        "playtime_forever": 0,
        "img_icon_url": "77c685357c1fb6b0127bce460b4c4ad40ee5ee33",
        "img_logo_url": "05786499d3c7b3ed842936f29bbc3b753664936d",
        "has_community_visible_stats": true
      },
      {
        "appid": 4700,
        "name": "Medieval II: Total War",
        "playtime_forever": 0,
        "img_icon_url": "cc9c44b2c3b3b245b82d13c316a9b238705ff877",
        "img_logo_url": "fcd1abd6380998e473b92690e28a9fe0a1a27b8d"
      },
      {
        "appid": 4760,
        "name": "Rome: Total War",
        "playtime_forever": 0,
        "img_icon_url": "5dc68565149dc971af6428157bcb600d80690080",
        "img_logo_url": "134817933edf4f8d0665d456889c0315c416fff2"
      },
      {
        "appid": 4770,
        "name": "Rome: Total War - Alexander",
        "playtime_forever": 0,
        "img_icon_url": "609a824446a556878febbc3aa0be7d1f9b92a4fb",
        "img_logo_url": "de46cc6041545762ad8b45a1bebd2320ba8cb356"
      },
      {
        "appid": 10500,
        "name": "Empire: Total War",
        "playtime_forever": 0,
        "img_icon_url": "dc10f7bad53d3d922c196d116b1c5d6a4b274768",
        "img_logo_url": "d60c77df97439e8434f0d0be9c3e2d9f39699991",
        "has_community_visible_stats": true
      },
      {
        "appid": 10680,
        "name": "Aliens vs. Predator",
        "playtime_forever": 0,
        "img_icon_url": "673dbdae48b77aaff38cd48a87607548e21220de",
        "img_logo_url": "1d5e92c757e200c8745f010c6fee39d470ff110c",
        "has_community_visible_stats": true
      },
      {
        "appid": 34030,
        "name": "Napoleon: Total War",
        "playtime_forever": 0,
        "img_icon_url": "e6263fa77b39b3b83db00d089aed8dc0aac11b20",
        "img_logo_url": "eca670df2bb35587996bfb4da6a45a8985ace139",
        "has_community_visible_stats": true
      },
      {
        "appid": 34270,
        "name": "SEGA Genesis & Mega Drive Classics",
        "playtime_forever": 0,
        "img_icon_url": "48a187fa87c58b798646a430d446dd36eeabd1a4",
        "img_logo_url": "212f55b3ea1a8c70427890896e93a37b49f57187",
        "has_community_visible_stats": true
      },
      {
        "appid": 34330,
        "name": "Total War: SHOGUN 2",
        "playtime_forever": 0,
        "img_icon_url": "2fa97296a62daf0329b3867ad6837a2289229fbb",
        "img_logo_url": "c6f6e87e742a2e40689486423e8320bd318e3ec7",
        "has_community_visible_stats": true
      },
      {
        "appid": 71340,
        "name": "Sonic Generations",
        "playtime_forever": 0,
        "img_icon_url": "efda039147f0968bc726c547ff3809f98b69964a",
        "img_logo_url": "21ec1e24c31a50500bbddb8c8c8add451e6dcbe1",
        "has_community_visible_stats": true
      },
      {
        "appid": 99300,
        "name": "Renegade Ops",
        "playtime_forever": 0,
        "img_icon_url": "def6f08f177180ab15bbf7c90ba8d323159ecd7d",
        "img_logo_url": "6535ea9cf634e38142113b7c0ede148355f110df",
        "has_community_visible_stats": true
      },
      {
        "appid": 203750,
        "name": "Binary Domain",
        "playtime_forever": 0,
        "img_icon_url": "14de291b4d113c03ba76111b22e697a4d220d840",
        "img_logo_url": "101cf86ad6b8d8ce6328c373d23b0b09318b5a1f",
        "has_community_visible_stats": true
      },
      {
        "appid": 35140,
        "name": "Batman: Arkham Asylum GOTY Edition",
        "playtime_forever": 0,
        "img_icon_url": "e52f91ecb0d3f20263e96fe188de1bcc8c91643e",
        "img_logo_url": "172e0928b845c18491f1a8fee0dafe7a146ac129",
        "has_community_visible_stats": true
      },
      {
        "appid": 113200,
        "name": "The Binding of Isaac",
        "playtime_forever": 0,
        "img_icon_url": "383cf045ca20625db18f68ef5e95169012118b9e",
        "img_logo_url": "d9a7ee7e07dffed1700cb8b3b9482105b88cc5b5",
        "has_community_visible_stats": true
      },
      {
        "appid": 204300,
        "name": "Awesomenauts",
        "playtime_forever": 0,
        "img_icon_url": "4996933171d0804bd0ceb7b9a0e224b3139d18ba",
        "img_logo_url": "a2eba6157703c60bfcc199f06df5f1568c9835bb",
        "has_community_visible_stats": true
      },
      {
        "appid": 217200,
        "name": "Worms Armageddon",
        "playtime_forever": 0,
        "img_icon_url": "68c6d17bde9c578d91dd1e207b58eb4d8308ce40",
        "img_logo_url": "f91dbe41a0e36e34e5289854ada4229b77ece582",
        "has_community_visible_stats": true
      },
      {
        "appid": 730,
        "name": "Counter-Strike: Global Offensive",
        "playtime_forever": 152,
        "img_icon_url": "69f7ebe2735c366c65c0b33dae00e12dc40edbe4",
        "img_logo_url": "d0595ff02f5c79fd19b06f4d6165c3fda2372820",
        "has_community_visible_stats": true
      },
      {
        "appid": 204220,
        "name": "Snapshot",
        "playtime_forever": 0,
        "img_icon_url": "322122b6f0560b73c5c36ff5009907d8087fd146",
        "img_logo_url": "5e0f448c6fa62e33c8142d2738690b4bc55bed19",
        "has_community_visible_stats": true
      },
      {
        "appid": 218040,
        "name": "Democracy 2",
        "playtime_forever": 0,
        "img_icon_url": "d4f00b0d93ea2e66a0636ae3453b26135124de67",
        "img_logo_url": "e55ab1b4db7d33ef9274652f358c7ce79b502024"
      },
      {
        "appid": 202170,
        "name": "Sleeping Dogs™",
        "playtime_forever": 215,
        "img_icon_url": "3d70bfb50bc3a162685e6775c4da2d336d1ba1ea",
        "img_logo_url": "5be5f629e44cc13b7a845deacf81c93f92678e55",
        "has_community_visible_stats": true
      },
      {
        "appid": 63700,
        "name": "BIT.TRIP BEAT",
        "playtime_forever": 83,
        "img_icon_url": "f35ab587d22fb122c87579fa973a899ecebfde8e",
        "img_logo_url": "86e3cdec2b272f630385b89c7b2bba3ff422c421",
        "has_community_visible_stats": true
      },
      {
        "appid": 92800,
        "name": "SpaceChem",
        "playtime_forever": 0,
        "img_icon_url": "29b26fc0eb22ebbeeeed1e4658dcbc6b837279c7",
        "img_logo_url": "5ffbf030cd3e3af293e0509df7be6f9b2a159ca8",
        "has_community_visible_stats": true
      },
      {
        "appid": 209690,
        "name": "Fieldrunners",
        "playtime_forever": 0,
        "img_icon_url": "734bc6549b22acd77c59ed6508ebe701899a5fe1",
        "img_logo_url": "0261c53f4b143b7e6b3b214f631dee9e93fc34b0",
        "has_community_visible_stats": true
      },
      {
        "appid": 210170,
        "name": "Spirits",
        "playtime_forever": 23,
        "img_icon_url": "c7fde525c868a409f1d632bea9f0ecd5ea2c92cc",
        "img_logo_url": "f1d5f3a373420b9645f9cd6da5acd5292639c8eb",
        "has_community_visible_stats": true
      },
      {
        "appid": 11450,
        "name": "Overlord",
        "playtime_forever": 0,
        "img_icon_url": "8fc55092acac2cb5f72dbf8f644fcd430c461dd6",
        "img_logo_url": "0700d43ef52f5c83b5794a8984ce0ecf34169465"
      },
      {
        "appid": 12710,
        "name": "Overlord: Raising Hell",
        "playtime_forever": 0,
        "img_icon_url": "adbaa95c9f6fd9f10faf78ddd7477160d4946424",
        "img_logo_url": "887f6ba923cf64b7b7a4153bcea1352fde6e47fa"
      },
      {
        "appid": 214790,
        "name": "The Basement Collection",
        "playtime_forever": 0,
        "img_icon_url": "0bd402578e431f679c9709f34b4ecfe334914600",
        "img_logo_url": "e1a86d61e73936e1e279843c781e914302f03a5c",
        "has_community_visible_stats": true
      },
      {
        "appid": 72000,
        "name": "Closure",
        "playtime_forever": 0,
        "img_icon_url": "7da11a2030451f15450452b6c5f0aeb45b39fbd3",
        "img_logo_url": "6e01635915c7a052c64c81f1408844a596917d2e",
        "has_community_visible_stats": true
      },
      {
        "appid": 215510,
        "name": "Rocketbirds: Hardboiled Chicken",
        "playtime_forever": 0,
        "img_icon_url": "be9c980e8243b58aad6b568aa47dc1418be79fd4",
        "img_logo_url": "d0efb44cc59152ffaccb850e89b01e4b5e15761a",
        "has_community_visible_stats": true
      },
      {
        "appid": 200510,
        "name": "XCOM: Enemy Unknown",
        "playtime_forever": 0,
        "img_icon_url": "48be2fee1d0d511b5c7313e1359beafd36ea92ed",
        "img_logo_url": "eaa298d2b0d908b2c4f5370d2c8c59a8eff887c6",
        "has_community_visible_stats": true
      },
      {
        "appid": 20820,
        "name": "Shatter",
        "playtime_forever": 0,
        "img_icon_url": "de59a63f503649493a8ae0a3f88f652405d21f5b",
        "img_logo_url": "f1c592b51f11be58b6dcd3879646d85869f4558e",
        "has_community_visible_stats": true
      },
      {
        "appid": 41500,
        "name": "Torchlight",
        "playtime_forever": 65,
        "img_icon_url": "b2a2a43e401dce3c69898b67b1b8af4481d96b08",
        "img_logo_url": "e36226c6a0575e6e1838e1f915e91f8b31ab3008",
        "has_community_visible_stats": true
      },
      {
        "appid": 107200,
        "name": "Space Pirates and Zombies",
        "playtime_forever": 0,
        "img_icon_url": "5f2cbbd939589daa70d476951e08ae05df776b81",
        "img_logo_url": "f8371e2e888d057899eb19f5bfca3da3bfd2659f",
        "has_community_visible_stats": true
      },
      {
        "appid": 107800,
        "name": "Rochard",
        "playtime_forever": 29,
        "img_icon_url": "dce3c795d28d269b6cb55d6dae2003c926da1d82",
        "img_logo_url": "92f88c26b3bc129bf2a11202b7fae27f4515edad",
        "has_community_visible_stats": true
      },
      {
        "appid": 108500,
        "name": "Vessel",
        "playtime_forever": 0,
        "img_icon_url": "34deae874c052b949f4766630b86a9d7d274d7b9",
        "img_logo_url": "086f0d6b8d1e0df72a5699d50529b964bd26bc15",
        "has_community_visible_stats": true
      },
      {
        "appid": 65300,
        "name": "Dustforce",
        "playtime_forever": 39,
        "img_icon_url": "7823652dcb6b11c024003ec590c17f461637c66f",
        "img_logo_url": "6b3657f05813efb8061cb67d8989118ba5c7dde3",
        "has_community_visible_stats": true
      },
      {
        "appid": 207420,
        "name": "Wizorb",
        "playtime_forever": 0,
        "img_icon_url": "2a1f80d5356ee84f95c764f82c82724f17c6d83f",
        "img_logo_url": "1c99bf48b1633ebfe1e453e97f3453f34ba5815b",
        "has_community_visible_stats": true
      },
      {
        "appid": 209540,
        "name": "Strike Suit Zero",
        "playtime_forever": 0,
        "img_icon_url": "b30877270af7d5775ce626ef9bacab727ff979f3",
        "img_logo_url": "c76f1c726cba4ceb14290012c7d2c472284b9180",
        "has_community_visible_stats": true
      },
      {
        "appid": 214970,
        "name": "Intrusion 2",
        "playtime_forever": 0,
        "img_icon_url": "e63fe503a18fc70c3c759e96341a406dc1c8cbe5",
        "img_logo_url": "4559f77d2875c60562bebb22f656de6824badc6e",
        "has_community_visible_stats": true
      },
      {
        "appid": 214560,
        "name": "Mark of the Ninja",
        "playtime_forever": 0,
        "img_icon_url": "220f33169c93c2f6381cd785399fb52bfc79309f",
        "img_logo_url": "c20501309696e5bcda98e9e4f2649abc5720a1d1",
        "has_community_visible_stats": true
      },
      {
        "appid": 206440,
        "name": "To the Moon",
        "playtime_forever": 0,
        "img_icon_url": "6e29eb4076a6253fdbccb987a2a21746d2df54d7",
        "img_logo_url": "f0e5a7037facd7bff7656ebe2396a23735c608c2",
        "has_community_visible_stats": true
      },
      {
        "appid": 220780,
        "name": "Thomas Was Alone",
        "playtime_forever": 0,
        "img_icon_url": "14a9056a76a256fbcfe833dd1420d01eeba14abc",
        "img_logo_url": "b2194d8b207193e0e3d8ae2bc47a91685c577750",
        "has_community_visible_stats": true
      },
      {
        "appid": 220860,
        "name": "McPixel",
        "playtime_forever": 0,
        "img_icon_url": "236a6f77afff3814552ae2a6ccadbf84d992a252",
        "img_logo_url": "40474226a93b08ce53978641f0f0c56b9b0a7d73"
      },
      {
        "appid": 202970,
        "name": "Call of Duty: Black Ops II",
        "playtime_forever": 0,
        "img_icon_url": "0a23d78ade8c8d7b4cfa15bf71c9dd535b2998ca",
        "img_logo_url": "22c1b44c93de20c0a6a7d4e3d51bd0094229b547",
        "has_community_visible_stats": true
      },
      {
        "appid": 202990,
        "name": "Call of Duty: Black Ops II - Multiplayer",
        "playtime_forever": 469,
        "img_icon_url": "1f3a69123b4c7e47904dcd0c55e48c5522e30284",
        "img_logo_url": "dde01e9adf37db62f3d54077f5781cb9f7adacfb",
        "has_community_visible_stats": true
      },
      {
        "appid": 212910,
        "name": "Call of Duty: Black Ops II - Zombies",
        "playtime_forever": 0,
        "img_icon_url": "abbc45872375bcf8ac6b67cae6ed9ddb6c75d350",
        "img_logo_url": "cb4cc34a1ec14a3237748919df4ad4d8aec946db",
        "has_community_visible_stats": true
      },
      {
        "appid": 221260,
        "name": "Little Inferno",
        "playtime_forever": 0,
        "img_icon_url": "478d0b4bbe94d5d6c5248e07f0da75cbe9f6ba95",
        "img_logo_url": "832ef3fdc5f9f38113302042f0c639ec9668ab73"
      },
      {
        "appid": 203140,
        "name": "Hitman: Absolution",
        "playtime_forever": 0,
        "img_icon_url": "fe5e36ac1548793eb48b6b25b701b37d86fb94a3",
        "img_logo_url": "b86fc98f1d9d4339deff8a1cf117cc3c7080ff55",
        "has_community_visible_stats": true
      },
      {
        "appid": 91600,
        "name": "Sanctum",
        "playtime_forever": 0,
        "img_icon_url": "fb131c31ed4dc33421dac1f805aaef337b03567c",
        "img_logo_url": "d63198590c7bab5a332327a54f8ed0a00ac4b0d3",
        "has_community_visible_stats": true
      },
      {
        "appid": 205790,
        "name": "Dota 2 Test",
        "playtime_forever": 0,
        "img_icon_url": "",
        "img_logo_url": ""
      },
      {
        "appid": 218680,
        "name": "Scribblenauts Unlimited",
        "playtime_forever": 0,
        "img_icon_url": "e933a9993b7d0b905dbb37636a97339a2c277e0f",
        "img_logo_url": "c3f8420cd87dd772df8a35013e3538e964ecc2b8",
        "has_community_visible_stats": true
      },
      {
        "appid": 219150,
        "name": "Hotline Miami",
        "playtime_forever": 42,
        "img_icon_url": "d5bf432ec0975cbd26282389575858df9730364f",
        "img_logo_url": "540a1457099f072ced7153239861e42f14febd56",
        "has_community_visible_stats": true
      },
      {
        "appid": 223220,
        "name": "Giana Sisters: Twisted Dreams",
        "playtime_forever": 0,
        "img_icon_url": "ac543243f2541e7a7728bf2165c5f3ebc57679fb",
        "img_logo_url": "9c8baddbab7938b5b995843d36526a30bd12bb1d",
        "has_community_visible_stats": true
      },
      {
        "appid": 4920,
        "name": "Natural Selection 2",
        "playtime_forever": 0,
        "img_icon_url": "df709ad4689cbfb82c2971be4adba431e755875f",
        "img_logo_url": "ab7b1142e17865e6d3472d3fd4b345620ec5f36f",
        "has_community_visible_stats": true
      },
      {
        "appid": 6850,
        "name": "Hitman 2: Silent Assassin",
        "playtime_forever": 0,
        "img_icon_url": "4c6b98ac952877ebfb890721624ae79276cf8358",
        "img_logo_url": "7ea9c76a7f5bb7da7a5e1b47ca4c7c664c0a7cd4"
      },
      {
        "appid": 221640,
        "name": "Super Hexagon",
        "playtime_forever": 1,
        "img_icon_url": "ab2678a5d7768394e7482f89f613c0cf678f13d8",
        "img_logo_url": "4af06ddc675125c0efdd125f5f180fb0eca53625",
        "has_community_visible_stats": true
      },
      {
        "appid": 43110,
        "name": "Metro 2033",
        "playtime_forever": 0,
        "img_icon_url": "a70fe6dc214f24107d20596f3040dbfa220ed42d",
        "img_logo_url": "df9a163ac1f28dfc84c93a6fc0dc51719eaef518",
        "has_community_visible_stats": true
      },
      {
        "appid": 50620,
        "name": "Darksiders",
        "playtime_forever": 0,
        "img_icon_url": "e429cee10d864faf2aae2ea9cd75e8e1942fbe08",
        "img_logo_url": "14bd29bc9b291081b63258e3bfbbf5bb655c2347",
        "has_community_visible_stats": true
      },
      {
        "appid": 55110,
        "name": "Red Faction: Armageddon",
        "playtime_forever": 0,
        "img_icon_url": "e59c7e741c05c9071176b270bdbb733afe55c751",
        "img_logo_url": "19f894d0e08dff8e284d4facc5968a1025da997d",
        "has_community_visible_stats": true
      },
      {
        "appid": 209190,
        "name": "Stealth Bastard Deluxe",
        "playtime_forever": 0,
        "img_icon_url": "2be85799c6d910119aa46b153d0b3baf96d0cf69",
        "img_logo_url": "ace19954ffdbb6678481f3fa99e3a1f5087b400b",
        "has_community_visible_stats": true
      },
      {
        "appid": 201790,
        "name": "Orcs Must Die! 2",
        "playtime_forever": 0,
        "img_icon_url": "fabd8658e8e76f7c99c56f26b69d29882756f9b4",
        "img_logo_url": "c345d9b205f349f0e7f4e6cdf8af4d0b7d242505",
        "has_community_visible_stats": true
      },
      {
        "appid": 113020,
        "name": "Monaco",
        "playtime_forever": 0,
        "img_icon_url": "169e693854d9f70984987fa3b6b5f1f9eb27122a",
        "img_logo_url": "60642017342ab7f3c924ee9d13b99702a50e5d9e",
        "has_community_visible_stats": true
      },
      {
        "appid": 227200,
        "name": "Waking Mars",
        "playtime_forever": 0,
        "img_icon_url": "1d451f2769c23282d7418136fdb57d2ebbf15acf",
        "img_logo_url": "aac63e8d7578931f7f7520a1d3e0db96dbd68293",
        "has_community_visible_stats": true
      },
      {
        "appid": 65800,
        "name": "Dungeon Defenders",
        "playtime_forever": 0,
        "img_icon_url": "8de7e7e9af523591c34b713b0b21910058ab4169",
        "img_logo_url": "71af270cff61ab197f9932212012134a436d9682",
        "has_community_visible_stats": true
      },
      {
        "appid": 15100,
        "name": "Assassin's Creed",
        "playtime_forever": 154,
        "img_icon_url": "cd8f7a795e34e16449f7ad8d8190dce521967917",
        "img_logo_url": "5450218e6f8ea246272cddcb2ab9a453b0ca7ef5"
      },
      {
        "appid": 33230,
        "name": "Assassin's Creed II",
        "playtime_forever": 0,
        "img_icon_url": "0492d8ee860ac99168e46efeb003029c3224cb38",
        "img_logo_url": "6d29461ee9303967cb32c2142afaf9bbdb911b6f"
      },
      {
        "appid": 48190,
        "name": "Assassin's Creed Brotherhood",
        "playtime_forever": 0,
        "img_icon_url": "6a87d0b61e45e8075decd1f8ace549300b036a52",
        "img_logo_url": "00991d5d48183ce4148617ff0fe9db2fabda346b"
      },
      {
        "appid": 201870,
        "name": "Assassin's Creed Revelations",
        "playtime_forever": 0,
        "img_icon_url": "08f7266496718dbd5d2f93e4776d3f5dc368ad54",
        "img_logo_url": "ac2a172c79ea93d98102b15dbf5dbac8d88aea70"
      },
      {
        "appid": 208480,
        "name": "Assassin's Creed® III",
        "playtime_forever": 0,
        "img_icon_url": "5d13ffd781fa7658903fbd762b51a76f8c734d2b",
        "img_logo_url": "81f8b16b6f248f18e808967ce3ea19fdfed668f1",
        "has_community_visible_stats": true
      },
      {
        "appid": 219680,
        "name": "Proteus",
        "playtime_forever": 0,
        "img_icon_url": "421489f519d7e67eed0854d169e001bebc8fafc7",
        "img_logo_url": "a0db2a8ad167444d7132b405a11c73a57f376ced"
      },
      {
        "appid": 35720,
        "name": "Trine 2",
        "playtime_forever": 0,
        "img_icon_url": "061ecbbd7c70ae1c052377bad136c7759cbb708d",
        "img_logo_url": "7d7c3b93bd85ad1db2a07f6cca01a767069c6407",
        "has_community_visible_stats": true
      },
      {
        "appid": 215710,
        "name": "Fieldrunners 2",
        "playtime_forever": 0,
        "img_icon_url": "adfbe071578098a1802fa334be8e3fd7cbf6e8e6",
        "img_logo_url": "a40127479fd3fe50fe9fbf7ff014c7ad3ce20df5",
        "has_community_visible_stats": true
      },
      {
        "appid": 219890,
        "name": "Antichamber",
        "playtime_forever": 0,
        "img_icon_url": "1c3afe41623c51172ef1dc96427bf23bb940748b",
        "img_logo_url": "23966982a5795854342af3522706c7f9c6a83cb5"
      },
      {
        "appid": 230980,
        "name": "Starseed Pilgrim",
        "playtime_forever": 5,
        "img_icon_url": "74f50e2eb4fd827088dfb243004ec07b5f0ae45a",
        "img_logo_url": "6e994ba327e66663cc25585d7225cd0109d5c7e3"
      },
      {
        "appid": 204240,
        "name": "The Bridge",
        "playtime_forever": 0,
        "img_icon_url": "d3136c9de88992d2a97b8baf876097427a6c071f",
        "img_logo_url": "112da2a1e4e4e7e86f07f6aafc7d5866edb55871",
        "has_community_visible_stats": true
      },
      {
        "appid": 8930,
        "name": "Sid Meier's Civilization V",
        "playtime_forever": 286,
        "img_icon_url": "fbe80c4743e226f0bf65559c91b12953d4446808",
        "img_logo_url": "2203f62bd1bdc75c286c13534e50f22e3bd5bb58",
        "has_community_visible_stats": true
      },
      {
        "appid": 225260,
        "name": "Brütal Legend",
        "playtime_forever": 81,
        "img_icon_url": "e3f25fba8538e5fb1ead751e767c2774df4fb0b4",
        "img_logo_url": "cc8b60ac1fa649c950ff7a9881b98709b8372f94",
        "has_community_visible_stats": true
      },
      {
        "appid": 218060,
        "name": "BIT.TRIP Presents... Runner2: Future Legend of Rhythm Alien",
        "playtime_forever": 0,
        "img_icon_url": "d45b4f92fa9360b8794a7e874bd0b86edd3fef18",
        "img_logo_url": "668226870f69db2ac9c1044cf62464d719d51ce3",
        "has_community_visible_stats": true
      },
      {
        "appid": 225420,
        "name": "Cities in Motion 2",
        "playtime_forever": 0,
        "img_icon_url": "8153d0c11e07d5a8a55ae0a92d038e11d1c0789c",
        "img_logo_url": "199b0db2bcc736d44bc1a605377cce9687b35c0e",
        "has_community_visible_stats": true
      },
      {
        "appid": 233450,
        "name": "Prison Architect",
        "playtime_forever": 0,
        "img_icon_url": "c166c7911beec4d63a74cdddf25f26b73c84556b",
        "img_logo_url": "fe2f32349f62c1a5d6ee48abd87a6232d32724d1",
        "has_community_visible_stats": true
      },
      {
        "appid": 8870,
        "name": "BioShock Infinite",
        "playtime_forever": 0,
        "img_icon_url": "4ebaf5f9ee74f50152f7ff361debef7553fa0e4e",
        "img_logo_url": "870bb889e192cf8d31876ed04d329a5d51c6fc2c",
        "has_community_visible_stats": true
      },
      {
        "appid": 227080,
        "name": "Papo & Yo",
        "playtime_forever": 0,
        "img_icon_url": "5cfaca2132dd3e3d389783a990eb48d79eb9ed40",
        "img_logo_url": "b971bdbe496e6f24878deed1091801db4f219e8a",
        "has_community_visible_stats": true
      },
      {
        "appid": 233740,
        "name": "Organ Trail: Director's Cut",
        "playtime_forever": 0,
        "img_icon_url": "b2ae5274b8ea39e7db518436e0883f54c0f5ebb9",
        "img_logo_url": "f9bb211db5bd5f52dd4d80f612027922393fa739",
        "has_community_visible_stats": true
      },
      {
        "appid": 115100,
        "name": "Costume Quest",
        "playtime_forever": 0,
        "img_icon_url": "ba04f2c7aa5a5c8762d088d9a9fe10d67c92e59b",
        "img_logo_url": "125ad90dba2c6c3726837ae9c1889d8009f806a9",
        "has_community_visible_stats": true
      },
      {
        "appid": 115110,
        "name": "Stacking",
        "playtime_forever": 0,
        "img_icon_url": "c6f9f3ea7afced3ac93e08b43c8e64aa45488648",
        "img_logo_url": "5bbd716992eab33cc5bbcd54cf691da700372329",
        "has_community_visible_stats": true
      },
      {
        "appid": 44350,
        "name": "GRID 2",
        "playtime_forever": 0,
        "img_icon_url": "78dfd2533e0ee4cdf981cf13fbdea9596f1ed433",
        "img_logo_url": "059c8f0e1995b134f78deaf93b0a352db58ba0e1",
        "has_community_visible_stats": true
      },
      {
        "appid": 210770,
        "name": "Sanctum 2",
        "playtime_forever": 0,
        "img_icon_url": "4cdfa1d19be460374a111b718ce3a204f21ea1dc",
        "img_logo_url": "333a8c65480bb85148bb3a185843a8520ae5d90f",
        "has_community_visible_stats": true
      },
      {
        "appid": 233720,
        "name": "Surgeon Simulator",
        "playtime_forever": 31,
        "img_icon_url": "77e5bb562902be4a5a49b114d7370138696b1595",
        "img_logo_url": "2a0d51aa92d2bf2e168e090f9b72bf60d78fa53e",
        "has_community_visible_stats": true
      },
      {
        "appid": 224760,
        "name": "FEZ",
        "playtime_forever": 29,
        "img_icon_url": "900590f739d69da4f50112669f5d949a2e6b9261",
        "img_logo_url": "d2789dc5fb6bfee4d07cd3ec06985593fffd606c",
        "has_community_visible_stats": true
      },
      {
        "appid": 234710,
        "name": "Poker Night 2",
        "playtime_forever": 83,
        "img_icon_url": "b3073e6f089447a9cf1eeabf7579600061546322",
        "img_logo_url": "0b274bb5ade23104ce267a05ce7ac0f7aaa0248d",
        "has_community_visible_stats": true
      },
      {
        "appid": 234650,
        "name": "Shadowrun Returns",
        "playtime_forever": 0,
        "img_icon_url": "13c8e62b9b079fba385a2d959ed4e8ce2c378c8c",
        "img_logo_url": "d2ada23f204adf831dc89be7c6edbbbc38c99ef6",
        "has_community_visible_stats": true
      },
      {
        "appid": 220200,
        "name": "Kerbal Space Program",
        "playtime_forever": 52,
        "img_icon_url": "6dc8c1377c6b0ffedaeaec59c253f8c33fb3e62b",
        "img_logo_url": "52c3e31754351fd276206aa7232972961fae0295"
      },
      {
        "appid": 65930,
        "name": "The Bureau: XCOM Declassified",
        "playtime_forever": 0,
        "img_icon_url": "854f133d072a65e5577c2a21bf25ba863e4a6a23",
        "img_logo_url": "52da3125ac55d5d1406c610f7e8c78755f0752ff",
        "has_community_visible_stats": true
      },
      {
        "appid": 231430,
        "name": "Company of Heroes 2",
        "playtime_forever": 0,
        "img_icon_url": "5e7e1866fb4f33a17393b0441cd1c750dbd91c5f",
        "img_logo_url": "1be017e709b9b0638e82b399cc97de4667f44a1e",
        "has_community_visible_stats": true
      },
      {
        "appid": 222730,
        "name": "Reus",
        "playtime_forever": 0,
        "img_icon_url": "e0b3cdc7b259184f20676b65c230c5648724c9d3",
        "img_logo_url": "06920f2db1122c919fcbeeb3c8a88801e965adc8",
        "has_community_visible_stats": true
      },
      {
        "appid": 57640,
        "name": "Broken Sword 1 - Shadow of the Templars: Director's Cut",
        "playtime_forever": 0,
        "img_icon_url": "1a42af15fc34f52a4df0a804552867e5f20f7f43",
        "img_logo_url": "ab603d7a68ebf18d1ae3d30696021f1ce401696e"
      },
      {
        "appid": 236090,
        "name": "Dust: An Elysian Tail",
        "playtime_forever": 0,
        "img_icon_url": "3779535aba1ad565d504a7d52c6dd5c9eeb47fb2",
        "img_logo_url": "544fd60b00696d8c3402828da7055fea64d619ca",
        "has_community_visible_stats": true
      },
      {
        "appid": 206190,
        "name": "Gunpoint",
        "playtime_forever": 0,
        "img_icon_url": "19a835390a85aaa08ef41adbf23c1d56e7d5ac9a",
        "img_logo_url": "f82deeb9e1b01b8d8247d7824a7ce2f9ca8133f7",
        "has_community_visible_stats": true
      },
      {
        "appid": 231160,
        "name": "The Swapper",
        "playtime_forever": 0,
        "img_icon_url": "4d3e99b7d885baba60ea29ee1634cc58bf22e41d",
        "img_logo_url": "11e08b7b00d8a24a1f83dec3e7c2ca08e98be78a",
        "has_community_visible_stats": true
      },
      {
        "appid": 8500,
        "name": "EVE Online",
        "playtime_forever": 0,
        "img_icon_url": "6822a3f95654d952f7f9f8d5b5f890c0b1a3a6d1",
        "img_logo_url": "119893ac764aae58254812420ab9c51232199027",
        "has_community_visible_stats": true
      },
      {
        "appid": 242820,
        "name": "140",
        "playtime_forever": 126,
        "img_icon_url": "b4c2f57912256aef7cf649c42b768b8f162a78c2",
        "img_logo_url": "1f08bea3bc30abc955bb3cb95a8f8d1a4659f4cb",
        "has_community_visible_stats": true
      },
      {
        "appid": 242920,
        "name": "Banished",
        "playtime_forever": 0,
        "img_icon_url": "1c499bc7d659ddde65a1cd3f2cd7b6122211b4b1",
        "img_logo_url": "2a62342148979d18e2b50ab8c5eebcfe6c99295c",
        "has_community_visible_stats": true
      },
      {
        "appid": 243160,
        "name": "Mushroom 11",
        "playtime_forever": 0,
        "img_icon_url": "790733fec1dd0894dfdd05e27f6e2d9d2e70625e",
        "img_logo_url": "e3279e19c92e5c3a7d5037ba6901449c8b129b05",
        "has_community_visible_stats": true
      },
      {
        "appid": 24420,
        "name": "Aquaria",
        "playtime_forever": 0,
        "img_icon_url": "8da675ae3499a9de4d1c4edcf395908dad0958a5",
        "img_logo_url": "d6ebe90b8bbb2eccfa28616a283e9781694cdba0",
        "has_community_visible_stats": true
      },
      {
        "appid": 228960,
        "name": "Skulls of the Shogun",
        "playtime_forever": 0,
        "img_icon_url": "b506d27de72fad92efe8945ccc5244f9d62f5c90",
        "img_logo_url": "3577e5d170f824d7910c7c9c00b3fc7d5afa46a3",
        "has_community_visible_stats": true
      },
      {
        "appid": 242110,
        "name": "Joe Danger 2: The Movie",
        "playtime_forever": 0,
        "img_icon_url": "2bcd2bbb58cc80edd9ec563df8cdec1052a92de2",
        "img_logo_url": "38494e7c8fad7eb55a4044288a975ced56a5a22a",
        "has_community_visible_stats": true
      },
      {
        "appid": 201420,
        "name": "Toki Tori 2+",
        "playtime_forever": 0,
        "img_icon_url": "dd1a4ef8d8f2dfbb49e33526c9679b70eb4018c8",
        "img_logo_url": "e8ed55e30253308dce96561ddec29b237037934c",
        "has_community_visible_stats": true
      },
      {
        "appid": 237530,
        "name": "Toki Tori 2+ Level Editor",
        "playtime_forever": 0,
        "img_icon_url": "dd1a4ef8d8f2dfbb49e33526c9679b70eb4018c8",
        "img_logo_url": "",
        "has_community_visible_stats": true
      },
      {
        "appid": 241320,
        "name": "Ittle Dew",
        "playtime_forever": 0,
        "img_icon_url": "a8d497600c037e7a4611ba5e34fd6e3b14405e52",
        "img_logo_url": "740a4a472d90c0e32dfbdfb961122a560b372f62",
        "has_community_visible_stats": true
      },
      {
        "appid": 218820,
        "name": "Mercenary Kings",
        "playtime_forever": 356,
        "img_icon_url": "4544b2993465c51a977c83111b0c6f818823cb6b",
        "img_logo_url": "636cde6662517cb617f474a41fd706caa6674b1c",
        "has_community_visible_stats": true
      },
      {
        "appid": 40390,
        "name": "Risen 2 - Dark Waters",
        "playtime_forever": 0,
        "img_icon_url": "874236eebecff1fe070032d137722ef3cdb47383",
        "img_logo_url": "e1b72e0af10d743a3d51800bd208bbe2890b9953",
        "has_community_visible_stats": true
      },
      {
        "appid": 225640,
        "name": "Sacred 2 Gold",
        "playtime_forever": 0,
        "img_icon_url": "28844816d8aeca6c71b50f8b4f599c59f0d91afd",
        "img_logo_url": "1df208627b74f8d7f45e4504ba4fdfb55011f056"
      },
      {
        "appid": 91310,
        "name": "Dead Island",
        "playtime_forever": 114,
        "img_icon_url": "1df9ab123c2180d8933038be7578a21e2442befb",
        "img_logo_url": "62632a275a4cc08f0238ed3d589ce1d8627fde91",
        "has_community_visible_stats": true
      },
      {
        "appid": 40300,
        "name": "Risen",
        "playtime_forever": 0,
        "img_icon_url": "d5dbefdcd2e6e5def6518b3e66bf4ecf7f8aedcf",
        "img_logo_url": "e65177f1ab3fbbde7286c1233724eca7f5b9148c"
      },
      {
        "appid": 207930,
        "name": "Sacred Citadel",
        "playtime_forever": 0,
        "img_icon_url": "86ba4a65a016575fec95f10717e0e37cc4771401",
        "img_logo_url": "ac6b326412f4000453e789a8c3a104145728836c",
        "has_community_visible_stats": true
      },
      {
        "appid": 246680,
        "name": "Secrets of Rætikon",
        "playtime_forever": 0,
        "img_icon_url": "3ef1439010802954cf62fea07db5036335b97b7f",
        "img_logo_url": "e7ab63512b48d23e6eead6ec8dc9358ec6e3de72",
        "has_community_visible_stats": true
      },
      {
        "appid": 246700,
        "name": "Strike Vector",
        "playtime_forever": 0,
        "img_icon_url": "900d58014eb496b2f031e8e3be80630cd30e4cf1",
        "img_logo_url": "a872d242629521f10c041275b5f79927e9d01948",
        "has_community_visible_stats": true
      },
      {
        "appid": 214770,
        "name": "Guacamelee! Gold Edition",
        "playtime_forever": 0,
        "img_icon_url": "2542d8e59fa2a5ceb5b16f6fa052d6aa6cda7c69",
        "img_logo_url": "461f1e9e34cf80edf3581d78c5d24e20501eeaf2",
        "has_community_visible_stats": true
      },
      {
        "appid": 225080,
        "name": "Brothers - A Tale of Two Sons",
        "playtime_forever": 0,
        "img_icon_url": "9d6e8bcae597582734b382d8da93e5fa7b1c640b",
        "img_logo_url": "12f5c3aaa2b1d69d0786e1d09e0b77e2da6f8980",
        "has_community_visible_stats": true
      },
      {
        "appid": 239030,
        "name": "Papers, Please",
        "playtime_forever": 0,
        "img_icon_url": "102e22fc7e0689cb5a9d8cfdd5a6725d571d1a0f",
        "img_logo_url": "eb4c045f73f9a4b1bac708e70fb12f12cd53010f",
        "has_community_visible_stats": true
      },
      {
        "appid": 231040,
        "name": "Beatbuddy: Tale of the Guardians",
        "playtime_forever": 0,
        "img_icon_url": "1da60d64393a63533d348d0de309adb9c825402c",
        "img_logo_url": "630a0fe52c40facdbdf8be2070a5dc0fa1a83159",
        "has_community_visible_stats": true
      },
      {
        "appid": 242940,
        "name": "Anachronox",
        "playtime_forever": 0,
        "img_icon_url": "84bbecfa92c4d058ef07786e0e4af879da3e9207",
        "img_logo_url": "0fd488249d908ce10441f1d53afe518b9e87ff2e"
      },
      {
        "appid": 239070,
        "name": "Hammerwatch",
        "playtime_forever": 0,
        "img_icon_url": "323733faf2833c6e57879914ff15e05d07ace7d6",
        "img_logo_url": "e9d676e3fffd764438d0abf602b8e275646c5530",
        "has_community_visible_stats": true
      },
      {
        "appid": 248650,
        "name": "Draw a Stickman: EPIC",
        "playtime_forever": 0,
        "img_icon_url": "dd0aa85e5d17fc8ecb662b42bd82efa55db34fbb",
        "img_logo_url": "3d14c0f48d7a9b2f78302e7ae884060099fa18e3",
        "has_community_visible_stats": true
      },
      {
        "appid": 239350,
        "name": "Spelunky",
        "playtime_forever": 0,
        "img_icon_url": "f11cc6800f5139e79643331be28c348cd7ccbba2",
        "img_logo_url": "1a3ce75a075da21471d4d376681b6a8dd2c4a8bd",
        "has_community_visible_stats": true
      },
      {
        "appid": 218620,
        "name": "PAYDAY 2",
        "playtime_forever": 0,
        "img_icon_url": "a6abc0d0c1e79c0b5b0f5c8ab81ce9076a542414",
        "img_logo_url": "4467a70648f49a6b309b41b81b4531f9a20ed99d",
        "has_community_visible_stats": true
      },
      {
        "appid": 250180,
        "name": "METAL SLUG 3",
        "playtime_forever": 0,
        "img_icon_url": "102c6efe9fc37ecdc929258c52dcaf3d445b873f",
        "img_logo_url": "2f38a8238712afa7cacdd41031a114b35cf9b9db",
        "has_community_visible_stats": true
      },
      {
        "appid": 214550,
        "name": "Eets Munchies",
        "playtime_forever": 0,
        "img_icon_url": "17b2e8425efc9d35b2ed559f43dd820272d58d66",
        "img_logo_url": "d9c64980c302b2f4d7d62228041bef3e315a644d",
        "has_community_visible_stats": true
      },
      {
        "appid": 111900,
        "name": "Guardians of Middle-earth",
        "playtime_forever": 0,
        "img_icon_url": "5ab636ac90b8476892d6e0ae377624d5b934f600",
        "img_logo_url": "08a7116bebd1bf44bb8e86495358dca14224d223",
        "has_community_visible_stats": true
      },
      {
        "appid": 251130,
        "name": "Chroma Squad",
        "playtime_forever": 30,
        "img_icon_url": "334bdb60f1976deb7a8f3b3b054086efc35db695",
        "img_logo_url": "a6da7d47dbec8da73cd445e36580dbd0af419e2b",
        "has_community_visible_stats": true
      },
      {
        "appid": 251470,
        "name": "TowerFall Ascension",
        "playtime_forever": 0,
        "img_icon_url": "c7ad90c5f12c86496fdf7215127cf50e6a6860be",
        "img_logo_url": "73505d315ccae4c074d4e149ce582f01987ab75f",
        "has_community_visible_stats": true
      },
      {
        "appid": 252410,
        "name": "SteamWorld Dig",
        "playtime_forever": 0,
        "img_icon_url": "7757c90bbf65e312ea4871106250077e78007bc6",
        "img_logo_url": "99e9e265feb90662e9d8cacc6c8e285e8fc00d2d",
        "has_community_visible_stats": true
      },
      {
        "appid": 252490,
        "name": "Rust",
        "playtime_forever": 13,
        "img_icon_url": "f073e61dd96fbe94aaae0fbe5de0d8ffc2402f75",
        "img_logo_url": "cf3ec2d1e8d658c9127b6bc01cad23eae2d3b202",
        "has_community_visible_stats": true
      },
      {
        "appid": 252950,
        "name": "Rocket League",
        "playtime_forever": 1893,
        "img_icon_url": "217214f6bd922a8da8bdd684aa94b1ef8e7724d1",
        "img_logo_url": "58d7334290672887fdd47e25251f291b812c895e",
        "has_community_visible_stats": true
      },
      {
        "appid": 253030,
        "name": "Race The Sun",
        "playtime_forever": 0,
        "img_icon_url": "c71854fe8d02e797b43f5ea7d57a6430913442c7",
        "img_logo_url": "ff0d04cb05dc03ec4b9a136d6b35b00166c475fc",
        "has_community_visible_stats": true
      },
      {
        "appid": 200170,
        "name": "Worms Revolution",
        "playtime_forever": 0,
        "img_icon_url": "15c154176bfa6bffabc7ebd31fd67de2485c6e1c",
        "img_logo_url": "3808bfc4b577f8f69ec5239d96fb029c71daa22d",
        "has_community_visible_stats": true
      },
      {
        "appid": 255220,
        "name": "GRID Autosport",
        "playtime_forever": 0,
        "img_icon_url": "e43efe73a4b718bd90132cf519ebdbd329d24ea4",
        "img_logo_url": "c8ef54ffd81bf8d34b658bad3009ffbf91197093",
        "has_community_visible_stats": true
      },
      {
        "appid": 234000,
        "name": "Superfrog HD",
        "playtime_forever": 0,
        "img_icon_url": "ebdced188859df311f2dc7139462ac72d16c7979",
        "img_logo_url": "81a6c49f08e1604104d193265013ccea4c8d2eb4",
        "has_community_visible_stats": true
      },
      {
        "appid": 242980,
        "name": "Daikatana",
        "playtime_forever": 0,
        "img_icon_url": "a4e97d9e05bfe1ad161aeda934695a3cb313b9e4",
        "img_logo_url": "83081daca8add81037b091dbbd48d2cb9328cd57"
      },
      {
        "appid": 247430,
        "name": "Hitman: Contracts",
        "playtime_forever": 0,
        "img_icon_url": "d8babb26255685ba5de55aa78eb6c7a267b33bac",
        "img_logo_url": "4a5352f1cf8471abe600cd289cdf8ef96d13958b"
      },
      {
        "appid": 8850,
        "name": "BioShock 2",
        "playtime_forever": 0,
        "img_icon_url": "f5eda925c0e57373aaea4cae17b6f175115a8d54",
        "img_logo_url": "fde6fa1b15e4eb409c9d592197024571fded77e7",
        "has_community_visible_stats": true
      },
      {
        "appid": 238010,
        "name": "Deus Ex: Human Revolution - Director's Cut",
        "playtime_forever": 0,
        "img_icon_url": "6c7ccd62c124ae63820e06ed9b24d4559c5b0b1f",
        "img_logo_url": "4bcb3e48bcb2ebb52403b1fc3f43dbd43607ba2e",
        "has_community_visible_stats": true
      },
      {
        "appid": 258890,
        "name": "Type:Rider",
        "playtime_forever": 0,
        "img_icon_url": "747c0e8001b3262358af6a1abf51ec0f27eea698",
        "img_logo_url": "9932ad807beac236c3af3ff151cb782c6b9ba60b",
        "has_community_visible_stats": true
      },
      {
        "appid": 42910,
        "name": "Magicka",
        "playtime_forever": 0,
        "img_icon_url": "0eb97d0cd644ee08b1339d2160c7a6adf2ea0a65",
        "img_logo_url": "8c59c674ef40f59c3bafde8ff0d59b7994c66477",
        "has_community_visible_stats": true
      },
      {
        "appid": 259390,
        "name": "Ballpoint Universe: Infinite",
        "playtime_forever": 0,
        "img_icon_url": "8ca79b34ad9da6a6d21c4c0c2fc53ea5b8cb29bb",
        "img_logo_url": "6a9cf6c09235db986ec76e9936a5cdecd664d0b3",
        "has_community_visible_stats": true
      },
      {
        "appid": 259600,
        "name": "Finding Teddy",
        "playtime_forever": 0,
        "img_icon_url": "16a9f2317257621a44dc2f881f0fe0d324ccd6db",
        "img_logo_url": "8af36a2ecf5a7bfe2c5e921b9a938759ab964f95",
        "has_community_visible_stats": true
      },
      {
        "appid": 221910,
        "name": "The Stanley Parable",
        "playtime_forever": 0,
        "img_icon_url": "d4958966dbc02d7a282c52552f71ce6910957b63",
        "img_logo_url": "80de64fedc906c4d81123e7ddc1d61d39183ab2d",
        "has_community_visible_stats": true
      },
      {
        "appid": 207750,
        "name": "Symphony",
        "playtime_forever": 0,
        "img_icon_url": "a71e68ccdefe21a3a23e8197d5f97e98c0c0a0fb",
        "img_logo_url": "fbb6eb900a4c8b83d6fbf21245104ac44f6232ec",
        "has_community_visible_stats": true
      },
      {
        "appid": 266130,
        "name": "Breach & Clear",
        "playtime_forever": 0,
        "img_icon_url": "26dc1c75df69df7e3d1d6cd1d86b2b7238c187ac",
        "img_logo_url": "d32361035e143a77f30581c5fc9417ab4ec89035",
        "has_community_visible_stats": true
      },
      {
        "appid": 233150,
        "name": "LUFTRAUSERS",
        "playtime_forever": 0,
        "img_icon_url": "bcf78988270db7bbac1a9622defc770b96e84702",
        "img_logo_url": "f736d12763688ee2af2ef5e0fd382c83c6fc889a",
        "has_community_visible_stats": true
      },
      {
        "appid": 201040,
        "name": "Galcon Legends",
        "playtime_forever": 0,
        "img_icon_url": "3c7c0b63d1687712cd809f8bde9652ddb7e992b7",
        "img_logo_url": "7cc1db092002076e7dcd29104e242c8c741022ab",
        "has_community_visible_stats": true
      },
      {
        "appid": 232790,
        "name": "Broken Age",
        "playtime_forever": 0,
        "img_icon_url": "4b859c6d3dbb58c102276516b4cff175e8dd4ea0",
        "img_logo_url": "41b5954cafec81314d6f223e38faca0a23501252",
        "has_community_visible_stats": true
      },
      {
        "appid": 272040,
        "name": "KAMI",
        "playtime_forever": 0,
        "img_icon_url": "e4d575b083cc8f210288660a21a24e53294646e9",
        "img_logo_url": "342f6f9b4384834608df6d61839bc6c0606283ca"
      },
      {
        "appid": 222880,
        "name": "Insurgency",
        "playtime_forever": 0,
        "img_icon_url": "b072fc4239951c1952f4877edde340419438b528",
        "img_logo_url": "b620a8286682299e2a1ff272b04fb09d1b4edd38",
        "has_community_visible_stats": true
      },
      {
        "appid": 282760,
        "name": "Circuits",
        "playtime_forever": 22,
        "img_icon_url": "4f5d542a05347b80734ef12981af9005809c2ee3",
        "img_logo_url": "7a108f4a205f48460723966b9ac482206a05cb21",
        "has_community_visible_stats": true
      },
      {
        "appid": 286340,
        "name": "FarSky",
        "playtime_forever": 0,
        "img_icon_url": "90ca888ec1f5cfb93ab2a0f902d3f0f51dea9c09",
        "img_logo_url": "32952b9f3d4e77ce5f2d90a243e89c23c98e5b9c"
      },
      {
        "appid": 287260,
        "name": "Toybox Turbos",
        "playtime_forever": 0,
        "img_icon_url": "8b31c55bb89ec597c8bc8c2a34a1d1d119b7330a",
        "img_logo_url": "45dfbe6a37565fa5fb731a4a2c7c96f1c830d901",
        "has_community_visible_stats": true
      },
      {
        "appid": 287340,
        "name": "Colin McRae Rally",
        "playtime_forever": 30,
        "img_icon_url": "68f63fecae9d9648bc461433036ec3fa33074ff5",
        "img_logo_url": "db0986dbbb106cd5be74caa89a6b345ce8820755",
        "has_community_visible_stats": true
      },
      {
        "appid": 258180,
        "name": "Deus Ex: The Fall",
        "playtime_forever": 0,
        "img_icon_url": "48637a480bb7d4129b495054813f7eff70ec663e",
        "img_logo_url": "b1fca83c7ea829347a9d5db4e1cca85e7bf2d1ae",
        "has_community_visible_stats": true
      },
      {
        "appid": 293680,
        "name": "Cinders",
        "playtime_forever": 0,
        "img_icon_url": "df3e4b06b955576c364c859452194d170c59b36b",
        "img_logo_url": "adc7ce1da8268b7fc95dedca3c233efd635fcaf0",
        "has_community_visible_stats": true
      },
      {
        "appid": 213850,
        "name": "Magic 2014 ",
        "playtime_forever": 228,
        "img_icon_url": "350d7326abee67845350521cbd5ed9b6fb81337f",
        "img_logo_url": "888582427099c692937ad0fdcf0b87ed4aaac420",
        "has_community_visible_stats": true
      },
      {
        "appid": 299740,
        "name": "Miscreated",
        "playtime_forever": 0,
        "img_icon_url": "aa5ad156c129a711b82f0a324bb46137947d1307",
        "img_logo_url": "e7f327b926a3fe3ae0171acbf1c11a5aede94d88"
      },
      {
        "appid": 300550,
        "name": "Shadowrun: Dragonfall - Director's Cut",
        "playtime_forever": 0,
        "img_icon_url": "1fe5384c9e513285fd2eaf920b2615f9f0dab4b6",
        "img_logo_url": "e0c29af1992441227caacb463b2b46b9f41b2309",
        "has_community_visible_stats": true
      },
      {
        "appid": 243470,
        "name": "Watch_Dogs",
        "playtime_forever": 0,
        "img_icon_url": "53368e59a196dfa9af66ecd32135939da97fa72e",
        "img_logo_url": "8957636e0668d8913539aa535a8a508e3e54b1f4",
        "has_community_visible_stats": true
      },
      {
        "appid": 307590,
        "name": "Penarium",
        "playtime_forever": 0,
        "img_icon_url": "8bf9cba754f5f7adc43cf35996aeccbb20e0b234",
        "img_logo_url": "82002236f2d075a4ffa8b526323c4f98f9d3b7d5",
        "has_community_visible_stats": true
      },
      {
        "appid": 255420,
        "name": "Magic 2015",
        "playtime_forever": 455,
        "img_icon_url": "e38fc5beb7107e43344e2f8a8827116fa2b3a922",
        "img_logo_url": "31cf65b1c24adceadf10f0ae23250018590b3ade",
        "has_community_visible_stats": true
      },
      {
        "appid": 313080,
        "name": "The Masterplan",
        "playtime_forever": 0,
        "img_icon_url": "744e5824fa640f36cf1d20fd153c6a4fa2c1c453",
        "img_logo_url": "0db592bf11f83ff6c9eccacfe76cc10f07053e3d",
        "has_community_visible_stats": true
      },
      {
        "appid": 232430,
        "name": "Gone Home",
        "playtime_forever": 0,
        "img_icon_url": "b2328725f61ca5bd5e0286f26e6c61185d1f27f5",
        "img_logo_url": "8d86da75f094220994bdcd5f842469af36cacd8f"
      },
      {
        "appid": 314160,
        "name": "Microsoft Flight Simulator X: Steam Edition",
        "playtime_forever": 0,
        "img_icon_url": "dba4fedfc6365bb7cda9293a175df897df353411",
        "img_logo_url": "900f5e38b05ee0b7904d999b407c797dca837bea",
        "has_community_visible_stats": true
      },
      {
        "appid": 200110,
        "name": "Nosgoth",
        "playtime_forever": 0,
        "img_icon_url": "5059f6d2b9c87f10a631fcdcbed1020f7aae0ef9",
        "img_logo_url": "9894c6c94dca1b2c6f1836a3c780d8504efdd4ef",
        "has_community_visible_stats": true
      },
      {
        "appid": 316790,
        "name": "Grim Fandango Remastered",
        "playtime_forever": 0,
        "img_icon_url": "4e9da606cb52dfebf296dc8d3b0bc6ba81065a52",
        "img_logo_url": "1cd953b329e53555cb1acba0b615edd75ad72ad4",
        "has_community_visible_stats": true
      },
      {
        "appid": 319910,
        "name": "Trine 3: The Artifacts of Power",
        "playtime_forever": 123,
        "img_icon_url": "15853f24d7576a83cd4d54532a2a93c2d8d6024d",
        "img_logo_url": "0add332eadf0fff659f29f665048691cdeafd3f4",
        "has_community_visible_stats": true
      },
      {
        "appid": 229810,
        "name": "A Fistful of Gun",
        "playtime_forever": 0,
        "img_icon_url": "d617f214d475b946913600b3cb6a0e3250364713",
        "img_logo_url": "08ffac147c61f7798301100c577efe74ebd505e0",
        "has_community_visible_stats": true
      },
      {
        "appid": 321040,
        "name": "DiRT 3 Complete Edition",
        "playtime_forever": 0,
        "img_icon_url": "fdfb3aa153b57d6ae6cd8099cb4456b3d5b182b6",
        "img_logo_url": "bb89ef19777c30c8551b0f4eea296d6ca33007cc",
        "has_community_visible_stats": true
      },
      {
        "appid": 233610,
        "name": "Distance",
        "playtime_forever": 48,
        "img_icon_url": "37190c23b8dc6cb6eb726f9f221420c7abf1398f",
        "img_logo_url": "daaf9db7c35f4ce370658a2be37eac713bd8c8d6",
        "has_community_visible_stats": true
      },
      {
        "appid": 214490,
        "name": "Alien: Isolation",
        "playtime_forever": 0,
        "img_icon_url": "7bf964858835da75630a43ac0ddbf0f66a40902f",
        "img_logo_url": "6cdbe0113548dad8cee3d24fbace9abe298ac9af",
        "has_community_visible_stats": true
      },
      {
        "appid": 257510,
        "name": "The Talos Principle",
        "playtime_forever": 0,
        "img_icon_url": "8222673c1eb13e6a8a8367ec0e2940a887ecf270",
        "img_logo_url": "0392d2bd5d1bec31f2fd283bc4555fdc22dd44a9",
        "has_community_visible_stats": true
      },
      {
        "appid": 2400,
        "name": "The Ship",
        "playtime_forever": 0,
        "img_icon_url": "1d17a5d3d7da68eb317d848727ea235790e1d8a4",
        "img_logo_url": "2b19a255140350735cf8461f6e893452e1eae95e",
        "has_community_visible_stats": true
      },
      {
        "appid": 2420,
        "name": "The Ship Single Player",
        "playtime_forever": 0,
        "img_icon_url": "683c3b48b4a8c586d0f143765502383cc8f07ac6",
        "img_logo_url": "38d863d8a2a44555693dbcc499e3557531a1bb19",
        "has_community_visible_stats": true
      },
      {
        "appid": 2430,
        "name": "The Ship Tutorial",
        "playtime_forever": 0,
        "img_icon_url": "683c3b48b4a8c586d0f143765502383cc8f07ac6",
        "img_logo_url": "38d863d8a2a44555693dbcc499e3557531a1bb19"
      },
      {
        "appid": 310740,
        "name": "NEON STRUCT",
        "playtime_forever": 0,
        "img_icon_url": "1e457b564700fd89576e8e44e3586ea3fe42460b",
        "img_logo_url": "1d2cd6b1bbf47ec7420c7ab675208a01e2a3a638",
        "has_community_visible_stats": true
      },
      {
        "appid": 271590,
        "name": "Grand Theft Auto V",
        "playtime_forever": 3184,
        "img_icon_url": "1e72f87eb927fa1485e68aefaff23c7fd7178251",
        "img_logo_url": "e447e82f8b0c67f9e001498503c62f2a187bc609",
        "has_community_visible_stats": true
      },
      {
        "appid": 346110,
        "name": "ARK: Survival Evolved",
        "playtime_forever": 30,
        "img_icon_url": "fef1799533131c10f538d2dd697bbbd89e663265",
        "img_logo_url": "8f3af311ce6e9b0a14607a7fcc25bd55f78c2658",
        "has_community_visible_stats": true
      },
      {
        "appid": 346940,
        "name": "Shadowrun: Hong Kong - Extended Edition",
        "playtime_forever": 0,
        "img_icon_url": "04a8418d6cbc545260dbada086048ef8a6d0d408",
        "img_logo_url": "57a37a9cb55c413127e08020da96da21d82039eb",
        "has_community_visible_stats": true
      },
      {
        "appid": 297130,
        "name": "Titan Souls",
        "playtime_forever": 0,
        "img_icon_url": "37ab14d4261626c8850487467ff38b2fc3d71f5b",
        "img_logo_url": "51395e1b870852f9a34935fe31a8304db3e8acc2",
        "has_community_visible_stats": true
      },
      {
        "appid": 358960,
        "name": "Canabalt",
        "playtime_forever": 0,
        "img_icon_url": "5ab79d3eaec9e1555c3f78d0bd8c06390da017e1",
        "img_logo_url": "628ac953fef5dfd186a7e5e5aab2c4dda72851f3",
        "has_community_visible_stats": true
      },
      {
        "appid": 359320,
        "name": "Elite Dangerous",
        "playtime_forever": 1203,
        "img_icon_url": "c893e2752550a70950d90c5b881c7d6aac312356",
        "img_logo_url": "8cec856f5350e59f874bc1171fc864175fe095eb",
        "has_community_visible_stats": true
      },
      {
        "appid": 47780,
        "name": "Dead Space 2",
        "playtime_forever": 0,
        "img_icon_url": "6393351676edc4fdc65937a599780818fd2f18b7",
        "img_logo_url": "38cb9890ddd639a066bf480e3f098e1b92af2376"
      },
      {
        "appid": 365770,
        "name": "Volume",
        "playtime_forever": 0,
        "img_icon_url": "a8247ebcf226cce9ffff799a5703e0e17a85b1c4",
        "img_logo_url": "136b4d6780efc93b2d907e453517674027484746",
        "has_community_visible_stats": true
      },
      {
        "appid": 375600,
        "name": "Air Brawl",
        "playtime_forever": 152,
        "img_icon_url": "c310ea1a0438752ab97d5b667251ae39de60c937",
        "img_logo_url": "875aa448d007a4d4349f83b164d8174baf16cd07",
        "has_community_visible_stats": true
      },
      {
        "appid": 274350,
        "name": "Dropsy",
        "playtime_forever": 0,
        "img_icon_url": "8bae1687adc4d918cd44e62b3966510aa78d9e31",
        "img_logo_url": "885d17819e3f814e2087742d45e377ca89e7ca37",
        "has_community_visible_stats": true
      },
      {
        "appid": 383870,
        "name": "Firewatch",
        "playtime_2weeks": 33,
        "playtime_forever": 33,
        "img_icon_url": "d13e70a08cab192c52104f315a7d68591c085e81",
        "img_logo_url": "4ce446fd39f19222e2b3f3995955c6bbd06f182c",
        "has_community_visible_stats": true
      }
    ];

    exampleGameData.forEach(function(game) {
      game.imageUrl = "http://media.steampowered.com/steamcommunity/public/images/apps/"+game.appid+"/"+game.img_logo_url+".jpg";
    });

    this.gameGridOptions = {
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
      data: exampleGameData
    };

    var selectedGames = [];

    this.gameGridOptions.onRegisterApi = function( gridApi ) {

      gridApi.selection.on.rowSelectionChanged(null,function(row){
        if(row.isSelected) {
          selectedGames.push(row.entity);
        }
        else {
          var index = selectedGames.indexOf(row.entity);
          if (index > -1) {
            selectedGames.splice(index, 1);
          }
        }
        console.log(selectedGames);
      });
    };


    this.finishRegistration = function() {
      if(selectedGames.length===0) {
        scope.noGamesSelected = true;
        return;
      }
      scope.userData.ownedGames = [];
      selectedGames.forEach(function(game) {
        scope.userData.ownedGames.push({
          appid: game.appid,
          name: game.name,
          img_icon_url:     game.img_icon_url,
          img_logo_url:     game.img_logo_url,
          playtime_forever:  game.playtime_forever,
          advertise:        true
        })
      });

      userService.setUserData(scope.userData);
      userService.saveUserData(function(response) {
        console.log(response);
      });

    };


    this.goBack = function () {
      userService.setUserData(scope.userData);
      $location.path("/register");
    }



  });
