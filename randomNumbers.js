// Generates an array of 10,000 numbers in random order each time it is run.
// Each number in the list must be unique and be between 1 and 10,000 (inclusive).

// constraints:
// numbers do not repeat
// currently numbers are presented as array
// currently array prints to console


const randomToTenK = function() {
  let i = 1;
  let array = [];
  let j = 10000;
  let randomArray = [];
  let randomNumber;
  
  // create initial array, 1 to 10,000
  do {
    array.push(i);
    i++;
  } while (i <= 10000);
  
  // take initial array, and make it random
  do {
    randomNumber = array[Math.floor(Math.random() * array.length)];
  
    if (!randomArray.includes(randomNumber)) {
      randomArray.push(randomNumber);
      j--;
    }
  } while (j >= 1);
  

  return randomArray;
};
// uncomment below if you don't want to see the actual array
console.log(randomToTenK());

module.exports = randomToTenK;