// 3 Array para guardar los todos
const todos = [];

// 1 Obtener referencia al formulario donde se ingresara las tareas pendientes
const form = document.getElementById("todo-form");

// 2 Controlador de eventos
form.onsubmit = (e) => {
  e.preventDefault(); // Método para prevenir que la pág. se recargue
  const todo = document.getElementById("todo"); //Ref al elemento con el id "todo-form".
  const todoText = todo.value; // Obtiene el texto escrito por el usuario
  todo.value = ""; // Limpia el campo
  todos.push(todoText); // Añade las tareas al array todos
  const todoList = document.getElementById("todo-list"); // Ref a la etiqueta ul donde se mostrarán las tareas
  todoList.innerHTML = ""; // Limpia el contenido de "todoList"
  for (let i = 0; i < todos.length; i++) {
    // Recorre el array "todos" para ir añadiendo a la lista las tareas
    todoList.innerHTML += "<li>" + todos[i] + "</li>";
  }
};

/**
Este código JavaScript se utiliza en el contexto de una aplicación web para manejar un formulario de tareas pendientes (o "todo"). Aquí te explico paso a paso qué está haciendo:

1. `const todos = [];` - Esta es la declaración de un array vacío llamado `todos`. Este array va a almacenar todas las tareas pendientes que el usuario ingresará a través del formulario.

2. `const form = document.getElementById("todo-form");` - Aquí se está obteniendo una referencia al formulario HTML con el id "todo-form". Este formulario es donde el usuario ingresará sus tareas pendientes.

3. `form.onsubmit = (e) => { ... };` - Este es un controlador de eventos que se activará cada vez que el usuario envíe el formulario. El parámetro `e` es un objeto de evento que contiene información sobre el evento de envío.

4. `e.preventDefault();` - Este método evita que la página se recargue cuando el formulario es enviado, que es el comportamiento predeterminado de los formularios HTML.

5. `const todo = document.getElementById("todo");` - Obtiene una referencia al campo de entrada HTML con el id "todo". Este es el campo donde el usuario escribe la tarea pendiente.

6. `const todoText = todo.value;` - Obtiene el texto que el usuario ha ingresado en el campo de entrada.

7. `todo.value = "";` - Limpia el campo de entrada para que el usuario pueda ingresar una nueva tarea.

8. `todos.push(todoText);` - Añade la tarea que el usuario ingresó al final del array `todos`.

9. `const todoList = document.getElementById("todo-list");` - Obtiene una referencia a un elemento HTML con el id "todo-list". Este es el lugar donde se mostrarán las tareas pendientes.

10. `todoList.innerHTML = "";` - Limpia el contenido del elemento "todo-list".

todoList.innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    todoList.innerHTML += "<li>" + todos[i] + "</li>";
  }

11. `for (let i = 0; i < todos.length; i++) { ... }` - Este es un bucle `for` que itera a través de todas las tareas pendientes en el array `todos`.

12. `todoList.innerHTML += "<li>" + todos[i] + "</li>";` - En cada iteración del bucle, agrega una nueva etiqueta de lista (`<li>`) al HTML de "todo-list". El contenido de la etiqueta de lista es la tarea pendiente. Esto significa que cada tarea pendiente se mostrará como un elemento de lista en el elemento "todo-list".

*/
