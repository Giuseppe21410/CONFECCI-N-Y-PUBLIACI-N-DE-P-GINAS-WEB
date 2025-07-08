document.addEventListener("DOMContentLoaded", () => {
  const ImagenInteractiva_1 = document.getElementById("imagenInteractiva_1");
  const ImagenInteractiva_2 = document.getElementById("imagenInteractiva_2");

  if (ImagenInteractiva_1 && ImagenInteractiva_2) {
    ImagenInteractiva_1.addEventListener("mouseover", () => {
      ImagenInteractiva_1.style.display = "none";
      ImagenInteractiva_2.style.display = "block";
    });

    ImagenInteractiva_2.addEventListener("mouseout", () => {
      ImagenInteractiva_2.style.display = "none";
      ImagenInteractiva_1.style.display = "block";
    });
  }

  const CondicionesdeUso = document.querySelector(".condiciones-uso-trigger");
  const CondicionesUso = document.getElementById("condicionesUso");
  const CondicionesUsoContendor= document.getElementById("condicionesUso_1");

  if (CondicionesdeUso && CondicionesUso) {
    CondicionesdeUso.addEventListener("click", function (e) {
      e.stopPropagation();
      CondicionesUso.style.display = "flex";
    });

    // Cierre al clicar fuera
    document.addEventListener("click", function (e) {
      const isClickInside = CondicionesUsoContendor.contains(e.target);
      const isTrigger = CondicionesdeUso.contains(e.target);

      if (CondicionesUso.style.display === "flex" && !isClickInside && !isTrigger) {
        CondicionesUso.style.display = "none";
      }
    });
  }

  // Lógica de validación de formulario: 
  const form = document.getElementById('contactForm');
  const nombreInput = document.getElementById('nombre');
  const emailInput = document.getElementById('email');
  const asuntoInput = document.getElementById('asunto');
  const mensajeTextarea = document.getElementById('mensaje');
  const successMessage = document.getElementById('mensaje-exito');

  // Función para validar un campo individual
  function validateField(inputElement) {
    const errorMessage = inputElement.nextElementSibling; 
    
    if (inputElement.checkValidity()) {
      // Si el campo es válido (según el atributo 'required' y 'type' para email)
      inputElement.classList.remove('invalid');
      inputElement.classList.add('valid');
      if (errorMessage) {
        errorMessage.style.display = 'none';
      }
      return true;
    } else {
      // Si el campo no es válido
      inputElement.classList.remove('valid');
      inputElement.classList.add('invalid');
      if (errorMessage) {
        errorMessage.style.display = 'block';
      }
      return false;
    }
  }

  // Función específica para validar el formato del email
  function validateEmail(emailElement) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const errorMessage = emailElement.nextElementSibling;

    if (emailRegex.test(emailElement.value)) {
      emailElement.classList.remove('invalid');
      emailElement.classList.add('valid');
      if (errorMessage) {
        errorMessage.style.display = 'none';
      }
      return true;
    } else {
      emailElement.classList.remove('valid');
      emailElement.classList.add('invalid');
      if (errorMessage) {
        errorMessage.style.display = 'block';
      }
      return false;
    }
  }

  // Validar al escribir en cada campo
  nombreInput.addEventListener('input', () => validateField(nombreInput));
  asuntoInput.addEventListener('input', () => validateField(asuntoInput));
  mensajeTextarea.addEventListener('input', () => validateField(mensajeTextarea));
  emailInput.addEventListener('input', () => validateEmail(emailInput)); // Usar la validación específica para email

  // Manejar el envío del formulario
  form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    // Validar todos los campos al intentar enviar
    const isNombreValid = validateField(nombreInput);
    const isEmailValid = validateEmail(emailInput);
    const isAsuntoValid = validateField(asuntoInput);
    const isMensajeValid = validateField(mensajeTextarea);

    // Si todos los campos son válidos, se puede enviar el formulario
    if (isNombreValid && isEmailValid && isAsuntoValid && isMensajeValid) {
      form.reset(); // Limpiar el formulario
      [nombreInput, emailInput, asuntoInput, mensajeTextarea].forEach(input => {
        input.classList.remove('valid', 'invalid');
      });
      successMessage.style.display = 'block';
      setTimeout(() => {
        successMessage.style.display = 'none';
      }, 5000); // Ocultar el mensaje de éxito después de 5 segundos
    } else {
      successMessage.style.display = 'none'; // Asegurarse de que el mensaje de éxito esté oculto
    }
  });
});


