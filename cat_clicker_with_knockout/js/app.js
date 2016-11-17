// Cat names found on
//http://www.huffingtonpost.com/richard-kronick/-punny-and-funny-cat-name_b_8661176.html
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
'Your Majesty',
//from http://www.petinsurance.com/wackypetnames/2015-cat-names/
'Catrick Swayze',
'Chakkachip',
'Cheddarbob',
'Chicklet Chicken Little',
'Clark Cat Super Kitty',
'Dizzy Heart Cow',
'Dudley Dowrong',
'Dusty Mop',
'Edward Scissor Paws',
'Fezzywig',
'Furball Tinytot',
'Fuzzbucket',
'George W Cat',
'Harry Mustard',
'Johnnie On The Spot',
'Lambeau Batman',
'Lazy Destroyer',
'Madame La-Tea-Ta De La Fontaine',
'Morpholomew',
'Mr. Puddin La Pew',
'Ms. Tuftytoes',
'Phatty Meow Meow',
'Pretty Floyd Boy The Second1',
'Razmin Jazmin',
'Rikki Tikki Tavi',
'Rumblemuffin',
'Six Pack',
'Smooth Operator Eddie',
'Thelonious Monkey',
'Thumbs Hemingway',
'Tigress Tasha',
'Toby Turbo',
'Tommy Twotimes',
'Trinity Sweetypaws',
'Tuxedo Burrito Camino'];

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
  source: "https://commons.wikimedia.org/wiki/File:Balinese_blue_lynx_point.jpg"},
  {catImage: "img/434164568_fea0ad4013_z.jpg",
  source: "https://www.flickr.com/photos/bigtallguy/434164568"}];

var catArrayGenerator = function(catNum) {
    var cats = [];
    for (var i = 0; i < catNum; i++) {
      // Choose a random index of the name choices array:
      var indexChoice = Math.floor(Math.random() * nameChoices.length);
      var indexNickname0 = Math.floor(Math.random() * nameChoices.length);
      var indexNickname1 = Math.floor(Math.random() * nameChoices.length);
      var indexNickname2 = Math.floor(Math.random() * nameChoices.length);
      var cat = {
        name: nameChoices[indexChoice],
        imgSrc: imageSourceArray[i % imageSourceArray.length].catImage,
        imgAttribution: imageSourceArray[i % imageSourceArray.length].source,
        nicknames: [nameChoices[indexNickname0], nameChoices[indexNickname1], nameChoices[indexNickname2]]
      }
      cats.push(cat);
      nameChoices.splice(indexChoice, 1);
      nameChoices.splice(indexNickname0, 1);
      nameChoices.splice(indexNickname1, 1);
      nameChoices.splice(indexNickname2, 1);
    }
    return cats;
  };

var initialCats = catArrayGenerator(10);
console.log(initialCats[0]);


var Cat = function(data) {
  this.clickCount = ko.observable(0);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.imgAttribution = ko.observable(data.imgAttribution);
  this.level = ko.computed(function() {
    var level;
    var clicks = this.clickCount();
    if (clicks < 10) {
        return "newborn";
      }
    else if (clicks < 20) {
      return "infant";
    }
    else if (clicks < 30) {
      return "toddler";
    }
    else if (clicks < 40) {
      return "child";
    }
    else if (clicks < 50) {
      return "teen";
    }
    else if (clicks < 60) {
      return "young adult";
    }
    else if (clicks < 70) {
      return "adult";
    }
    else if (clicks < 80){
      return "senior";
    }
    else {
      return "ancient one";
    }
    }, this);
  this.nicknames = ko.observableArray(data.nicknames);
};

var viewModel = function() {
  var self = this;

  this.catList = ko.observableArray([]);

  initialCats.forEach(function(catItem) {
    self.catList.push(new Cat(catItem));
  });

  self.currentCat = ko.observable(this.catList()[0]);


  self.incrementCounter = function() {
    self.currentCat().clickCount(self.currentCat().clickCount() + 1);

  }
}

ko.applyBindings(new viewModel());
