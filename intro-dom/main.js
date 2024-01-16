// 3 Array para guardar los todos
const todos = [];

const render = () => {
  const todoList = document.getElementById("todo-list");
  const todosTemplate = todos.map((t) => "<li>" + t + "</li>");
  todoList.innerHTML = todosTemplate.join("");
  const elementos = document.querySelectorAll("#todo-list li");
  elementos.forEach((elemento, i) => {
    elemento.addEventListener("click", () => {
      elemento.parentNode.removeChild(elemento);
      todos.splice(i, 1);
      render();
    });
  });
};

// 1 Obtener referencia al formulario donde se ingresara las tareas pendientes
const form = document.getElementById("todo-form");

// 2 Controlador de eventos
form.onsubmit = (e) => {
  e.preventDefault(); // Método para prevenir que la pág. se recargue
  const todo = document.getElementById("todo"); //Ref
  const todoText = todo.value; // Obtiene el texto escrito por el usuario
  todo.value = ""; // Limpia el campo
  todos.push(todoText); // Añade las tareas al array todos
  render();
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

En resumen, este código permite a los usuarios ingresar tareas pendientes a través de un formulario, y luego muestra esas tareas en una lista en la página.
*/

/**
1. `const todosTemplate = todos.map((t) => "<li>" + t + "</li>");` - Aquí estamos usando el método `map` de los arrays de JavaScript para crear un nuevo array. `map` pasa cada elemento del array `todos` a una función y luego crea un nuevo array con los resultados de esa función. En este caso, para cada tarea pendiente `t`, la función crea una cadena de texto que es una etiqueta de lista HTML con `t` como contenido. El resultado es un nuevo array donde cada tarea pendiente se ha transformado en una etiqueta de lista HTML.

2. `todoList.innerHTML = todosTemplate.join("");` - El método `join` de los arrays de JavaScript convierte un array en una cadena de texto. Toma cada elemento del array y los une en una única cadena de texto, colocando entre cada par de elementos la cadena de texto que se le pase como argumento (en este caso, una cadena de texto vacía). Así, `todosTemplate.join("")` convierte el array `todosTemplate` en una única cadena de texto que es una serie de etiquetas de lista HTML sin nada entre ellas. Luego, esta cadena de texto se asigna a `todoList.innerHTML`, lo que hace que se muestren todas las tareas pendientes en el elemento "todo-list".

En resumen, este código hace lo mismo que el código anterior, pero de una manera un poco más eficiente y con menos código. En lugar de añadir cada tarea pendiente al `innerHTML` de "todo-list" una por una dentro de un bucle `for`, crea todas las etiquetas de lista HTML a la vez con `map` y luego las añade todas a la vez con `join` y una única asignación a `innerHTML`.
*/
