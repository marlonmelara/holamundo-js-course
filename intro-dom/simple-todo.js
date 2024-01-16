// 3 Array para guardar los todos
const todos = [];

// 1 Obtener referencia al formulario donde se ingresara las tareas pendientes
const form = document.getElementById("todo-form");

// 2 Controlador de eventos
form.onsubmit = (e) => {
  e.preventDefault(); // Método para prevenir que la pág. se recargue
  const todo = document.getElementById("todo"); //Ref
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
