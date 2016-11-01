
var cat_clicker = function() {
  var counter1 = $("#counter1");
  var counter2 = $("#counter2");
  var counter3 = $("#counter3");
  var counter4 = $("#counter4");
  var message = $("#message");
  var totalClicks = 0;

  // Add names on top of each cat image.
  // Cat names found on http://www.huffingtonpost.com/richard-kronick/-punny-and-funny-cat-name_b_8661176.html
  var nameArray = ["Kitty Poppins", "Oprah Whisker", "Katy Purry", "Fleas Witherspoon"];
  var catBoxes = $(".cat");

  catBoxes.each(function(index) {
    $( this ).prepend( "<h3>" + nameArray[index] + "</h3>" );
    });

  $('#cat1').click(function(e) {;
    var currentCounter1 = counter1.html();
    currentCounter1++;
    totalClicks++;
    createMessage();
    counter1.html(currentCounter1);
  });

  $('#cat2').click(function(e) {
    var currentCounter2 = counter2.html();
    currentCounter2++;
    totalClicks++;
    createMessage();
    counter2.html(currentCounter2);
  });

  $('#cat3').click(function(e) {
    var currentCounter3 = counter3.html();
    currentCounter3++;
    totalClicks++;
    createMessage();
    counter3.html(currentCounter3);
  });

  $('#cat4').click(function(e) {
    var currentCounter4 = counter4.html();
    currentCounter4++;
    totalClicks++;
    createMessage();
    counter4.html(currentCounter4);
  });

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
};

cat_clicker();
