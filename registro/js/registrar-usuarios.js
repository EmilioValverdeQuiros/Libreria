'use strict';

const botonRegistrar = document.getElementById('btn-registrarse');
const foto = document.querySelector('#user-photo');
const inputNombre = document.getElementById('txt-nombre');
const inputApellido1 = document.getElementById('txt-apellido1');
const inputApellido2 = document.getElementById('txt-apellido2');
const inputFechaNacimiento = document.getElementById('txt-fechaNacimiento');
const inputProvincia = document.getElementById('slt-provincias');
const inputCanton = document.getElementById('slt-cantones');
const inputDistrito = document.getElementById('slt-distritos');
const inputGenero = document.getElementById('slt-genero');
const inputTipoIdentificacion = document.getElementById('slt-tipo-identificacion');
const inputIdentificacion = document.getElementById('txt-identificacion');
const inputCorreo = document.getElementById('txt-correo');
const inputContra = document.getElementById('txt-contrasenna');
const inputConfirmacion = document.getElementById('txt-confirmacion');

let password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
let email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


const validar = () => {
    let hayError = false;

    if (inputNombre.value == '') {
        hayError = true;
        inputNombre.style.border = 'red solid 2px'
    } else {
        hayError = false;
        inputNombre.style.border = '#30475E solid 2px';
    }

    if (inputApellido1.value == '') {
        hayError = true;
        inputApellido1.style.border = 'red solid 2px'
    } else {
        hayError = false;
        inputApellido1.style.border = '#30475E solid 2px';
    }

    if (inputApellido2.value == '') {
        hayError = true;
        inputApellido2.style.border = 'red solid 2px'
    } else {
        hayError = false;
        inputApellido2.style.border = '#30475E solid 2px';
    }

    if (inputFechaNacimiento.value == '') {
        hayError = true;
        inputFechaNacimiento.style.border = 'red solid 2px'
    } else {
        hayError = false;
        inputFechaNacimiento.style.border = '#30475E solid 2px';
    }

    if (inputProvincia.value == '') {
        hayError = true;
        inputProvincia.style.border = 'red solid 2px'
    } else {
        hayError = false;
        inputProvincia.style.border = '#30475E solid 2px';
    }

    if (inputCanton.value == '') {
        hayError = true;
        inputCanton.style.border = 'red solid 2px'
    } else {
        hayError = false;
        inputCanton.style.border = '#30475E solid 2px';
    }

    if (inputDistrito.value == '') {
        hayError = true;
        inputDistrito.style.border = 'red solid 2px'
    } else {
        hayError = false;
        inputDistrito.style.border = '#30475E solid 2px';
    }


    if (inputGenero.value == '') {
        hayError = true;
        inputGenero.style.border = 'red solid 2px'
    } else {
        hayError = false;
        inputGenero.style.border = '#30475E solid 2px';
    }

    if (inputTipoIdentificacion.value == '') {
        hayError = true;
        inputTipoIdentificacion.style.border = 'red solid 2px'
    } else {
        hayError = false;
        inputTipoIdentificacion.style.border = '#30475E solid 2px';
    }

    if (inputIdentificacion.value == '') {
        hayError = true;
        inputIdentificacion.style.border = 'red solid 2px'
    } else {
        hayError = false;
        inputIdentificacion.style.border = '#30475E solid 2px';
    }

    if (inputCorreo.value == '') {
        hayError = true;
        inputCorreo.style.border = 'red solid 2px'
    } else {
        hayError = false;
        inputCorreo.style.border = '#30475E solid 2px';
    }


    if (inputContra.value != inputConfirmacion.value || (inputContra.value == '' || inputConfirmacion.value == '')) {
        hayError = true;
        inputContra.style.border = 'red solid 2px'
        inputConfirmacion.style.border = 'red solid 2px'
    } else {
        hayError = false;
        inputContra.style.border = '#30475E solid 2px';
        inputConfirmacion.style.border = '#30475E solid 2px';
    }


    if (!email.test(inputCorreo.value)) {
        hayError = true;
        swal.fire({
            'icon': 'error',
            'title': 'Correo electrónico invalido',
            'text': 'Por favor ingrese un correo electrónico valido',
            'background': '#EEEEEE',
            'confirmButtonColor': '#FBD46D',
            'confirmButtonText': 'Entendido',
            'confirmButtonAriaLabel': 'Verdana, Geneva, Tahoma, sans-serif',
        })
    } else if (inputContra.value.length < 8) {
        hayError = true;
        swal.fire({
            'icon': 'error',
            'title': 'No se ha podido cambiar la contraseña',
            'text': 'La nueva contraseña debe ser contener ocho o mas valores',
            'background': '#EEEEEE',
            'confirmButtonColor': '#FBD46D',
            'confirmButtonText': 'Entendido',
            'confirmButtonAriaLabel': 'Verdana, Geneva, Tahoma, sans-serif',
        })
        inputConfirmacion.style.border = '#30475E solid 2px'
        inputContra.style.border = '#30475E solid 2px'
    } else if (!inputContra.value.match(password)) {
        swal.fire({
            'icon': 'error',
            'title': 'No se ha podido cambiar la contraseña',
            'text': 'La nueva contraseña debe ser contener un número, una letra minúscula y una mayúscula',
            'background': '#EEEEEE',
            'confirmButtonColor': '#FBD46D',
            'confirmButtonText': 'Entendido',
            'confirmButtonAriaLabel': 'Verdana, Geneva, Tahoma, sans-serif',
        })
        inputConfirmacion.style.border = '#30475E solid 2px'
        inputContra.style.border = '#30475E solid 2px'
        hayError = true;
    } else if (hayError == true) {
        swal.fire({
            'icon': 'error',
            'title': 'No se ha podido registrar',
            'text': 'Por favor rellene los campos resaltados',
            'background': '#EEEEEE',
            'confirmButtonColor': '#FBD46D',
            'confirmButtonText': 'Entendido',
            'confirmButtonAriaLabel': 'Verdana, Geneva, Tahoma, sans-serif',
        })
    } else {
        let usuario = {
            tipoUsuario: 2,
            foto: foto.src,
            nombre: inputNombre.value,
            primerApellido: inputApellido1.value,
            segundoApellido: inputApellido2.value,
            nacimiento: inputFechaNacimiento.value,
            provincia: inputProvincia.value,
            canton: inputCanton.value,
            distrito: inputDistrito.value,
            genero: inputGenero.value,
            tipoIdentificacion: inputTipoIdentificacion.value,
            identificacion: inputIdentificacion.value,
            correo: inputCorreo.value,
            contrasenna: inputContra.value
        };

        registrarDatos(usuario, '/registrar-usuario');

        Swal.fire({
            'icon': 'success',
            'title': 'Usuario registrado con éxito',
            'text': 'Se ha actualizado su contraseña con éxito',
            'background': '#EEEEEE',
            'confirmButtonColor': '#FBD46D',
            'confirmButtonText': 'Entendido',
            'confirmButtonAriaLabel': 'Verdana, Geneva, Tahoma, sans-serif',
        }).then(() => {
            window.location.href = '../index.html';
        });
    }
};

botonRegistrar.addEventListener("click", validar);