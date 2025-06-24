// Definimos una función que recibe dos parámetros: nombre y apellido
function saludar(nombre, apellidos){
    // Usamos template literals(comillas invertidas) para mostrar el mensaje
    console.log(`Hola ${nombre}, ${apellidos}`);
}

saludar("Pepe", "López");

// Hacer una llamada sin pasar parámetros
saludar();

// Parámetros pre-definidos
function nombreCompleto(nombre = "Rafael", apellidos = "Martín"){
    console.log(`Hola ${nombre}, ${apellidos}`);
}

nombreCompleto();
nombreCompleto("Isabel", "Acosta");