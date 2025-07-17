const botones = document.querySelectorAll(".boton-red");

    botones.forEach(boton => {
      boton.addEventListener("mouseenter", () => {
        boton.classList.replace("boton-red", "boton-red-on")
      });

      boton.addEventListener("mouseleave", () => {
        boton.classList.replace("boton-red-on", "boton-red"); 
      });
    });