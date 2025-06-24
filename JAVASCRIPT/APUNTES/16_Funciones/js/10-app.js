// Función clásica (función anónima asignad a una constante)
const aprendiendo1 = function(){
    console.log("Aprendiendo JS");
}

// Función flecha (arrow function) equivalente a la anterior
// Esta es la forma moderna y concisa de escribir funciones en JavaScript
const aprendiendo2 = () => {
    console.log("Aprendiendo JS");
}

// Arrow function en una sola línea 
// Si sólo hay una instrucción dentro de la función, no es necesario usar las llaves {}
const aprendiendo3 = () => console.log('Aprendiendo JS');

// Arrow function que retorna un valor sin usar 'return' ni llaves
const aprendiendo4 = () => 'Aprendiendo JS';

// Llamamos a cada una de las funciones
// Ejecutamos la función aprendiendo1
aprendiendo1();

// Ejecutamos la función aprendiendo2
aprendiendo2();

// Ejecutamos la función aprendiendo3
aprendiendo3();

// Ejecutamos la función aprendiendo4, que devuelve un texto, usamos console.log()
console.log(aprendiendo4());