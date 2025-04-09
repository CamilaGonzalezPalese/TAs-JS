let nom = document.getElementById('name');
let pass = document.getElementById('password');
let email = document.getElementById('email');
let form = document.querySelector('form');
let nameError = document.getElementById('nameError');
let emailError = document.getElementById('emailError');
let passwordError = document.getElementById('passwordError');
let submitButton = document.getElementById('submitButton');
let formValid = false;  

form.addEventListener('submit', function(e) {
    let valid = true;
    if (nom.value.length <= 0)  {
        nameError.textContent = 'El nombre es obligatorio.';
        valid = false;
    } else {
        nameError.textContent = '';
    }
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.length <= 0) {
        emailError.textContent = 'El correo es obligatorio.';
        valid = false;
    } else if (!emailPattern.test(email.value)) {
        emailError.textContent = 'El correo no es válido.';
        valid = false;
    } else {
        emailError.textContent = '';
    }
    if (pass.value.length <= 0) {
        passwordError.textContent = 'La contraseña es obligatoria.';
        valid = false;
    } else if (pass.value.length < 8) {
        passwordError.textContent = 'La contraseña debe tener al menos 8 caracteres.';
        valid = false;
    } else {
        passwordError.textContent = '';
    }

    if (!valid) {
        e.preventDefault();
    }
});
