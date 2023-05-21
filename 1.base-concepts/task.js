"use strict"
function solveEquation(a, b, c) {
let arr = []; 
let d = b**2 - 4*a*c;
if (d < 0) {
  alert(arr);
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