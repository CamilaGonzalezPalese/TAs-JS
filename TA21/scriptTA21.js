let inpuItem = document.getElementById('inpuItem');
let div = document.createElement('div');
const borderColorOriginal = inpuItem.style.borderColor;

inpuItem.addEventListener("focus", (event) => {
    event.target.style.borderColor  = "#333";
});

inpuItem.addEventListener("blur", (event) => {
    event.target.style.backgroundColor = borderColorOriginal;
});