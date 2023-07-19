function exponent (a, n) 

{
  
   if (n === 0)  return 1; 
   else return a * exponent(a, n-1);

   
};

console.log(exponent(2, 3));
console.log(exponent(2, 12));
console.log(exponent(7, 2));
console.log(exponent(9, 3));
console.log(exponent(22, 5));
console.log(exponent(1996, 0));
//console.log(exponent(4213, -1));