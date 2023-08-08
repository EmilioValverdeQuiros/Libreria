'use strict';

const botonConfirmar = document.getElementById('btn-confirmar-cambios');
const botonEliminarFoto = document.getElementById('btn-eliminar-foto');
const foto = document.querySelector('#user-photo');
const inputTitulo = document.getElementById('input-titulo');
const inputAutor = document.getElementById('input-autor');
const inputISBN = document.getElementById('input-isbm');
const inputFechaPublicacion = document.getElementById('input-fecha-publicacion');
const inputEditorial = document.getElementById('input-editorial');
const inputReseña = document.getElementById('input-reseña');
const inputPrecio = document.getElementById('input-precio');
const inputDescuento = document.getElementById('input-descuento');
const inputCategoria = document.getElementById('input-categoria');

let checkboxPastaDura = document.getElementById('input-formato1');
let checkboxPastaSuave = document.getElementById('input-formato2');
let checkboxDigital = document.getElementById('input-formato3');
let checkboxAudioLibro = document.getElementById('input-formato4');
let checkboxBraile = document.getElementById('input-formato5');

let estadoCheckboxPastaDura = false;
let estadoCheckboxPastaSuave = false;
let estadoCheckboxDigital = false;
let estadoCheckboxAudioLibro = false;
let estadoCheckboxBraile = false;


//Validaciones para cada checkbox de los formatos disponibles del libro
checkboxPastaDura.addEventListener("change", validaCheckbox1, false);

function validaCheckbox1() {
    let checked = checkboxPastaDura.checked;
    estadoCheckboxPastaDura = checked;
}

checkboxPastaSuave.addEventListener("change", validaCheckbox2, false);

function validaCheckbox2() {
    let checked = checkboxPastaSuave.checked;
    estadoCheckboxPastaSuave = checked;
}

checkboxDigital.addEventListener("change", validaCheckbox3, false);

function validaCheckbox3() {
    let checked = checkboxPastaSuave.checked;
    estadoCheckboxPastaSuave = checked;
}

checkboxAudioLibro.addEventListener("change", validaCheckbox3, false);

function validaCheckbox3() {
    let checked = checkboxAudioLibro.checked;
    estadoCheckboxAudioLibro = checked;
}

checkboxBraile.addEventListener("change", validaCheckbox3, false);

function validaCheckbox3() {
    let checked = checkboxBraile.checked;
    estadoCheckboxBraile = checked;
}



//});

const inputsIncompletos = () => {
    if (inputTitulo.value == '' || inputAutor.value == '' || inputISBN.value == '' || inputFechaPublicacion.value == '' || inputEditorial.value == '' || inputReseña.value == '' || inputPrecio.value == '' || inputCategoria == '') {

        swal.fire({
            'icon': 'error',
            'title': 'No se ha podido añadir el libro',
            'text': 'Por favor rellene los campos resaltados',
            'background': '#EEEEEE',
            'confirmButtonColor': '#FBD46D',
            'confirmButtonText': 'Entendido',
            'confirmButtonAriaLabel': 'Verdana, Geneva, Tahoma, sans-serif',
        })

        if (inputTitulo.value == '') {
            inputTitulo.style.border = 'red solid 2px'
        } else {
            inputTitulo.style.border = '#30475E solid 2px'
        }

        if (inputAutor.value == '') {
            inputAutor.style.border = 'red solid 2px'
        } else {
            inputAutor.style.border = '#30475E solid 2px'
        }

        if (inputCategoria.value == '') {
            inputCategoria.style.border = 'red solid 2px'
        } else {
            inputCategoria.style.border = '#30475E solid 2px'
        }

        if (inputISBN.value == '') {
            inputISBN.style.border = 'red solid 2px'
        } else {
            inputISBN.style.border = '#30475E solid 2px'
        }

        if (inputFechaPublicacion.value == '') {
            inputFechaPublicacion.style.border = 'red solid 2px'
        } else {
            inputFechaPublicacion.style.border = '#30475E solid 2px'
        }

        if (inputEditorial.value == '') {
            inputEditorial.style.border = 'red solid 2px'
        } else {
            inputEditorial.style.border = '#30475E solid 2px'
        }

        if (inputReseña.value == '') {
            inputReseña.style.border = 'red solid 2px'
        } else {
            inputReseña.style.border = '#30475E solid 2px'
        }

        if (inputPrecio.value == '') {
            inputPrecio.style.border = 'red solid 2px'
        } else {
            inputPrecio.style.border = '#30475E solid 2px'
        }


    } else if (foto.src == '') {
        swal.fire({
            'icon': 'error',
            'title': 'No se ha podido añadir el libro',
            'text': 'Por favor ingrese la foto de libro',
            'background': '#EEEEEE',
            'confirmButtonColor': '#FBD46D',
            'confirmButtonText': 'Entendido',
            'confirmButtonAriaLabel': 'Verdana, Geneva, Tahoma, sans-serif',
        })
    }
}

inputPrecio.addEventListener('keyup', (e) => {
    inputPrecio.value = inputPrecio.value
        .replace(/\s/g, '') //Elimina los espacios en blanco
        .replace(/\D/gm, '') //Elimina las letras
})

inputDescuento.addEventListener('keyup', (e) => {
    inputDescuento.value = inputDescuento.value
        .replace(/\s/g, '') //Elimina los espacios en blanco
        .replace(/\D/gm, '') //Elimina las letras
})



const confirmarCambios = () => {

    inputsIncompletos();

    if (inputTitulo.value != '' && inputAutor.value != '' && inputISBN.value != '' && inputFechaPublicacion.value != '' && inputEditorial.value != '' && inputReseña.value != '' && inputPrecio.value != '' && inputCategoria != '' && foto.src != '') {
        let libro = {
            titulo: inputTitulo.value,
            foto: foto.src,
            autor: inputAutor.value,
            isbn: inputISBN.value,
            fechaPublicacion: inputFechaPublicacion.value,
            editorial: inputEditorial.value,
            reseña: inputReseña.value,
            precio: inputPrecio.value,
            porcentajeDescuento: inputDescuento.value,
            pastaDura: estadoCheckboxPastaDura,
            pastaSuave: estadoCheckboxPastaSuave,
            digital: estadoCheckboxDigital,
            audioLibro: estadoCheckboxAudioLibro,
            braile: estadoCheckboxBraile,
            categoria: inputCategoria.value
        };

        registrarDatos(libro, '/registrar-libro');

        Swal.fire({
            'icon': 'success',
            'title': 'Libro añadido con exito',
            'background': '#EEEEEE',
            'confirmButtonColor': '#FBD46D',
            'confirmButtonText': 'Entendido',
            'confirmButtonAriaLabel': 'Verdana, Geneva, Tahoma, sans-serif',
        }).then(() => {
            //Redireccionar a otra pagina
            window.location.href = '../miCuentaAdmin/librosAdmin.html';
        });
    }

}

const eliminarFoto = () => {
    console.log(checkedPastaDura)
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

botonConfirmar.addEventListener('click', confirmarCambios);
botonEliminarFoto.addEventListener('click', eliminarFoto);