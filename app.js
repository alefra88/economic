//FUNCION DE INTERES SIMPLE

const IntSimp = (capP, int, tem) => {
  return capP * int * tem + capP;
};

test1 = IntSimp(350000, 0.04, 1);

console.log(test1);

//FUNCION INTERES COMPUESTO

const intComp = (capP, int, tem) => {
  const tasaIntDec = int / 100,
    per = 12;

  const total = capP * Math.pow(1 + tasaIntDec / per, per * tem);

  return total;
};

test2 = intComp(20000, 2, 2);

console.log(test2);

/*

FUNCION PARACALCULAR EL VALOR PRESENTE

VP = VF/(1+ r)^n

VP = valor presente

VF = Valor futuro

r = renta o interés

n = numerode periodos

*/

const valorPresente = (valorFuturo, renta, periodos) => {
  //transformamos el porcentaje de la renta a decimales
  tasaInteresDecimal = renta / 100;

  return valorFuturo / Math.pow(1 + tasaInteresDecimal, periodos);
};

const testValorPresente = valorPresente(12500, 8.5, 4);

console.log(testValorPresente);
