const personas = [
  { name: "Maria" },
  { name: "Juan" },
  { name: "Pedro" },
  { name: "Manuel" },
];

const lista = document.querySelector(".personas");
const inputBusq = document.getElementById("itemInput");

function renderLista(personasFiltradas) {
  lista.innerHTML = personasFiltradas
    .map((persona) => `<li>${persona.name}</li>`)
    .join("");
}
function Buscar() {
  const valorBusqueda = inputBusq.value.toLowerCase();
  const filtradas = personas.filter((persona) =>
    persona.name.toLowerCase().includes(valorBusqueda)
  );

  if (filtradas.length == 0) {
    lista.innerHTML = "<li>No se encontraron resultados</li>";
  } else {
    renderLista(filtradas);
  }
}
inputBusq.addEventListener("input", Buscar);
renderLista(personas);