'use strict';


angular.module('hackAppApp')
  .controller('AccountSetupCtrl', function (userService, $location) {

    var scope = this;

    scope.languageDropdownSettings = {
      idProp: 'code',
      externalIdProp: '',
      scrollableHeight: '300px',
      scrollable: true,
      enableSearch: true,
      showCheckAll: false,
      smartButtonMaxItems: 4,
      buttonClasses: "btn btn-info",
      smartButtonTextConverter: function (itemText) {
        return itemText;
      }
    };

    this.languages = [
      {"code":"ab","label":"Abkhaz","nativeName":"аҧсуа"},
      {"code":"aa","label":"Afar","nativeName":"Afaraf"},
      {"code":"af","label":"Afrikaans","nativeName":"Afrikaans"},
      {"code":"ak","label":"Akan","nativeName":"Akan"},
      {"code":"sq","label":"Albanian","nativeName":"Shqip"},
      {"code":"am","label":"Amharic","nativeName":"አማርኛ"},
      {"code":"ar","label":"Arabic","nativeName":"العربية"},
      {"code":"an","label":"Aragonese","nativeName":"Aragonés"},
      {"code":"hy","label":"Armenian","nativeName":"Հայերեն"},
      {"code":"as","label":"Assamese","nativeName":"অসমীয়া"},
      {"code":"av","label":"Avaric","nativeName":"авар мацӀ, магӀарул мацӀ"},
      {"code":"ae","label":"Avestan","nativeName":"avesta"},
      {"code":"ay","label":"Aymara","nativeName":"aymar aru"},
      {"code":"az","label":"Azerbaijani","nativeName":"azərbaycan dili"},
      {"code":"bm","label":"Bambara","nativeName":"bamanankan"},
      {"code":"ba","label":"Bashkir","nativeName":"башҡорт теле"},
      {"code":"eu","label":"Basque","nativeName":"euskara, euskera"},
      {"code":"be","label":"Belarusian","nativeName":"Беларуская"},
      {"code":"bn","label":"Bengali","nativeName":"বাংলা"},
      {"code":"bh","label":"Bihari","nativeName":"भोजपुरी"},
      {"code":"bi","label":"Bislama","nativeName":"Bislama"},
      {"code":"bs","label":"Bosnian","nativeName":"bosanski jezik"},
      {"code":"br","label":"Breton","nativeName":"brezhoneg"},
      {"code":"bg","label":"Bulgarian","nativeName":"български език"},
      {"code":"my","label":"Burmese","nativeName":"ဗမာစာ"},
      {"code":"ca","label":"Catalan; Valencian","nativeName":"Català"},
      {"code":"ch","label":"Chamorro","nativeName":"Chamoru"},
      {"code":"ce","label":"Chechen","nativeName":"нохчийн мотт"},
      {"code":"ny","label":"Chichewa; Chewa; Nyanja","nativeName":"chiCheŵa, chinyanja"},
      {"code":"zh","label":"Chinese","nativeName":"中文 (Zhōngwén), 汉语, 漢語"},
      {"code":"cv","label":"Chuvash","nativeName":"чӑваш чӗлхи"},
      {"code":"kw","label":"Cornish","nativeName":"Kernewek"},
      {"code":"co","label":"Corsican","nativeName":"corsu, lingua corsa"},
      {"code":"cr","label":"Cree","nativeName":"ᓀᐦᐃᔭᐍᐏᐣ"},
      {"code":"hr","label":"Croatian","nativeName":"hrvatski"},
      {"code":"cs","label":"Czech","nativeName":"česky, čeština"},
      {"code":"da","label":"Danish","nativeName":"dansk"},
      {"code":"dv","label":"Divehi; Dhivehi; Maldivian;","nativeName":"ދިވެހި"},
      {"code":"nl","label":"Dutch","nativeName":"Nederlands, Vlaams"},
      {"code":"en","label":"English","nativeName":"English"},
      {"code":"eo","label":"Esperanto","nativeName":"Esperanto"},
      {"code":"et","label":"Estonian","nativeName":"eesti, eesti keel"},
      {"code":"ee","label":"Ewe","nativeName":"Eʋegbe"},
      {"code":"fo","label":"Faroese","nativeName":"føroyskt"},
      {"code":"fj","label":"Fijian","nativeName":"vosa Vakaviti"},
      {"code":"fi","label":"Finnish","nativeName":"suomi, suomen kieli"},
      {"code":"fr","label":"French","nativeName":"français, langue française"},
      {"code":"ff","label":"Fula; Fulah; Pulaar; Pular","nativeName":"Fulfulde, Pulaar, Pular"},
      {"code":"gl","label":"Galician","nativeName":"Galego"},
      {"code":"ka","label":"Georgian","nativeName":"ქართული"},
      {"code":"de","label":"German","nativeName":"Deutsch"},
      {"code":"el","label":"Greek, Modern","nativeName":"Ελληνικά"},
      {"code":"gn","label":"Guaraní","nativeName":"Avañeẽ"},
      {"code":"gu","label":"Gujarati","nativeName":"ગુજરાતી"},
      {"code":"ht","label":"Haitian; Haitian Creole","nativeName":"Kreyòl ayisyen"},
      {"code":"ha","label":"Hausa","nativeName":"Hausa, هَوُسَ"},
      {"code":"he","label":"Hebrew (modern)","nativeName":"עברית"},
      {"code":"hz","label":"Herero","nativeName":"Otjiherero"},
      {"code":"hi","label":"Hindi","nativeName":"हिन्दी, हिंदी"},
      {"code":"ho","label":"Hiri Motu","nativeName":"Hiri Motu"},
      {"code":"hu","label":"Hungarian","nativeName":"Magyar"},
      {"code":"ia","label":"Interlingua","nativeName":"Interlingua"},
      {"code":"id","label":"Indonesian","nativeName":"Bahasa Indonesia"},
      {"code":"ie","label":"Interlingue","nativeName":"Originally called Occidental; then Interlingue after WWII"},
      {"code":"ga","label":"Irish","nativeName":"Gaeilge"},
      {"code":"ig","label":"Igbo","nativeName":"Asụsụ Igbo"},
      {"code":"ik","label":"Inupiaq","nativeName":"Iñupiaq, Iñupiatun"},
      {"code":"io","label":"Ido","nativeName":"Ido"},
      {"code":"is","label":"Icelandic","nativeName":"Íslenska"},
      {"code":"it","label":"Italian","nativeName":"Italiano"},
      {"code":"iu","label":"Inuktitut","nativeName":"ᐃᓄᒃᑎᑐᑦ"},
      {"code":"ja","label":"Japanese","nativeName":"日本語 (にほんご／にっぽんご)"},
      {"code":"jv","label":"Javanese","nativeName":"basa Jawa"},
      {"code":"kl","label":"Kalaallisut, Greenlandic","nativeName":"kalaallisut, kalaallit oqaasii"},
      {"code":"kn","label":"Kannada","nativeName":"ಕನ್ನಡ"},
      {"code":"kr","label":"Kanuri","nativeName":"Kanuri"},
      {"code":"ks","label":"Kashmiri","nativeName":"कश्मीरी, كشميري‎"},
      {"code":"kk","label":"Kazakh","nativeName":"Қазақ тілі"},
      {"code":"km","label":"Khmer","nativeName":"ភាសាខ្មែរ"},
      {"code":"ki","label":"Kikuyu, Gikuyu","nativeName":"Gĩkũyũ"},
      {"code":"rw","label":"Kinyarwanda","nativeName":"Ikinyarwanda"},
      {"code":"ky","label":"Kirghiz, Kyrgyz","nativeName":"кыргыз тили"},
      {"code":"kv","label":"Komi","nativeName":"коми кыв"},
      {"code":"kg","label":"Kongo","nativeName":"KiKongo"},
      {"code":"ko","label":"Korean","nativeName":"한국어 (韓國語), 조선말 (朝鮮語)"},
      {"code":"ku","label":"Kurdish","nativeName":"Kurdî, كوردی‎"},
      {"code":"kj","label":"Kwanyama, Kuanyama","nativeName":"Kuanyama"},
      {"code":"la","label":"Latin","nativeName":"latine, lingua latina"},
      {"code":"lb","label":"Luxembourgish, Letzeburgesch","nativeName":"Lëtzebuergesch"},
      {"code":"lg","label":"Luganda","nativeName":"Luganda"},
      {"code":"li","label":"Limburgish, Limburgan, Limburger","nativeName":"Limburgs"},
      {"code":"ln","label":"Lingala","nativeName":"Lingála"},
      {"code":"lo","label":"Lao","nativeName":"ພາສາລາວ"},
      {"code":"lt","label":"Lithuanian","nativeName":"lietuvių kalba"},
      {"code":"lu","label":"Luba-Katanga","nativeName":""},
      {"code":"lv","label":"Latvian","nativeName":"latviešu valoda"},
      {"code":"gv","label":"Manx","nativeName":"Gaelg, Gailck"},
      {"code":"mk","label":"Macedonian","nativeName":"македонски јазик"},
      {"code":"mg","label":"Malagasy","nativeName":"Malagasy fiteny"},
      {"code":"ms","label":"Malay","nativeName":"bahasa Melayu, بهاس ملايو‎"},
      {"code":"ml","label":"Malayalam","nativeName":"മലയാളം"},
      {"code":"mt","label":"Maltese","nativeName":"Malti"},
      {"code":"mi","label":"Māori","nativeName":"te reo Māori"},
      {"code":"mr","label":"Marathi (Marāṭhī)","nativeName":"मराठी"},
      {"code":"mh","label":"Marshallese","nativeName":"Kajin M̧ajeļ"},
      {"code":"mn","label":"Mongolian","nativeName":"монгол"},
      {"code":"na","label":"Nauru","nativeName":"Ekakairũ Naoero"},
      {"code":"nv","label":"Navajo, Navaho","nativeName":"Diné bizaad, Dinékʼehǰí"},
      {"code":"nb","label":"Norwegian Bokmål","nativeName":"Norsk bokmål"},
      {"code":"nd","label":"North Ndebele","nativeName":"isiNdebele"},
      {"code":"ne","label":"Nepali","nativeName":"नेपाली"},
      {"code":"ng","label":"Ndonga","nativeName":"Owambo"},
      {"code":"nn","label":"Norwegian Nynorsk","nativeName":"Norsk nynorsk"},
      {"code":"no","label":"Norwegian","nativeName":"Norsk"},
      {"code":"ii","label":"Nuosu","nativeName":"ꆈꌠ꒿ Nuosuhxop"},
      {"code":"nr","label":"South Ndebele","nativeName":"isiNdebele"},
      {"code":"oc","label":"Occitan","nativeName":"Occitan"},
      {"code":"oj","label":"Ojibwe, Ojibwa","nativeName":"ᐊᓂᔑᓈᐯᒧᐎᓐ"},
      {"code":"om","label":"Oromo","nativeName":"Afaan Oromoo"},
      {"code":"or","label":"Oriya","nativeName":"ଓଡ଼ିଆ"},
      {"code":"os","label":"Ossetian, Ossetic","nativeName":"ирон æвзаг"},
      {"code":"pa","label":"Panjabi, Punjabi","nativeName":"ਪੰਜਾਬੀ, پنجابی‎"},
      {"code":"pi","label":"Pāli","nativeName":"पाऴि"},
      {"code":"fa","label":"Persian","nativeName":"فارسی"},
      {"code":"pl","label":"Polish","nativeName":"polski"},
      {"code":"ps","label":"Pashto, Pushto","nativeName":"پښتو"},
      {"code":"pt","label":"Portuguese","nativeName":"Português"},
      {"code":"qu","label":"Quechua","nativeName":"Runa Simi, Kichwa"},
      {"code":"rm","label":"Romansh","nativeName":"rumantsch grischun"},
      {"code":"rn","label":"Kirundi","nativeName":"kiRundi"},
      {"code":"ro","label":"Romanian, Moldavian, Moldovan","nativeName":"română"},
      {"code":"ru","label":"Russian","nativeName":"русский язык"},
      {"code":"sa","label":"Sanskrit (Saṁskṛta)","nativeName":"संस्कृतम्"},
      {"code":"sc","label":"Sardinian","nativeName":"sardu"},
      {"code":"sd","label":"Sindhi","nativeName":"सिन्धी, سنڌي، سندھی‎"},
      {"code":"se","label":"Northern Sami","nativeName":"Davvisámegiella"},
      {"code":"sm","label":"Samoan","nativeName":"gagana faa Samoa"},
      {"code":"sg","label":"Sango","nativeName":"yângâ tî sängö"},
      {"code":"sr","label":"Serbian","nativeName":"српски језик"},
      {"code":"gd","label":"Scottish Gaelic; Gaelic","nativeName":"Gàidhlig"},
      {"code":"sn","label":"Shona","nativeName":"chiShona"},
      {"code":"si","label":"Sinhala, Sinhalese","nativeName":"සිංහල"},
      {"code":"sk","label":"Slovak","nativeName":"slovenčina"},
      {"code":"sl","label":"Slovene","nativeName":"slovenščina"},
      {"code":"so","label":"Somali","nativeName":"Soomaaliga, af Soomaali"},
      {"code":"st","label":"Southern Sotho","nativeName":"Sesotho"},
      {"code":"es","label":"Spanish; Castilian","nativeName":"español, castellano"},
      {"code":"su","label":"Sundanese","nativeName":"Basa Sunda"},
      {"code":"sw","label":"Swahili","nativeName":"Kiswahili"},
      {"code":"ss","label":"Swati","nativeName":"SiSwati"},
      {"code":"sv","label":"Swedish","nativeName":"svenska"},
      {"code":"ta","label":"Tamil","nativeName":"தமிழ்"},
      {"code":"te","label":"Telugu","nativeName":"తెలుగు"},
      {"code":"tg","label":"Tajik","nativeName":"тоҷикӣ, toğikī, تاجیکی‎"},
      {"code":"th","label":"Thai","nativeName":"ไทย"},
      {"code":"ti","label":"Tigrinya","nativeName":"ትግርኛ"},
      {"code":"bo","label":"Tibetan Standard, Tibetan, Central","nativeName":"བོད་ཡིག"},
      {"code":"tk","label":"Turkmen","nativeName":"Türkmen, Түркмен"},
      {"code":"tl","label":"Tagalog","nativeName":"Wikang Tagalog, ᜏᜒᜃᜅ᜔ ᜆᜄᜎᜓᜄ᜔"},
      {"code":"tn","label":"Tswana","nativeName":"Setswana"},
      {"code":"to","label":"Tonga (Tonga Islands)","nativeName":"faka Tonga"},
      {"code":"tr","label":"Turkish","nativeName":"Türkçe"},
      {"code":"ts","label":"Tsonga","nativeName":"Xitsonga"},
      {"code":"tt","label":"Tatar","nativeName":"татарча, tatarça, تاتارچا‎"},
      {"code":"tw","label":"Twi","nativeName":"Twi"},
      {"code":"ty","label":"Tahitian","nativeName":"Reo Tahiti"},
      {"code":"ug","label":"Uighur, Uyghur","nativeName":"Uyƣurqə, ئۇيغۇرچە‎"},
      {"code":"uk","label":"Ukrainian","nativeName":"українська"},
      {"code":"ur","label":"Urdu","nativeName":"اردو"},
      {"code":"uz","label":"Uzbek","nativeName":"zbek, Ўзбек, أۇزبېك‎"},
      {"code":"ve","label":"Venda","nativeName":"Tshivenḓa"},
      {"code":"vi","label":"Vietnamese","nativeName":"Tiếng Việt"},
      {"code":"vo","label":"Volapük","nativeName":"Volapük"},
      {"code":"wa","label":"Walloon","nativeName":"Walon"},
      {"code":"cy","label":"Welsh","nativeName":"Cymraeg"},
      {"code":"wo","label":"Wolof","nativeName":"Wollof"},
      {"code":"fy","label":"Western Frisian","nativeName":"Frysk"},
      {"code":"xh","label":"Xhosa","nativeName":"isiXhosa"},
      {"code":"yi","label":"Yiddish","nativeName":"ייִדיש"},
      {"code":"yo","label":"Yoruba","nativeName":"Yorùbá"},
      {"code":"za","label":"Zhuang, Chuang","nativeName":"Saɯ cueŋƅ, Saw cuengh"}
    ];

    userService.getUserData(function(data) {
      console.log(data);
      scope.userData = data;
      scope.userData.dob = new Date(data.dob);

      //set languages
      scope.selectedLanguages = [];
      if (scope.userData.languages && scope.userData.languages.length){
        scope.userData.languages.forEach(function(userLanguage){
          scope.selectedLanguages.push(
            _.find(scope.languages, function(languageInfo){
              return userLanguage === languageInfo.label;
            })
          );
        });
      }
      else{
        scope.selectedLanguages.push({"code":"en","label":"English","nativeName":"English"});
      }
    });

    this.goToNextRegPage = function() {
      scope.userData.languages = [];
      scope.selectedLanguages.forEach(function(lan) {
        scope.userData.languages.push(lan.label);
      });
      if(!scope.userData.displayName || scope.userData.displayName.length<4) {
        scope.missingDisplayName = true;
      }
      else {
        userService.setUserData(scope.userData);
        $location.path("/accountsetup2");
      }
    };
  });
