const botonConfirmarCambios = document.getElementById('btn-confirmar-cambios');
const botonEliminarFoto = document.getElementById('btn-eliminar-foto');
const inputNombre = document.getElementById('input-nombre');
const selectPais = document.getElementById('select-pais');
const inputFechaNacimiento = document.getElementById('input-fecha-nacimiento');
const inputFechaDefuncion = document.getElementById('input-fecha-defuncion');
const selectGenero = document.getElementById('select-genero');
const inputLibrosPublicados = document.getElementById('input-libros');
const inputTitulos = document.getElementById('input-titulos');
const inputAnnoTitulos = document.getElementById('input-anno-titulo');
const inputResenna = document.getElementById('input-resenna');

const confirmarCambios = () => {

    if (inputNombre.value == '' || selectPais.value == '' || inputFechaNacimiento.value == '' || inputAnnoTitulos.value == '' || selectGenero.value == '' || inputLibrosPublicados.value == '' || inputTitulos.value == '' || inputResenna == '') {

        swal.fire({
            'icon': 'error',
            'title': 'No se ha podido añadir el libro',
            'text': 'Por favor rellene los campos resaltados',
            'background': '#EEEEEE',
            'confirmButtonColor': '#FBD46D',
            'confirmButtonText': 'Entendido',
            'confirmButtonAriaLabel': 'Verdana, Geneva, Tahoma, sans-serif',
        })

        if (inputNombre.value == '') {
            inputNombre.style.border = 'red solid 2px'
        } else {
            inputNombre.style.border = '#30475E solid 2px'
        }

        if (selectPais.value == '') {
            selectPais.style.border = 'red solid 2px'
        } else {
            selectPais.style.border = '#30475E solid 2px'
        }

        if (inputFechaNacimiento.value == '') {
            inputFechaNacimiento.style.border = 'red solid 2px'
        } else {
            inputFechaNacimiento.style.border = '#30475E solid 2px'
        }

        if (selectGenero.value == '') {
            selectGenero.style.border = 'red solid 2px'
        } else {
            selectGenero.style.border = '#30475E solid 2px'
        }

        if (inputLibrosPublicados.value == '') {
            inputLibrosPublicados.style.border = 'red solid 2px'
        } else {
            inputLibrosPublicados.style.border = '#30475E solid 2px'
        }

        if (inputTitulos.value == '') {
            inputTitulos.style.border = 'red solid 2px'
        } else {
            inputTitulos.style.border = '#30475E solid 2px'
        }

        if (inputAnnoTitulos.value == '') {
            inputAnnoTitulos.style.border = 'red solid 2px'
        } else {
            inputAnnoTitulos.style.border = '#30475E solid 2px'
        }

        if (inputResenna.value == '') {
            inputResenna.style.border = 'red solid 2px'
        } else {
            inputResenna.style.border = '#30475E solid 2px'
        }

    }

    if (inputFechaDefuncion <= inputFechaNacimiento) {
        swal.fire({
            'icon': 'error',
            'title': 'No se ha podido añadir el libro',
            'text': 'La fecha de nacimiento no puede ser mayor a la fecha de defunción',
            'background': '#EEEEEE',
            'confirmButtonColor': '#FBD46D',
            'confirmButtonText': 'Entendido',
            'confirmButtonAriaLabel': 'Verdana, Geneva, Tahoma, sans-serif',
        })
        inputFechaNacimiento.value = '';
        inputFechaDefuncion.value = '';
    } else if (inputNombre.value == '' && selectPais.value != '' && inputFechaNacimiento.value != '' && inputAnnoTitulos.value != '' && selectGenero.value != '' && inputLibrosPublicados.value != '' && inputTitulos.value != '' && inputResenna != '') {
        Swal.fire({
            'icon': 'success',
            'title': 'Autor añadido con exito',
            'background': '#EEEEEE',
            'confirmButtonColor': '#FBD46D',
            'confirmButtonText': 'Entendido',
            'confirmButtonAriaLabel': 'Verdana, Geneva, Tahoma, sans-serif',
        }).then(() => {
            //Redireccionar a otra pagina
            window.location.href = '../miCuentaAdmin/autoresAdmin.html';
        });
    }

}

const eliminarFoto = () => {
    Swal.fire({
        title: '¿Está seguro de eliminar la foto?',
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, estoy seguro'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Foto eliminada con éxito',
                '',
                'success'
            )
        }
    })
}

botonConfirmarCambios.addEventListener('click', confirmarCambios);
botonEliminarFoto.addEventListener('click', eliminarFoto);