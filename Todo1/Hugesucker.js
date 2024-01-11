let start = -300000;
let end = 300000;

start = start % 2 === 0 ? start + 1 : start;
end = end % 2 === 0 ? end - 1 : end;

let numberOfOdds = (end - start) / 2 + 1;
let sum = (numberOfOdds / 2) * (start + end);

console.log("Sum of odd integers:", sum);
