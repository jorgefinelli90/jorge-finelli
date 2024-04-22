// Función para mostrar el modal
function showModal() {
    document.getElementById("infoModal").style.display = "block";
}

// Función para cerrar el modal
function closeModal() {
    document.getElementById("infoModal").style.display = "none";
}

// Cierra el modal si se hace clic fuera de él
window.onclick = function (event) {
    if (event.target.matches('.modal')) {
        closeModal();
    }
}

