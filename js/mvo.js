// Code for model:

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

var catArrayGenerator = function(catNum) {
    var cats = [];
    for (var i = 0; i < catNum; i++) {
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
    return cats;
  };

var model = {
  cats: catArrayGenerator(10),
  chosenCat: null,
  totalClicks: 0,
  admin: false
}

// Code for controller AKA "octopus"
var controller = {
  init: function() {
    viewList.init();
    model.chosenCat = model.cats[0];
    viewCat.init();
    viewAdmin.init();
    viewAdmin.displayAdmin();
  },
  getChosenCat: function() {
    return model.chosenCat;
  },
  getCats: function() {
    return model.cats;
  },
  setChosenCat: function(cat) {
    model.chosenCat = cat;
    viewCat.showCat();
  },
  incrementCounter: function() {
    model.chosenCat.counter++;
    model.totalClicks++;
    viewCat.showCat();
    viewMessage.checkMessage();
  },
  getTotalClicks: function() {
    return model.totalClicks;
  },
  turnOnAdmin: function() {
    model.admin = true;
    viewAdmin.displayAdmin();
  },
  turnOffAdmin: function() {
    model.admin = false;
    viewAdmin.displayAdmin();
  },
  adminChecker: function() {
    return model.admin;
  },
  saveChanges: function(newName, newImg, newClicks) {
    model.chosenCat.name = newName;

    // If image source changed, change the image displayed for the cat, as well
    // as its link. Otherwise, just leave the image as the local one.
    if (model.chosenCat.imageSource != newImg) {
      model.chosenCat.image = newImg;
    }
    model.chosenCat.imageSource = newImg;
    var clickDifference = newClicks - model.chosenCat.counter;
    model.chosenCat.counter = newClicks;
    model.totalClicks += clickDifference;
    viewCat.showCat();
  },
  refreshAdmin: function() {
    viewAdmin.displayAdmin();
  }

}

// Code for the 4 views: list, cat box, message and admin
var viewList = {
  init: function() {
    var catList = $("#cat-list ul");
    var catsArray = controller.getCats();
    for (var i = 0; i < catsArray.length; i++) {
      var cat = catsArray[i];
      var catLi = $("<li></li>");
      catLi.text(cat.name);
      catList.append(catLi);
      $(catLi).click(function(catCopy) {
        return function() {
          controller.setChosenCat(catCopy);
          controller.refreshAdmin();
          }
      }(cat));
    }
  }
}

var viewCat = {
  init: function() {
    this.showCat();
    this.catImage = $("#cat-img");
    this.catImage.click(function() {
      controller.incrementCounter();
    });
  },

  showCat: function() {
    var chosenCat = controller.getChosenCat();
    this.catName = $("#cat-name");
    this.catImage = $("#cat-img");
    this.catImageSource = $(".img-source a");
    this.catCounter = $("#counter-num");
    this.catName.text(chosenCat.name);
    this.catImage.attr("src", chosenCat.image);
    this.catImageSource.attr("href", chosenCat.imageSource);
    this.catImageSource.text(chosenCat.imageSource);
    this.catCounter.text(chosenCat.counter);
  }
}

var viewMessage = {
  checkMessage: function() {
    var message = $("#message");
    var totalClicks = controller.getTotalClicks();
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
}

var viewAdmin = {
  init: function() {
    $('#admin-button').click(function() {
      console.log("in admin click handler function");
      if (controller.adminChecker() == false) {
        controller.turnOnAdmin();
      }
      else {
        controller.turnOffAdmin();
      }
    })
  },
  displayAdmin: function() {

    adminSection = $("#admin-section");
    adminSection.empty();
    if (controller.adminChecker() == true) {
      var chosenCat = controller.getChosenCat();
      adminSection.css('background-color', 'white');
      adminSection = $("#admin-section");
      var nameInput = "Name: <input id='name-input' type='text' value='" + chosenCat.name + "'></input>";
      var imgInput = "ImgURL: <input id='img-input' type='url' value='" + chosenCat.imageSource + "'></input>";
      var clicksInput = "#Clicks: <input id='clicks-input' type='number' value='" + chosenCat.counter + "'></input>";
      var saveButton = "<button id='save' class='admin-button'>Save</button>";
      var cancelButton = "<button id='cancel' class='admin-button'>Cancel</button>";
      adminSection.append(nameInput, imgInput, clicksInput, saveButton, cancelButton);
      $('#save').click(function() {
        controller.saveChanges($('#name-input').val(), $('#img-input').val(), $('#clicks-input').val());
      });
      $('#cancel').click(function() {
        // Reset the values in the inputs to the originals:
        $('#name-input').val(chosenCat.name);
        $('#img-input').val(chosenCat.imageSource);
        $('#clicks-input').val(chosenCat.counter);
        // Alternatively, to hide the admin area instead, uncomment below:
        //controller.turnOffAdmin();
      })
    }

    else {
      adminSection.empty();
      adminSection.css('background-color', '#F950AC');
    }
  }
}

controller.init();
