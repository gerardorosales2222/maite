
let boton = document.getElementById('boton');

function nroAzar() {
    let random = Math.random();
    titulo.innerHTML = "Nro generado: " + random;
}

boton.addEventListener("click", nroAzar);