function añadirElemento() {
    let item = document.getElementById("itemInput");
    let lista = document.getElementById("lista");
    let texto = item.value;

    if (texto !== "") {
        let elemLista = document.createElement("li")
        elemLista.textContent = item.value;
        lista.appendChild(elemLista);
        item.value = "";
    }

}
function eliminarUltimoElemento() {
    let lista = document.getElementById("lista");
    var hijo = lista.lastChild;
    lista.removeChild(hijo);
}
function eliminarPrimerElemento() {
    let lista = document.getElementById("lista");
    var hijo = lista.firstChild;
    lista.removeChild(hijo);
}
function sustituirElemento() {
    let item = document.getElementById("itemInput");
    let lista = document.getElementById("lista");
    let parrafo = document.createElement("li")
    parrafo.textContent = item.value;
    lista.replaceChild(parrafo, lista.firstChild);
    item.value = "";

}