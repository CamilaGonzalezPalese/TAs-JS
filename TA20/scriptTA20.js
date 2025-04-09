let imag = document.getElementById('imag');
let div = document.createElement('div');

imag.addEventListener('mouseover', function(e) {
    imag.src = 'gatobostezando.png';
});
imag.addEventListener('mouseout', function(e) {
    imag.src = 'stitch.jpg';
});