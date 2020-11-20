# Random Number Generator

## <u> Installation </u>
This program uses Mocha/Chai assertion libraries to ensure that the numbers returned (array) are of the proper number (length of array), hits every number from 1 to 10,000, and that there are no repeat numbers in the array returned. To install these depencencies, use <em> npm install </em> in the project directory.

## <u> To run: </u>
- In the Node terminal, use command node randomNumbers.js to see the array displayed.
- To run the test, use <em> npm test </em>.

### <u> About my process </u>
Breaking down how I solved this problem, the requirements given are: <em> "Please write a program that generates a list of 10,000 numbers in random order each time it is run. Each number in the list must be unique and be between 1 and 10,000 (inclusive)." </em>

In tackling any problem, I find it useful to identify unknowns, and if those aren't obvious, to jump in, as this can reveal the unknowns to be clarified - should I display numbers in a particular way? How do I verify that it's returning what I think it is (without doing so manually)?

Then, breaking the problem down into steps, go through a first solution. In this case, the solution goes as follows:
- Create an array that contains all of the required numbers using a loop.
- Take that array and mix it up using a random number generator for the index of the array, verifying along the way that numbers inserted into the array are not duplicated.
- Once that array reaches 10,000 in length, it is done.

Using Mocha/Chai assertion library testing framework, I verified that:

- An array is returned.
- The array length is 10,000.
- Every number in the original array (1-10,000) is contained in the randomized array.
- The numbers in the randomized array are not duplicated.

Overall, this was a fun little problem to solve, while giving the extra benefit of practicing using testing libraries to verify the function's behaviour. 
