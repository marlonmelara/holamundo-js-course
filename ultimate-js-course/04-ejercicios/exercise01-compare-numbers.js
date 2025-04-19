// Exercise #1
// Using classic funtion and if-else
function whichIsLarge(a, b) {
  if (a > b) return `${a} is greater than ${b}`;
  else return `${b} is greater than ${a}`;
}

let large = whichIsLarge(10, 25);

console.log(large);

// Using arrow function and ternary operator
const whichIsLargeArrow = (a, b) =>
  a > b ? `${a} is greater than ${b}` : `${b} is greater than ${a}`;

let largeArrow = whichIsLargeArrow(10, 25);
console.log(largeArrow);
