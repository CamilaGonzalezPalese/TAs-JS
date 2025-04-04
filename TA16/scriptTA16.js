function mostrarOcultar() {
    let parrafo = document.getElementById("parrafo");
    if (parrafo.style.visibility === 'hidden' ){
         parrafo.style.visibility = 'visible'
    }else{
         parrafo.style.visibility = 'hidden'
    }
}
function mostrarOcultar() {
    const parrafo = document.getElementById("parrafo");
    if (parrafo.style.display === "none") {
      parrafo.style.display = "block";
    } else {
      parrafo.style.display = "none";
    }
}