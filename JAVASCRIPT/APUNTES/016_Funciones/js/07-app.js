// Como se comunican las funciones
// Llamamos a la función principal
iniciarApp();

// Definir la primera función que inica la aplicación
function iniciarApp(){
    // Mostramos un mensaje de inicio en consola
    console.log("Iniciando la App...");

    // Llamamos a otra función llamada "segundaApp" la llamamos desde dentro de esta
    segundaApp();
}

// Definimos la segunda App
function segundaApp(){
    // mostramos el mensaje
    console.log("Desde la segunda App...");

    // Llamamos a la tercera funcion, pasandole un valor como argumento
    usuarioAutenticado("Pepe");
}

// Definimos la tercera función
function usuarioAutenticado(usuario){
    console.log("Validando...");

    console.log(`Usuario validado con éxito ${usuario}`);
}
