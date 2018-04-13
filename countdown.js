var countdownGenerator = function (x) {
  /* your code here */
   x += 1;
  return function() {
    x -= 1;
    if (x === 0) {
      return console.log("Blast Off!");
    }
    else if (x < 0){
      return console.log("Rockets already gone, bub!");
    }
    else{
      return console.log("T-minus " + x + "...");
    }
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!