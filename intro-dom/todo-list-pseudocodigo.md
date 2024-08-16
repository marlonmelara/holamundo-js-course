# ToDo List - Pseudocódigo

## 1. Al cargar la página

- 1.1 Renderizar tareas guardadas.

## 2. Cuando el usuario envía el formulario

- 2.1 Obtener referencia al formulario donde se ingresarán las tareas pendientes.
- 2.2 Asignar un controlador de eventos al formulario cuando se envía.
  - 2.2.1 Prevenir recarga de la página.
  - 2.2.2 Obtener el valor de la tarea ingresada.
  - 2.2.3 Limpiar el campo de entrada del formulario.
  - 2.2.4 Actualizar la lista de tareas y renderizar nuevamente.

## 3. Inicialización de datos

- 3.1 Inicializar el array 'todos' con los datos almacenados en `localStorage` o un array vacío si no hay nada almacenado.

## 4. Renderización de la lista de tareas

- 4.1 Obtener referencia a la lista de tareas en el DOM.
- 4.2 Mapear el array de tareas a elementos `<li>` HTML.
- 4.3 Actualizar el contenido del elemento `todoList` en el DOM.
- 4.4 Obtener todos los elementos `<li>` dentro de `todoList`.
- 4.5 Asignar un evento de eliminación a cada tarea.
  - 4.5.1 Eliminar la tarea del DOM.
  - 4.5.2 Eliminar la tarea del array `todos`.
  - 4.5.3 Actualizar el almacenamiento local y volver a renderizar la lista.

## 5. Actualización del almacenamiento local

- 5.1 Convertir el array `todos` a un string JSON.
- 5.2 Almacenar el string JSON en el `localStorage`.
