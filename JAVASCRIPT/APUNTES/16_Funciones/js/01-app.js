/**Las funciones en cualquier lenguaje son una serie de procedimientos o instrucciones
que realizan una acción. Una de las ventajas de las funciones es que permiten tener un código más ordenado y fácil de mantener */

/**Otra de las ventajas es que son reutilizables. Puedes tener una función que valide un formulario y utilizarla en todos los formularios.
 * También puedes tener una función que envíe datos al servidor y utilizarla miles de veces.
 */

/**
 * Existen varias formas de crear funciones en JavaScript
 * 
 */

// Declaración de una función tradicional
// La palabra clave "function" va seguida del nombre de la función
// Luego los paréntesis para los parámetros
// Y el cuerpo de la función entre llaves

function sumar() {
    console.log(2 + 2);  // simplemente imprime el resultado de la suma 2 + 2
}

sumar(); // Llamada a la función: imprime 4

// Aquí estamos asignando una función anónima a una constante llamada "sumar2"
// Es decir, la función no tine nombre propio, y se guarda como valor de una variable
// Esta es una "expresión de función"

const sumar2 = function(){
    console.log(3 + 3); // imprime la suma de tres
}

sumar2(); // Llamada a la función e imprime 6

// Esta es una función flecha, introducida en ES6 (ECMAScript 2015)
// Es una forma más concisa de escribir funciones anónimas
// Ideal para funciones cortas y callbacks

const sumar3 = () => {
    console.log(4 + 4);
}

sumar3();