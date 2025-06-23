// Crear un objeto llamado reproductor
const reproductor = {

    // Método para reproducir una canción
    reproducir: function(id){
        console.log(`Reproduciendo la canción id ${id}`);
    },

    // Método para pausar la canción actual
    pausar: function(){
        console.log("Pausando la canción");
    },

    // Método borrar una canción del sistema por su "id"
    borrar: function(id){
        console.log(`Borrando canción de id ${id}`);
    },

    // Método para crear una PlayList
    crearPlayList: function(nombre){
        console.log(`Creando una PlayList de nombre ${nombre}`);
    },

    // Método para reproducir PlayList
    reproducirPlayList: function(nombre){
        console.log(`Estamos reproduciendo la PlayList con nombre ${nombre}`);
    }


}

// Llamamos a los métodos del objeto "reproductor"

// Reproducir canción con id 30
reproductor.reproducir(30);

// Pausamos la canción
reproductor.pausar();

// Borramos una canción con id 20
reproductor.borrar(20);

// Creamos una PlayList llamada "Heavy Metal"
reproductor.crearPlayList("Heavy Metal");

// Reproduce la PlayList llamada "Heavy Metal"
reproductor.reproducirPlayList("Heavy Metal");


