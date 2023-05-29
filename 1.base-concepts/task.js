"use strict"
function solveEquation(a, b, c) {
let arr = []; 
let d = b**2 - 4*a*c;
if (d < 0) {
  return arr;
} if (d === 0) {
   let root3 = -b / (2*a);
  arr.push(root3);
} if (d > 0) {
  let root1 = (-b + Math.sqrt(d)) / (2*a);
  let root2 = (-b - Math.sqrt(d)) / (2*a);
  arr.push(root1, root2);
}
  return arr;
}
const arr=[5, 2, -7];
solveEquation.apply(null, arr);

//значения d<0 (-6, 9, 2)
//значения d>0 (5, 2, -7)
//значения d=0 (16, -8, 1)

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (typeof percent !== "number") {
    return `Процентная ставка содержит неправильное значение "${percent}"`;
  } 
  if (typeof contribution !== "number") {
    return `Сумма первоначального взноса содержит неправильное значение "${contribution}"`;
  } 
  if (typeof amount !== "number") {
    return `Сумма кредита содержит неправильное значение "${amount}"`;
  } 
  if (typeof countMonths !== "number") {
    return `Срок содержит неправильное значение "${countMonths}"`;
  }
 

const perMonth = percent / 100 / 12;
const bodyCredit = amount - contribution;
const monthly = bodyCredit * (perMonth + (perMonth / (((1 + perMonth) ** countMonths) - 1)));
const totalSum = parseFloat((monthly * countMonths).toFixed(2));
return totalSum;
}
console.log(calculateTotalMortgage(10, 0, 20000, 24));