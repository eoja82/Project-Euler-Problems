/* Problem 1: Multiples of 3 and 5Passed

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below the provided parameter value number. */
function multiplesOf3and5(number) {
  let multiples = [], index = number - 1;
  while (index > 0) {
    if (index % 3 === 0 || index % 5 === 0) {
      multiples.push(index);
      index--;
    } else {
      index--;
    }
  }
  console.log(multiples);
  return multiples.reduce( (a, b) => a + b);
}
//console.log(multiplesOf3and5(1000));

/* Problem 2: Even Fibonacci Numbers

Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence that do not exceed the nth term, find the sum of the even-valued terms. */
function fiboEvenSum(number) {
  let terms = new Array(number), index = 2;
  terms[0] = 1;
  terms[1] = 2;
  // if number is less than higest number in starting terms array
  if (number <= terms[1]) return terms[1]; 
  while (index < number) {
    terms[index] = terms[index - 1] + terms[index - 2];
    index++;
  }
  return terms.filter( x => x % 2 === 0).reduce( (a,b) => a + b);
}
//console.log(fiboEvenSum(23));  //60696