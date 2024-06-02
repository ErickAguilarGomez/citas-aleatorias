
const botonSelector = document.getElementById("boton-cambiar-cita");
const citaSelector = document.getElementById("cita");
const autorSelector = document.getElementById("autor");

function numRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function cambiarCita() {
    let indiceRandom = numRandom(0, citas.length);
    citaSelector.innerText = citas[indiceRandom].texto;
    autorSelector.innerText = citas[indiceRandom].autor;
}

botonSelector.addEventListener("click", cambiarCita);

// Mostrar una cita al cargar la página
cambiarCita();
