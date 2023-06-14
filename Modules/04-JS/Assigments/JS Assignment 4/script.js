function tetra(n) {
  let tetrahedral;
  tetrahedral = (n * (n + 1) * (n + 2)) / 6;
  return tetrahedral;
}

console.log(tetra(2));
console.log(tetra(5));
console.log(tetra(6));
