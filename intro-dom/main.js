// 3 Inicializa el array 'todos' con los datos almacenados en localStorage o un array vacío si no hay nada almacenado.
const todos = JSON.parse(localStorage.getItem("todos")) || [];

// 4 Función para renderizar la lista de tareas en la interfaz de usuario.
const render = () => {
  const todoList = document.getElementById("todo-list"); // Obtiene la referencia al elemento de lista de tareas en el DOM.
  const todosTemplate = todos.map((t) => "<li>" + t + "</li>"); // Mapea el array de tareas a elementos <li> HTML y los almacena en el array 'todosTemplate'.
  todoList.innerHTML = todosTemplate.join(""); // Convierte el array 'todosTemplate' a un string y lo establece como HTML interno de 'todoList'.
  const elementos = document.querySelectorAll("#todo-list li"); // Obtiene todos los elementos <li> dentro de 'todoList'.
  elementos.forEach((elemento, i) => {
    // Por cada elemento ejecutara una función
    elemento.addEventListener("click", () => {
      // Elimina la tarea clickeada del DOM.
      elemento.parentNode.removeChild(elemento); // Elimina la tarea del array 'todos'.
      todos.splice(i, 1);
      // Actualiza el almacenamiento local y vuelve a renderizar la lista.
      actualizaTodos(); // Actualiza el almacenamiento local.
      render(); // Vuelve a renderizar la lista de tareas.
    });
  });
};

// 5 Función para actualizar el almacenamiento local con la lista actual de tareas.
const actualizaTodos = () => {
  const todoString = JSON.stringify(todos); // Convierte el array 'todos' a un string JSON.
  localStorage.setItem("todos", todoString); // Almacena el string JSON en el localStorage.
};

// ## 1. Al cargar la página
// Controlador de eventos que se ejecuta cuando se carga la ventana.
window.onload = () => {
  render(); // 1.1 Renderizar tareas guardadas

  // ## 2. Cuando el usuario envía el formulario:
  // 2.1 Obtener referencia al formulario donde se ingresarán las tareas pendientes
  const form = document.getElementById("todo-form");

  // 2.2 Asignar un controlador de eventos al formulario cuando se envía
  form.onsubmit = (e) => {
    e.preventDefault(); // 2.2.1 Prevenir recarga de la página

    // 2.2.2 Obtener el valor de la tarea ingresada
    const todo = document.getElementById("todo"); // Ref al elemento con el id "todo" (<input type="text" id="todo" />)
    const todoText = todo.value; // Obtiene el valor del campo de entrada del formulario.

    todo.value = ""; // 2.2.3 Limpiar el campo de entrada del formulario.

    // 2.2.4 Actualizar la lista de tareas
    todos.push(todoText); // Añade la nueva tarea al array 'todos'.
    actualizaTodos(); // Actualiza el almacenamiento local con la nueva lista de tareas.
    render(); // Vuelve a renderizar la lista de tareas para mostrar la nueva tarea.
  };
};

/** ¿Cuándo usar window.onload?
Si necesitas asegurarte de que todos los recursos de la página, incluidos los archivos de imágenes y CSS, estén completamente cargados antes de ejecutar el código.*/

/**
 * .onsubmit es una propiedad que se usa para asignar un controlador de eventos que se ejecutará cuando un formulario sea enviado. Es decir, cuando el usuario hace clic en un botón de envío (generalmente un botón de tipo submit), o presiona Enter dentro de un campo de texto de un formulario, se dispara el evento submit, y el código asociado a .onsubmit se ejecuta.
 */
