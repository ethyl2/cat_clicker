
// This function is purposely buggy, to log only the final value for num, no
// matter which number is clicked on.

var closureTest1 = function() {
  // clear the screen for testing
  document.body.innerHTML = '';
  document.body.style.background="white";

  var nums = [1,2,3,4,5,6,7,8];

  // Let's loop over the numbers in our array
  for (var i = 0; i < nums.length; i++) {

      // This is the number we're on...
      var num = nums[i];

      // We're creating a DOM element for the number
      var elem = document.createElement('div');
      elem.textContent = num;

      // ... and when we click, alert the value of `num`
      elem.addEventListener('click', function() {
          console.log(num);
      });

      // finally, let's add this element to the document
      document.body.appendChild(elem);
  };
};

// This function below fixes the first one, so that the value of num is
// saved in numCopy during the iteration and the current value will be logged
// when its corresponding number is clicked on.

var closureTest2 = function() {
  // clear the screen for testing
  document.body.innerHTML = '';

  var nums = [1,2,3,4,5,6,7,8];

  // Let's loop over the numbers in our array
  for (var i = 0; i < nums.length; i++) {

      // This is the number we're on...
      var num = nums[i];

      // We're creating a DOM element for the number
      var elem = document.createElement('div');
      elem.textContent = num;

      // ... and when we click, alert the value of `num`
      elem.addEventListener('click', (function(numCopy) {
          return function() {
              console.log(numCopy);
          };
      })(num)); //calls the inner function right now 

      document.body.appendChild(elem);
  };
}

closureTest2();
