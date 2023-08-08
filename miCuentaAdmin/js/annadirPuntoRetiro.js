const botonAnnadirPunto = document.getElementById('btn-añadir-puntoRetiro');


const selectSocioComercial = document.getElementById('select-socio');
const selectProvincia = document.getElementById('select-provincia');
const selectCanton = document.getElementById('select-canton');
const selectDistrito = document.getElementById('select-distrito');
const inputDireccion = document.getElementById('input-direccion');


const confirmarCambios = () => {

    if (selectSocioComercial.value == '' || selectProvincia.value == '' || selectCanton.value == '' || inputDireccion.value == '' || selectDistrito.value == '') {

        swal.fire({
            'icon': 'error',
            'title': 'No se ha podido añadir el punto de retiro',
            'text': 'Por favor rellene los campos resaltados',
            'background': '#EEEEEE',
            'confirmButtonColor': '#FBD46D',
            'confirmButtonText': 'Entendido',
            'confirmButtonAriaLabel': 'Verdana, Geneva, Tahoma, sans-serif',
        })

        if (selectSocioComercial.value == '') {
            selectSocioComercial.style.border = 'red solid 2px'
        } else {
            selectSocioComercial.style.border = '#30475E solid 2px'
        }

        if (selectProvincia.value == '') {
            selectProvincia.style.border = 'red solid 2px'
        } else {
            selectProvincia.style.border = '#30475E solid 2px'
        }

        if (selectCanton.value == '') {
            selectCanton.style.border = 'red solid 2px'
        } else {
            selectCanton.style.border = '#30475E solid 2px'
        }

        if (inputDireccion.value == '') {
            inputDireccion.style.border = 'red solid 2px'
        } else {
            inputDireccion.style.border = '#30475E solid 2px'
        }

        if (selectDistrito.value == '') {
            selectDistrito.style.border = 'red solid 2px'
        } else {
            selectDistrito.style.border = '#30475E solid 2px'
        }



    }

    if (selectSocioComercial.value != '' && selectProvincia.value != '' && selectCanton.value != '' && inputDireccion.value != '' && selectDistrito.value != '') {
        Swal.fire({
            'icon': 'success',
            'title': 'Punto de retiro añadido con exito',
            'background': '#EEEEEE',
            'confirmButtonColor': '#FBD46D',
            'confirmButtonText': 'Entendido',
            'confirmButtonAriaLabel': 'Verdana, Geneva, Tahoma, sans-serif',
        }).then(() => {
            //Redireccionar a otra pagina
            window.location.href = '../miCuentaAdmin/puntosRetiroAdmin.html';
        });
    }

}




botonAnnadirPunto.addEventListener('click', confirmarCambios);