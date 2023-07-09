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
