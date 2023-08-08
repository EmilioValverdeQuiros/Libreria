const inputActual = document.getElementById('txt-contraseñaActual');
const inputContra = document.getElementById('txt-nuevaContraseña');
const inputConfirmacion = document.getElementById('txt-confirmarContraseña');
const botonCambioContraseña = document.getElementById('btn-cambioContraseña');

let password = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

const validarCambioContraseña = () => {

    if (inputActual.value == '' || inputContra.value == '' || inputConfirmacion.value == '') {
        swal.fire({
            'icon': 'error',
            'title': 'No se ha podido cambiar la contraseña',
            'text': 'Por favor rellene los campos resaltados',
            'background': '#EEEEEE',
            'confirmButtonColor': '#FBD46D',
            'confirmButtonText': 'Entendido',
            'confirmButtonAriaLabel': 'Verdana, Geneva, Tahoma, sans-serif',
        })

        if (inputActual.value == '') {
            inputActual.style.border = 'red solid 2px'
        } else {
            inputActual.style.border = '#30475E solid 2px'
        }

        if (inputContra.value == '') {
            inputContra.style.border = 'red solid 2px'
        } else {
            inputContra.style.border = '#30475E solid 2px'
        }

        if (inputConfirmacion.value == '') {
            inputConfirmacion.style.border = 'red solid 2px'
        } else {
            inputConfirmacion.style.border = '#30475E solid 2px'
        }
    }

    if (inputActual.value != '' && inputContra.value != '' && inputConfirmacion.value != '') {
        inputActual.classList.remove('input-error');
        inputContra.classList.remove('input-error');
        inputConfirmacion.classList.remove('input-error');

        if (inputActual.value == inputContra.value) {
            swal.fire({
                'icon': 'error',
                'title': 'No se ha podido cambiar la contraseña',
                'text': 'La nueva contraseña no puede ser igual a su actual contraseña',
                'background': '#EEEEEE',
                'confirmButtonColor': '#FBD46D',
                'confirmButtonText': 'Entendido',
                'confirmButtonAriaLabel': 'Verdana, Geneva, Tahoma, sans-serif',
            }).then(() => {
                inputActual.value = '';
                inputContra.value = '';
                inputConfirmacion.value = '';
            });
        } else if (inputContra.value != inputConfirmacion.value) {
            swal.fire({
                'icon': 'error',
                'title': 'No se ha podido cambiar la contraseña',
                'text': 'La nueva contraseña debe ser igual a la confirmación',
                'background': '#EEEEEE',
                'confirmButtonColor': '#FBD46D',
                'confirmButtonText': 'Entendido',
                'confirmButtonAriaLabel': 'Verdana, Geneva, Tahoma, sans-serif',
            }).then(() => {
                inputConfirmacion.value = '';
            });
            inputConfirmacion.style.border = '#30475E solid 2px'
            inputContra.style.border = '#30475E solid 2px'
        } else if (inputContra.value.length < 8) {
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
        } else if (inputContra.value == inputConfirmacion.value && inputContra.value.match(password)) {
            Swal.fire({
                'icon': 'success',
                'title': 'Cambio de contraseña exitoso',
                'text': 'Se ha actualizado su contraseña con éxito',
                'background': '#EEEEEE',
                'confirmButtonColor': '#FBD46D',
                'confirmButtonText': 'Entendido',
                'confirmButtonAriaLabel': 'Verdana, Geneva, Tahoma, sans-serif',
            }).then(() => {
                inputActual.value = '';
                inputContra.value = '';
                inputConfirmacion.value = '';
            });
        } else {
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
        }
    }

};

botonCambioContraseña.addEventListener('click', validarCambioContraseña);