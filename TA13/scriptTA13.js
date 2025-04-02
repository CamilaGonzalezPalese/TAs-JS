function textoCambiado() {
    let boton = document.getElementById("miButton");
    let textoC = document.getElementById("texto");
    console.log({boton, textoC})
    boton.addEventListener("click",  () => {
        textoC.textContent = "Texto cambiado";
    });
}