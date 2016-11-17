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
  self.currentCat = ko.observable(new Cat({
    name: "Elsa",
    imgSrc: "img/434164568_fea0ad4013_z.jpg",
    imgAttribution: "https://www.flickr.com/photos/bigtallguy/434164568",
    nicknames: ['Ali McClaw',
    'Angelicat',
    'Cat Benatar',
    'Catalie Portman',]
  }));

  self.incrementCounter = function() {
    self.currentCat().clickCount(self.currentCat().clickCount() + 1);

  }
}

ko.applyBindings(new viewModel());
