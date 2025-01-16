// // SENTENCIAS DE CONTROL

// let edad = 18;

// // Condicionales If/else

// if (edad >= 18){
//     console.log("Eres mayor de edad");
// } else {
//     console.log("Eres menor de edad");
// };

// let nota = 85;

// if (nota >= 90){
//     console.log("Sobresaliente");
// } else if (nota >= 70){
//     console.log("Aprobado");
// } else {
//     console.log("Suspenso");
// };

// // Anidar condicionales

// let numero = 85;

// if (numero > 0){
//     if (numero %2 === 0){
//     console.log("El numero es positivo y par");
// } else {
//     console.log("El numero es positivo e impar");
// }
// } else {
//     console.log("El numero no es positivo");
// };

// Switch

// let dia = "lunes";

// switch (dia){
//     case "lunes" : 
//     console.log("Hoy es lunes");
//     break;
//     case "martes" : 
//     console.log("Hoy es martes");
//     break;
//     default:
//     console.log("Dia desconocido");
// };

// Switch condición

// for (let i = 0; i <= 10; i++){
//     console.log(i);
// };


// Tabla de multiplicar del 4

// for (let i = 0; i <= 10; i++){
//     let numero = 4 * i;
//     console.log(`4 * ${i} = ${numero}`);
// };

// console.log(" ")

// // Tabla de multiplicar del 5

// for (let i = 0; i <= 10; i++){
//     let numero = 5 * i;
//     console.log(`5 * ${i} = ${numero}`);
// };

// // Tabla de multiplicar del 5

// let numero = 5;

// for (let i = 0; i <= 10; i++){
//     console.log(`${numero} x ${i} = ${numero * i}`);
// };

// // While

// let i = 0;

// while (i < 5) {
//     console.log(`Interacion ${i}`)
//     i++
// };

// Do

// let i = 0;

// do {
//     console.log(`Iteracion ${i}`);
//     i++
// } while (i < 5);

// // For ... of

// let frutas = ["manzanas","banana","naranjas"];

// for (let item of frutas) {
//     console.log(item);
// };

// let persona = {
//     nombre: "Pepe",
//     edad: 30
// };

// // For ... in

// for (let clave in persona) {
//     console.log(`La clave es ${clave.toUpperCase()} y tiene valor ${persona[clave].toUpperCase}`);
// };

//---------------------------------
// Manupulación de objetos
//---------------------------------

// Valor vs Referencia
// Tipos primitivos (number, string, boolean, null, undefined, symbol)


let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20

// POR REFERENCIA

let persona1 = {nombre : "Ana"};
let persona2 = persona1;

persona2.nombre = "Juan";

console.log(persona1.nombre); // Juan
console.log(persona2.nombre); // Juan

// SPREAD (...)

let numeros = [1,2,3];
let numerosNuevos = [...numeros, 4, 5];

console.log(numerosNuevos);
console.log(numeros);

let persona = {nombre : "Ana", edad : 30};
let nuevaPersona = {...persona, ciudad : "Madrid"};

console.log(persona);
console.log(nuevaPersona);

// StructuredClone

structuredClone
let persona3 = {nombre : "Ana", edad : 30};
let nuevaPersona4 = structuredClone(persona3);

console.log(persona3);
console.log(nuevaPersona4);

// Desestructuración

function obtenerCoordenadas(){
    return {x : 10, y : 20};
};

let {x , y} = obtenerCoordenadas();

console.log(x,y);

// Desestructuración funcion































