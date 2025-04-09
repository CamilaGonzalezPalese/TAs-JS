let inpuItem = document.getElementById('inpuItem');
let div = document.createElement('div');

inpuItem.addEventListener("focus", (event) => {
    event.target.style.background  = "#333";
});

inpuItem.addEventListener("blur", (event) => {
    event.target.style.background  = "#ccc";
});