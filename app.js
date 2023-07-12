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

/*
INTERES REAL/INTERES SIMPLE

Ganancia real = ganancia nominal - inflaciòn
GN= ganancia nominal
P=capital Principal
i=interes o renta
n=periodos
inf= inflación

FORMULA
GN = P*(1+i)^n-P
*/

const GananciaReal = (capitalPrincipal, interes, periodos, inf) => {
  const tasaInteresNominal = interes / 100,
    tasaInfDecimal = inf / 100,
    ajuste = (1 + tasaInteresNominal) / (1 + tasaInfDecimal),
    tasaNominal = capitalPrincipal * Math.pow(ajuste, periodos),
    resultado = tasaNominal - capitalPrincipal;
  return resultado;
};

const testGananciaReal = GananciaReal(80000, 6, 1, 4);

console.log(testGananciaReal);

/*
ANUALIDAD VENCIDA


VF = VALOR FINAL
P=CAPITAL PRINCIPAL
I = INTERES
N=PERIODOS

VF=r*(1+i)^n-1/i

*/

const anualidadVencida = (capitalPrincipal, interes, periodos) => {
  const capitalInteresDecimal = interes / 100;
  let inversion = capitalPrincipal;
  for (let i = 0; i < periodos; i++) {
    inversion = inversion * (1 + capitalInteresDecimal);
  }
  return inversion;
};

testAnualidadVencida = anualidadVencida(10000, 3, 9);

console.log(testAnualidadVencida);

/*
DENSIDAD DE COTIZACION
Densidad de cotizacion = (años cotizados/total de años cotizados)*100
*/

const densidadCotizacion = (anCotizados, anTotal) => {
  return (anCotizados / anTotal) * 100;
};

const testDensidadCotizacion = densidadCotizacion(20, 24);

console.log(testDensidadCotizacion);

/*

PRESUPUESTO FAMILIAR

*/

const presupuestoFamiliar = (ahorroInicial, ...args) => {
  for (let i = 0; i < args.length; i++) {
    ahorroInicial -= args[i];
  }
  return ahorroInicial;
};

let ahorroInicio = 17000;
let testpresupuestoFamiliar = presupuestoFamiliar(17000, 5000,3000,1000,1,1,1,1,1,1,2,2);

console.log(testpresupuestoFamiliar);
