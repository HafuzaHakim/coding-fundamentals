function factorial(anyNumber) {
  let product = 1;
  for (i = anyNumber; i > 0; i--) {
    product = product * i;
  }
  return product;
}

console.log(factorial(5));
console.log(factorial(4));
console.log(factorial(1));
