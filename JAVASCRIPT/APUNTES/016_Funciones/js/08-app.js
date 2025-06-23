/** Funciones que retornan valores */

// Declaramos una funcion "sumar()" que recibe dos parámetros
function sumar(a, b){
    // Mostramos un mensaje par informar que estamos dentro de la función
    console.log("sumar a + b");

    // usamos la palabra clave "return" para devolver el resultado
    return a + b;
}

// Llamamos a la función con dos valores 1 y 2
// El resultado de la suma se guarda en la variable "resultado"
const resultado = sumar(1,2);

// Mostramos el resultado en consola
console.log(resultado);  // salida 3
/*********************************************  */
/*****Ejemplo más avanzado, carrito de compra   */
/********************************************** */
// Declaramos una variable global
let total = 0;

// Declaramos una función que agrega el precio al carrito
function agregarPrecio(precio){
    // sumar precio al total y lo devuelve
    return total += precio;
}

// Declarar una función que calcule el IGIC
function calculaImpuesto(total){
    // Calcula el impuesto y lo devuelve
    return total * 1.05;
}

// Agregar tres productos al carrito
total = agregarPrecio(200);
total = agregarPrecio(300);
total = agregarPrecio(500);

// Mostrar el total acumulado
console.log(`Total acumulado sin impuesto ${total}`);

// calcular el total con impuesto
const totalAPagar = calculaImpuesto(total);

// Mostrar el total a pagar, con impuesto incluido
console.log(`El total a pagar es de ${totalAPagar}`);
