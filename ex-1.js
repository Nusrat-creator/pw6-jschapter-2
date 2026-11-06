for (let A = 1; A <= 9; A++) {
  for (let B = 0; B <= 9; B++) {
    for (let C = 0; C <= 9; C++) {
      
      let abc = A * 100 + B * 10 + C * 1;
      
      let sumOfCubes = Math.pow(A, 3) + Math.pow(B, 3) + Math.pow(C, 3);
      
      if (abc === sumOfCubes) {
        console.log(`Solution found: A=${A}, B=${B}, C=${C} => ${abc} = ${A}^3 + ${B}^3 + ${C}^3 (${sumOfCubes})`);
      }
    }
  }
}

let exampleA = 2, exampleB = 5, exampleC = 3;
let exampleABC = exampleA * 100 + exampleB * 10 + exampleC * 1;
let exampleSum = Math.pow(exampleA, 3) + Math.pow(exampleB, 3) + Math.pow(exampleC, 3);
console.log(`\nExample check (2, 5, 3): ${exampleABC} === ${exampleSum} ? ${exampleABC === exampleSum}`);