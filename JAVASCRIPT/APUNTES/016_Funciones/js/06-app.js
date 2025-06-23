// Declarar una función saludar que reciba dos parámetros

function saludar(nombre = "Rafael", apellidos){
    console.log(`Hola ${nombre}, ${apellidos}`);
}

// En la primera llamada pasamos ambos parámetros
saludar("Pepe", "Pérez");

// En la segunda llamada sólo le pasamos el nombre
saludar("Pepe");

// En la tercera llamada no le pasamos parámetros
saludar();