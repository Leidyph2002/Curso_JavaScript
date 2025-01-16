// Array y Objetos

let frutas = ['manzana', 'banana', 'naranja'];

console.log(frutas);

console.log(frutas[0]);

frutas.push('kiwi'); // Añade elemento al final

console.log(frutas);

frutas.unshift('fresa'); // Añade elemento al principio

console.log(frutas);

frutas.pop(); // Borra final de elemento

console.log(frutas);

frutas.shift("fresa");

// number , string , boolean , null , undefined , Symbol

// Objetos

let persona = {
  nombre : "Juan",
  edad : 30
};

console.log(persona);


let barco1 = [1,2];

let barco2 = [6,9];

let tablero = [[1,2,3],[4,5,6],[7,8,9]];

// Hacer disparo

let disparo = tablero[0][0];

console.log("disparo en posicion: ", disparo);


//console.log(matriz[0]);

//console.log(tablero[1][2]);



// Objetos

console.log(persona["nombre"]);

persona.nombre = "Luis";

console.log(persona["nombre"]);

let persona1 = {
  nombre : "Juan",
  edad : 30,
  direccion : {
    ciudad : "Madrid",
    codigoPostal : 28001
  }
};

console.log(persona1);