function añadirElemento() {
    let boton = document.getElementById("boton");
    let item = document.getElementById("itemInput");
    let lista = document.getElementById("listavacia");
    let elemLista = document.createElement("li")
    elemLista.textContent = item.value;
    lista.appendChild(elemLista);
    document.getElementById("itemInput").value = "";

}