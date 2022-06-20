let valor1 = Number(prompt("Ingresar el primer valor"));
let valor2 = Number(
  prompt("Ingresar el segundo valor", "Debe ser mayor al primer valor")
);
let numero: number;
let suma: number = 0;

for (numero = valor1; numero <= valor2; numero++) {
  suma += numero;
}
console.log("El resultado de la suma es:" + suma);
