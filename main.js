document.addEventListener("DOMContentLoaded", function () {
  // Recuperar elementos del DOM
  const tarea = document.querySelector("input");
  const button = document.querySelector(".btn-add");
  const list = document.querySelector("ul");
  const message = document.querySelector(".empty");

  // Función para agregar una tarea
  function addTask() {
    // Obtener el valor del input
    const tareaText = tarea.value.trim();

    // Validar que el input no esté vacío
    if (tareaText === "") {
      alert("Si lo apuntas lo haces!!!");
      return;
    }

    // Crear un nuevo elemento <li>
    const newTask = document.createElement("li");

    // Crear un párrafo dentro del <li>
    const taskTexth = document.createElement("p");
    taskTexth.textContent = tareaText;

    // Crear un botón de eliminación
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("btn-delete");

    // Agregar evento de clic al botón de eliminación
    deleteButton.addEventListener("click", function () {
      list.removeChild(newTask);
      compruebaMuestra();
    });

    // Agregar el párrafo y el botón al <li>
    newTask.appendChild(taskTexth);
    newTask.appendChild(deleteButton);

    // Agregar el <li> a la lista
    list.appendChild(newTask);

    // Limpiar el valor del input
    tarea.value = "";

    // Ocultar el mensaje de tareas completadas
    message.style.display = "none";

    compruebaMuestra();
  }

  // Agregar evento de clic al botón de agregar
  button.addEventListener("click", function (event) {
    event.preventDefault();
    addTask();
  });

  // Función para comprobar y mostrar el mensaje de tareas completadas
  function compruebaMuestra() {
    if (list.children.length === 0) {
      message.style.display = "block";
    } else {
      message.style.display = "none";
    }
  }
});
