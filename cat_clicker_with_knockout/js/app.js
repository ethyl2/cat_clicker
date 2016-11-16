var viewModel = function() {
  this.clickCount = ko.observable(0);
  this.name = ko.observable("Elsa");
  this.imgSrc = ko.observable("img/434164568_fea0ad4013_z.jpg");
  this.imgAttribution = ko.observable("https://www.flickr.com/photos/bigtallguy/434164568");
  this.level = ko.computed(function() {
    if (this.clickCount() < 10) {
        return "newborn";
      }
    else if (this.clickCount() < 20) {
      return "infant";
    }
    else if (this.clickCount() < 30) {
      return "toddler";
    }
    else if (this.clickCount() < 40) {
      return "child";
    }
    else if (this.clickCount() < 50) {
      return "teen";
    }
    else if (this.clickCount() < 60) {
      return "young adult";
    }
    else if (this.clickCount() < 70) {
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

  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
  }
}

ko.applyBindings(new viewModel());
