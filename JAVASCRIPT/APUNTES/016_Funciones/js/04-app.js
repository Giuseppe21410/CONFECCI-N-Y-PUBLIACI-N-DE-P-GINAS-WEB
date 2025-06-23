/** Diferencia entre método y función */

const num2 = "20";

console.log(parseInt(num2)); // resultado 20


const num1 = 20;

console.log(num1.toString()); // resultado "20"

// Una función definida por el usuario
function saludar(){
    console.log("Hola");
}

saludar(); //llamada a la función


// Creamos un objeto
const persona = {
    nombre: "Juan",

    saludo: function(){
        console.log("Hola " + this.nombre);
    }
};

persona.saludo(); 