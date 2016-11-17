var Cat = function() {
  this.clickCount = ko.observable(0);
  this.name = ko.observable("Elsa");
  this.imgSrc = ko.observable("img/434164568_fea0ad4013_z.jpg");
  this.imgAttribution = ko.observable("https://www.flickr.com/photos/bigtallguy/434164568");
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
    else {
      return "senior";
    }
    }, this);
  this.nicknames = ko.observableArray(['Ali McClaw',
  'Angelicat',
  'Cat Benatar',
  'Catalie Portman',]);
};

var viewModel = function() {
  var self = this;
  self.currentCat = ko.observable(new Cat());

  self.incrementCounter = function() {
    self.currentCat().clickCount(self.currentCat().clickCount() + 1);

  }
}

ko.applyBindings(new viewModel());
