//Generate cat names.

// Cat names found on
//http://www.huffingtonpost.com/richard-kronick/-punny-and-funny-cat-name_b_8661176.html
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

var nameArray = [];
var numCats = 10;
var catDisplay = $('#cat-display');
var counterArray = [];
var currentCat = 0;
var message = $("#message");
var totalClicks = 0;

// Create name buttons for each cat.

for (var i = 0; i < numCats; i++) {
  counterArray.push(0);
  var indexChoice = Math.floor(Math.random() * nameChoices.length);
  var name = nameChoices[indexChoice];
  nameArray.push(name);
  // Once picked, the name is taken out of the choices.
  nameChoices.splice(indexChoice, 1);
  var catId = "cat" + i + "";
  $('#cat-list ul').append('<li id="' + catId + '">' + name + '</li>');

  // Display cat box for selected cat when respective name is clicked.
  $('#' + catId).click((function(iCopy) {
    return function() {
      catDisplay.empty();
      catDisplay.append("<h3>" + nameArray[iCopy] + "</h3>");
      catDisplay.append("<img src='img/cat" + iCopy + ".jpg' alt='cat image " + iCopy + "''>");
      catDisplay.append("<a class='img-source' href='" + imageSourceArray[iCopy] + "'>" + imageSourceArray[iCopy] + "</a>");
      counterArray[iCopy]++;
      catDisplay.append("<h3 id='counter" + iCopy + "' class='counter-num'>" + counterArray[iCopy] + "</h3>");
      currentCat = iCopy;
      totalClicks++;
      };
    })(i));
}

var imageSourceArray = ["https://commons.wikimedia.org/wiki/File:AfricanWildCat.jpg",
"https://commons.wikimedia.org/wiki/File:Indian_Cat_pic.jpg",
"https://commons.wikimedia.org/wiki/File:Kittyply_edit1.jpg",
"https://commons.wikimedia.org/wiki/File:Gato_enervado_pola_presencia_dun_can.jpg",
"https://commons.wikimedia.org/wiki/File:Three-hour-old-kitten.jpg",
"https://commons.wikimedia.org/wiki/File:Black_cat_being_snowed_on.jpg",
"https://commons.wikimedia.org/wiki/File:Feral_cat_Virginia_crop.jpg",
"https://commons.wikimedia.org/wiki/File:Shaded_silver_Persian_Cat_Missionhill_Cosmic_Rainstorm.jpg",
"https://commons.wikimedia.org/wiki/File:Brown_Exotic_Shorthair_Kitten.jpg",
"https://commons.wikimedia.org/wiki/File:Balinese_blue_lynx_point.jpg"];

// Display messages at certain amounts of clicking.
var createMessage = function() {
  if (totalClicks < 10) {
    message.html("<h2>And so the path begins to become a cat click-a-holic!</h2>");
  }

  else if (totalClicks < 25) {
    message.html("<h2>Isn't it so satisfying to click on those cats?</h2>");
  }

  else if (totalClicks < 40) {
    message.html("<h2>What would you rather be doing with your life right now?<br> Probably nothing more important than clicking on these cats.</h2>")
  }

  else if (totalClicks > 40) {
    message.html("<h2>You win! You are on your way to become a cat click-a-holic!</h2>");
  }
}

// Main click handler for clicking on the cat boxes.
catDisplay.click(function() {
  counterArray[currentCat]++;
  $(".counter-num").text(counterArray[currentCat]);
  totalClicks++;
  createMessage();
});
