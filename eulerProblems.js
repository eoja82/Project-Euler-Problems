//  Problem 1: Multiples of 3 and 5
function multiplesOf3and5(number) {
  let multiples = [], count = number - 1;
  while (count > 0) {
    if (count % 3 === 0 || count % 5 === 0) {
      multiples.push(count);
      count--;
    } else {
      count--;
    }
  }
  console.log(multiples);
  return multiples.reduce( (a, b) => a + b);
}
console.log(multiplesOf3and5(1000));