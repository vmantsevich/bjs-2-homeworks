"use strict"
function solveEquation(a, b, c) {
var arr = []; 
let d = b**2 - 4*a*c;
if (d > 0) {
  let root1 = (-b + Math.sqrt(d)) / (2*a);
  let root2 = (-b - Math.sqrt(d)) / (2*a);
  alert("Имеет два значения: " + "Первый корень: " + root1 + " Второй корень: " + root2);
} if (d < 0) {
  alert(arr);
} if (d == 0) {
   let root3 = -b / (2*a);
  alert("Имеет одно значение: " + root3);
};
};
const arr=[-6, 9, 2];
solveEquation.apply(null, arr);

//значения d<0 (-6, 9, 2)
//значения d>0 (5, 2, -7)
//значения d=0 (16, -8, 1)
