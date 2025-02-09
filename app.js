// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
document.addEventListener("DOMContentLoaded", () => {
    const inputAmigo = document.getElementById("amigo");
    const listaAmigos = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");
    const botonAgregar = document.querySelector(".button-add");
    const botonSortear = document.querySelector(".button-draw");

    let amigos = []; // Lista de nombres

    // Función para agregar un amigo a la lista
    function agregarAmigo() {
        const nombre = inputAmigo.value.trim();

        if (nombre === "") {
            alert("Por favor, ingrese un nombre válido.");
            return;
        }

        if (amigos.includes(nombre)) {
            alert("Este nombre ya ha sido agregado.");
            return;
        }

        amigos.push(nombre);
        actualizarLista(); // Actualizar la lista en pantalla

        // Limpiar el campo y enfocar para la siguiente entrada
        inputAmigo.value = "";
        inputAmigo.focus();
    }

    // Función para actualizar la lista en la página
    function actualizarLista() {
        listaAmigos.innerHTML = ""; // Limpiar la lista antes de actualizar

        amigos.forEach((amigo, index) => {
            const li = document.createElement("li");
            li.textContent = amigo;
            li.classList.add("name-item");

            const botonEliminar = document.createElement("button");
            botonEliminar.textContent = "❌";
            botonEliminar.classList.add("delete-button");
            botonEliminar.onclick = () => eliminarAmigo(index);

            li.appendChild(botonEliminar);
            listaAmigos.appendChild(li);
        });
    }

    // Función para eliminar un amigo de la lista
    function eliminarAmigo(index) {
        amigos.splice(index, 1);
        actualizarLista(); // Volver a mostrar la lista actualizada
    }

    // Función para sortear un amigo al azar
    function sortearAmigo() {
        if (amigos.length === 0) {
            alert("Debe agregar al menos un nombre antes de sortear.");
            return;
        }

        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoSeleccionado = amigos[indiceAleatorio];

        resultado.innerHTML = `<p class="result-list">🎉 ¡El amigo secreto es: <strong>${amigoSeleccionado}</strong>! 🎉</p>`;
    }

    // Conectar los botones con las funciones
    botonAgregar.addEventListener("click", agregarAmigo);
    botonSortear.addEventListener("click", sortearAmigo);

    // Permitir agregar amigos presionando "Enter"
    inputAmigo.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            agregarAmigo();
        }
    });
});
