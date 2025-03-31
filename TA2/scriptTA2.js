function reverseString(texto) {
    let reverse = "";
    for (let i = texto.length - 1; i >= 0; i--) {
        reverse += texto[i]
    }
    console.log(reverse);
} reverseString("HOLA");

function reverseString2(texto) {
    console.log(texto.split('').reverse().join(''));
} reverseString2("HOLA");