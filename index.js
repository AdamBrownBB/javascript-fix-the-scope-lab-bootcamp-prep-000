var animal = 'dog'

function myAnimal() {
  return animal;
}

// fix this by changing the variable inside the function

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  
  
  var animal = 'cat';
  return animal;
}

//

const two = 2;
function add2(n) {
  return n + two;

  // Feel free to move things around!
  
}


var funkyFunction = function() {
  return function() {
    return "FUNKY!";
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.

/* set theFunk to call the funkyFunction first, then set it equal to it calling itself, so that is now equal to what funkyFunction has already returned becaue it has been run (not just returned)
*/

 var theFunk = funkyFunction();
 theFunk = theFunk();
 
 

 
 
 
 
