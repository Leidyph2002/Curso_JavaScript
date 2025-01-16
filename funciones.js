function saludar(){

    console.log("Hola Mundo");
    
    
};

saludar();

function saludar2 (nombre){
    
    console.log(`Hola ${nombre}`);
    
};

saludar2("Miguel");

  //function sumar (a,b) {
  // return a + b
  //};

  //console.log(sumar(2,2));

let resultado

function sumar (a,b) {
    resultado = a + b;
    return resultado;
    
};

console.log(sumar(2,2));

console.log(resultado);


const saludar = function(){

    console.log("hola");
    
};

console.log(saludar);

saludar();

const saludar2 = () => {
    
    console.log("hola");
    
};

saludar2();

const saludar3 = (nombre, apellido) => {
    
    console.log(`hola ${nombre} ${apellido}`);
    
};

saludar3("Jose", "Lopez");


const sumar = (a,b) => {
    
    let resultado = a + b;
    return resultado;
    
};

console.log(sumar(2,2));
