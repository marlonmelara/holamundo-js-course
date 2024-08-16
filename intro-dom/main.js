// ## 3. Inicialización de datos
// 3.1 Inicializa el array 'todos' con los datos almacenados en localStorage o un array vacío si no hay nada almacenado.
const todos = JSON.parse(localStorage.getItem("todos")) || [];

// ## 4. Renderización de la lista de tareas
const render = () => {
  // 4.1 Obtener referencia a la lista de tareas en el DOM
  const todoList = document.getElementById("todo-list");

  // 4.2 Mapear el array de tareas a elementos <li> HTML
  const todosTemplate = todos.map((t) => "<li>" + t + "</li>");

  // 4.3 Actualizar el contenido del elemento 'todoList' en el DOM
  todoList.innerHTML = todosTemplate.join("");

  // 4.4 Obtener todos los elementos <li> dentro de 'todoList'
  const elementos = document.querySelectorAll("#todo-list li");

  // 4.5 Asignar un evento de eliminación a cada tarea
  elementos.forEach((elemento, i) => {
    elemento.addEventListener("click", () => {
      // 4.5.1 Eliminar la tarea del DOM
      elemento.parentNode.removeChild(elemento);

      // 4.5.2 Eliminar la tarea del array 'todos'
      todos.splice(i, 1);

      // 4.5.3 Actualizar el almacenamiento local y volver a renderizar la lista
      actualizaTodos(); // Actualiza el almacenamiento local.
      render(); // Vuelve a renderizar la lista de tareas.
    });
  });
};

// ## 5. Actualización del almacenamiento local
const actualizaTodos = () => {
  // 5.1 Convertir el array 'todos' a un string JSON
  const todoString = JSON.stringify(todos);

  // 5.2 Almacenar el string JSON en el localStorage
  localStorage.setItem("todos", todoString);
};

// ## 1. Al cargar la página
window.onload = () => {
  // 1.1 Renderizar tareas guardadas
  render();

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
