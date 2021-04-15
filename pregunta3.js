// Dado un array de numeros enteros, retornar el 3er mayor
// Por ejemplo en: [4,3,4,5,1] el tercer mayor es 3
// si la longitud del array es < 3 se debe retornar undefined

const greater3 = (nums) => {
  let retorno;

  let sonIguales = true;

  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i] !== nums[i - 1]) {
      sonIguales = false;
    }
  }

  if (sonIguales === true || nums.length < 3) {
    retorno = undefined;
  } else {
    let i = 0;

    while (i < 2) {
      nums.sort();
      let mayor = Math.max(...nums);
      for (let i = 0; i < nums.length; i++) {
        if (nums[i] === mayor) {
          nums[i] = 0;
        }
      }
      i++;
    }

    let TercerMayor = Math.max(...nums);

    retorno = TercerMayor;
  }

  return retorno;
};

// TESTs no modificar
console.log(greater3([4, 3, 4, 5, 1]) === 3);
console.log(greater3([3, 4]) === undefined);
console.log(greater3([4, 4, 4]) === undefined);
console.log(greater3([1, 1, 2, 5]) === 1);
