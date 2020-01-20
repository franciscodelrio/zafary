const boton = window.document.querySelector('#boton');
const mensajeError = document.querySelector('.error');

boton.addEventListener('click', mostrarDatos);

function mostrarDatos() {

    const input1 = window.document.querySelector('#correo');
    const user = input1.value;
    const input2 = window.document.querySelector('#password');
    const pass = input2.value;

    console.log(user);
    input1.value = '';
    input1.focus();

    console.log(pass);
    input2.value = '';
    input2.focus();

    if (user === 'ejemplo@gmail.com' & pass === '123456') {
        document.location.assign('./../layout/index.html');
    } else {
        mensajeError.classList.remove('oculto');
        mensajeError.classList.add('visible');
    }
}