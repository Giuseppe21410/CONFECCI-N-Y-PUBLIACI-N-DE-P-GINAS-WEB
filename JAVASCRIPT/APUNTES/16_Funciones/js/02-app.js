// Se puede invocar una función declara, antes de su definición, gracias al hoisting
sumar4();

// Esta es la función declara
function sumar4() {
    console.log(2 + 2);
}

// Esto provocará un error; RefernceError: Cannot access 'sumar2' before initialization
sumar2(); // Error aquí

// Esta es una función expresada (función anónima asignada a una constante)
const sumar2 = function(){
    console.log(3 + 3);
}

// Esto es porque JavaScript se ejecuta en 2 etapas. Esto es lo que se conoce como Hoisting
// En la primera etapa, registra todas las funciones y determina las variables.
// A esta etapa se le llama creación

// La segunda etapa es la que ejecuta el código. Se le llama de ejecución

/**
 * El flujo de ejecución de JavaScript es el orden en el que el motor de JavaScript procesa el código.
 * Aquí te explico los conceptos clave para entender cómo se maneja el flujo de ejecución
 * 
 * 1. Ejecución Síncrona:
 * - JavasScript es un lenguaje de programación single-threaded, 
 * lo que significa que ejecuta una tarea a la vez en un solo hilo.
 * - Las instrucciones se ejecutan de arriba hacia abajo, una a la vez, en el orden 
 * en que aparecen en el código.
 * 
 * 2. Fases del flujo de ejecución:
 * - Fase de creación(Hoisting):
 *  - Durante esta fase, el motor de JS escanea el código y realiza el hoisting (elevación) de las declaraciones de variables
 *    y funciones.
 *  - Las declaraciones de variables con var se elevan al inicio de su ámbito (scope) pero no se inicializan.
 *    las declaraciones de varibles con let y const también se elevan pero no se inicializan y permancen en una "zona muerta temporal" (TDZ)
 *    hasta que se ejecuta su asignación.
 *  - Las funciones declaradas (usando function) se elvan completas, incluyendo su cuerpo.
 * - Fase de ejecución:
 *  - En esta fase, el motor de JS ejecuta el código línea por línea, asignando valores a las variables y ejecutando las funciones.
 * 
 * 3. Pilas y Colas:
 *  - Pila de Ejecución (Call Stack):
 *    - La pila de ejecución maneja el seguimiento de las funciones que está invocando. Cuando se llama a una función
 *     se añade un marco de pila (stack frame) a la pila. Cuando la función termina, se elimina el marco.
 *  - Cola de Ejecución (Task Queue):
 *    - La cola de tareas gestiona las funciones que deben ejecutarse después de que se complete el código síncrono actual.
 *      Esto incluye callbacks de eventos, promesas resueltas y otro tipo de tareas asíncronas.
 * 
 * 4. Eventos y Asincronía:
 *  - Eventos y el Event Loop:
 *    - JavaScript utiliza un modelo basado en eventos para manejar tareas asincrónicas. Cuando ocurre un evento como 
 *     ( un clic del usuario o la resolución de una promesa), se colocaun callback en la cola de tareas.
 *    - El Event Loop es un mecanísmo que monitorea la pila de ejecución y la cola de tareas.
 *      Si la pila de ejecución está vacía, el Event Loop toma el primer callback de la cola de tareas y lo coloca
 *      en la pila de ejecución para ser procesado.
 *  - Promesas y Microtask Queue:
 *    - Las promesas añaden otra capa de asincronía. Las promesas resueltas se colocan en la cola de microtareas (Microtask Queue), tienen prioridad
 *      sobre la cola de tareas normal.
 * 
 * Entender el flujo de ejecución en JavaScript es crucial para escribir y depurar código asíncrono de manera efectiva.
 * 
 */