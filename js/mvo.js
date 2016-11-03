// Code for model:

// Possible cat names:
var nameChoices = ['Ali Cat',
'Ali McClaw',
'Angelicat',
'Cat Benatar',
'Catalie Portman',
'Catsy Cline',
'Chairwoman Miao',
'Cindy Clawford',
'Clawdia',
'Dolly Pawton',
'Purrfessor X',
'Mark Pawburg',
'Cleocatra',
'Barthal-a-mew',
'Ferris Mewler',
'Marilyn Meow',
'Demi Meower',
'Empress',
'Fleas Witherspoon',
'Halley Purry',
'Hello Kitty',
'Isabellick',
'Jennifurr',
'Jessicat',
'Katy Purry',
'Kitty Poppins',
'Madam X',
'Meowly Cyrus',
'Oprah Whisker',
'Pawdrey Hepburn',
'Puma Thurman',
'Samantail',
'Tabbytha',
'Veronicat',
'Whispurr',
'Anderson Pooper',
'Bing Clawsby',
'Bob Meowerly',
'Butch Catsidy',
'Cat Damon',
'Cat Sajak',
'Cat Stevens',
'Dr. Sheldon Pooper',
'Scarlett O\'Hairball',
'MeWow',
'Barbara Bushytail',
'Catpernicus',
'Catrick Swayze',
'Chairman Meow',
'Dalai Clawma',
'David Meowie',
'Elvis Catsley',
'Fidel Catstro',
'Fuzz Aldrin',
'Genghis Cat',
'Hairy Potter',
'Jean Luc Picat',
'Jude Paw',
'Leonardo DaFuzzy',
'Lucifurr',
'Luke Skywhisker',
'Meowses',
'Mr. Meowgi',
'Oedipuss',
'Picatso',
'Santa Claws',
'The Great Catsby',
'William Shakespaw',
'Cameow',
'Catapult',
'Catastrophe',
'Catillac',
'Cat-man-do',
'Catsanova',
'Catsup',
'Cat-titude',
'Catzilla',
'Clawsome',
'Domesticat',
'Fuzzinator',
'Galacticat',
'iCat',
'Just Kittin',
'Kitkat',
'Kit-teacup',
'Kittin Around',
'Lickers',
'Megabyte',
'Meowsical',
'Miraclaw',
'Octopuss',
'Pawssanova',
'Puddy Tat',
'Purrfect',
'Purrson',
'The Boss',
'Thunder Paws',
'Tweedledee',
'Tweedledum',
'Vegetarian',
'Whisker',
'Winky',
'Your Highness',
'Your Majesty'];

// Sources of the images used:
var imageSourceArray = [
  {catImage: "img/cat0.jpg",
  source: "https://commons.wikimedia.org/wiki/File:AfricanWildCat.jpg"},
  {catImage: "img/cat1.jpg",
  source: "https://commons.wikimedia.org/wiki/File:Indian_Cat_pic.jpg"},
  {catImage: "img/cat2.jpg",
  source: "https://commons.wikimedia.org/wiki/File:Kittyply_edit1.jpg"},
  {catImage: "img/cat3.jpg",
  source: "https://commons.wikimedia.org/wiki/File:Gato_enervado_pola_presencia_dun_can.jpg"},
  {catImage: "img/cat4.jpg",
  source: "https://commons.wikimedia.org/wiki/File:Three-hour-old-kitten.jpg"},
  {catImage: "img/cat5.jpg",
  source: "https://commons.wikimedia.org/wiki/File:Black_cat_being_snowed_on.jpg"},
  {catImage: "img/cat6.jpg",
  source: "https://commons.wikimedia.org/wiki/File:Feral_cat_Virginia_crop.jpg"},
  {catImage: "img/cat7.jpg",
  source: "https://commons.wikimedia.org/wiki/File:Shaded_silver_Persian_Cat_Missionhill_Cosmic_Rainstorm.jpg"},
  {catImage: "img/cat8.jpg",
  source: "https://commons.wikimedia.org/wiki/File:Brown_Exotic_Shorthair_Kitten.jpg"},
  {catImage: "img/cat9.jpg",
  source: "https://commons.wikimedia.org/wiki/File:Balinese_blue_lynx_point.jpg"}];

var model = {
  init: function(catNum) {
    var cats = [];
    var num_cats = catNum;

    for (var i = 0; i < num_cats; i++) {
      // Choose a random index of the name choices array:
      var indexChoice = Math.floor(Math.random() * nameChoices.length);
      var cat = {
        name: nameChoices[indexChoice],
        counter: 0,
        image: imageSourceArray[i % imageSourceArray.length].catImage,
        imageSource: imageSourceArray[i % imageSourceArray.length].source
      }
      cats.push(cat);
      nameChoices.splice(indexChoice, 1);
    }
    console.log(cats);
    return cats;
  }
}

var controller = {
  init: function() {
    var catArray = model.init(10);
    viewList.init(catArray);
  }
}

var viewList = {
  init: function(catArray) {
    for (var i = 0; i < catArray.length; i++) {
      $("#cat-list ul").append("<li>" + catArray[i].name + "</li>");
    }
  }
}

controller.init();
