/**
 * Dado un array de numeros enteros, complete las funciones para que retorne un array conteniendo
 * solo los numeros pares y solo numeros impares respectivamente
 */

const even = function (numbers) {
  let evenArr = [];
  numbers.map((n) => {
    if (n % 2 === 0) evenArr.push(n);
  });
  return evenArr;
};

const odd = function (numbers) {
  let oddArr = [];
  numbers.map((n) => {
    if (n % 2 !== 0) oddArr.push(n);
  });
  return oddArr;
};

// TESTS (no modificar)
const arrEqual = (a1, a2) => JSON.stringify(a1) == JSON.stringify(a2);
console.log(arrEqual(even([4, 2, 6, 1, 0, 2, 5]), [4, 2, 6, 0, 2]));
console.log(arrEqual(odd([4, 2, 6, 1, 0, 2, 5]), [1, 5]));
