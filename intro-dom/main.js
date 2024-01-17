// 3 Inicializa el array 'todos' con los datos almacenados en localStorage o un array vacío si no hay nada almacenado.
const todos = JSON.parse(localStorage.getItem("todos")) || [];

// 4 Función para renderizar la lista de tareas en la interfaz de usuario.
const render = () => {
  const todoList = document.getElementById("todo-list");
  // Recorre el array "todos" para ir añadiendo a la lista las tareas
  const todosTemplate = todos.map((t) => "<li>" + t + "</li>"); // Convierte el array de elementos de lista en una cadena de texto HTML y la establece como contenido interno del elemento de lista.
  todoList.innerHTML = todosTemplate.join("");
  // Selecciona todos los elementos de lista dentro del contenedor de la lista de tareas.
  const elementos = document.querySelectorAll("#todo-list li"); // Ref a los elementos "<li>" que pertenecen al id #todo-list
  elementos.forEach((elemento, i) => {
    // Por cada elemento ejecutara una función
    elemento.addEventListener("click", () => {
      // Elimina el elemento del DOM.
      elemento.parentNode.removeChild(elemento); // Elimina la tarea del array 'todos'.
      todos.splice(i, 1);
      // Actualiza el almacenamiento local y vuelve a renderizar la lista.
      actualizaTodos();
      render();
    });
  });
};

// 5 Función para actualizar el almacenamiento local con la lista actual de tareas.
const actualizaTodos = () => {
  const todoString = JSON.stringify(todos);
  localStorage.setItem("todos", todoString);
};

// 0 Controlador de eventos que se ejecuta cuando se carga la ventana.
window.onload = () => {
  render();
  // 1 Obtener referencia al formulario donde se ingresara las tareas pendientes
  const form = document.getElementById("todo-form");

  // 2 Controlador de eventos que se dispara al enviar el formulario.
  form.onsubmit = (e) => {
    e.preventDefault(); // Evita que el formulario se envíe y la página se recargue.
    const todo = document.getElementById("todo"); //Ref al elemento con el id "todo-form".
    const todoText = todo.value; // Obtiene el valor del campo de entrada del formulario.
    todo.value = ""; // Reinicia el campo de entrada del formulario.
    todos.push(todoText); // Añade la nueva tarea al array 'todos'.
    actualizaTodos(); // Actualiza el almacenamiento local con la nueva lista de tareas.
    render(); // Vuelve a renderizar la lista de tareas para mostrar la nueva tarea.
  };
};
