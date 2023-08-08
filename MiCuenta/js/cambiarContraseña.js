const inputActual = document.getElementById('txt-contraseñaActual');
const inputNueva = document.getElementById('txt-nuevaContraseña');
const inputConfirmacion = document.getElementById('txt-confirmarContraseña');
const botonCambioContraseña = document.getElementById('btn-cambioContraseña');


const validarCambioContraseña = () => {

    if (inputActual.value == '' || inputNueva.value == '' || inputConfirmacion.value == '') {
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

        if (inputNueva.value == '') {
            inputNueva.style.border = 'red solid 2px'
        } else {
            inputNueva.style.border = '#30475E solid 2px'
        }

        if (inputConfirmacion.value == '') {
            inputConfirmacion.style.border = 'red solid 2px'
        } else {
            inputConfirmacion.style.border = '#30475E solid 2px'
        }
    }

    if (inputActual.value != '' && inputNueva.value != '' && inputConfirmacion.value != '') {
        inputActual.classList.remove('input-error');
        inputNueva.classList.remove('input-error');
        inputConfirmacion.classList.remove('input-error');

        if (inputActual.value == inputNueva.value) {
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
                inputNueva.value = '';
                inputConfirmacion.value = '';
            });
        } else if (inputNueva.value != inputConfirmacion.value) {
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
            inputNueva.style.border = '#30475E solid 2px'
        } else if (inputNueva.value == inputConfirmacion.value) {
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
                inputNueva.value = '';
                inputConfirmacion.value = '';
            });
        }
    }

};

botonCambioContraseña.addEventListener('click', validarCambioContraseña);