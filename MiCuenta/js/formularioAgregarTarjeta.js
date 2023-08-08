const botonAbrirFormulario = document.getElementById('btn-abrirFormulario');
const botonCerrarFormulario = document.getElementById('btn-cerrarFormulario');
const botonCancelarFormulario = document.getElementById('btn-cancelarFormulario');
const contFormulario = document.getElementById('formulario-tarjeta');
const inputNumero = document.getElementById('input-numero');
const inputNombre = document.getElementById('input-nombre');
const inputCCV = document.getElementById('input-ccv');
const logoMarca = document.getElementById('cont-icono-tarjeta');



//Añade los meses al select
for (let i = 1; i <= 12; i++) {
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText = i;
    contFormulario.selectMes.appendChild(opcion);
}

//Añade los años al select
const annoActual = new Date().getFullYear();
for (let i = annoActual; i <= annoActual + 8; i++) {
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText = i;
    contFormulario.selectAnno.appendChild(opcion);
}


// Validación
// Input numero de tarjeta
inputNumero.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    inputNumero.value = valorInput
        .replace(/\s/g, '') //Elimina los espacios en blanco
        .replace(/\D/gm, '') //Elimina las letras
        .replace(/([0-9]{4})/g, '$1 ') //Agrega espacios cada 4 numeros
        .trim(); //Elimina el ultimo espacio

    if (valorInput == '') {
        logoMarca.innerHTML = '';
    }

    if (valorInput[0] == 4) {
        logoMarca.innerHTML = '';
        const imagen = document.createElement('img');
        imagen.src = '../imgs/visa.png';
        logoMarca.appendChild(imagen);
        inputNumero.style.borderColor = '#30475E';
    } else if (valorInput[0] == 5) {
        logoMarca.innerHTML = '';
        const imagen = document.createElement('img');
        imagen.src = '../imgs/mastercard.png';
        logoMarca.appendChild(imagen);
        inputNumero.style.borderColor = '#30475E';
    } else if (valorInput[0] == 0 || valorInput[0] == 1 || valorInput[0] == 2 || valorInput[0] == 3 || valorInput[0] == 6 || valorInput[0] == 7 || valorInput[0] == 8 || valorInput[0] == 9) {
        inputNumero.value = valorInput.replace(/[0-9]/g, '');
        swal.fire({
            'position': 'top-end',
            'icon': 'error',
            'title': 'Solo se aceptan tarjetas Visa o MasterCard ',
            'background': '#EEEEEE',
            showConfirmButton: false,
            'timer': '1500'
        })

    }
});

// Input nombre de tarjeta
inputNombre.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    inputNombre.value = valorInput.replace(/[0-9]/g, '');
});

//Input CCV
inputCCV.addEventListener('keyup', (e) => {
    inputCCV.value = inputCCV.value
        .replace(/\s/g, '') //Elimina los espacios en blanco
        .replace(/\D/gm, '') //Elimina las letras
})



const abrirFormulario = () => {
    contFormulario.style.display = 'block';
    botonAbrirFormulario.style.display = 'none';
}

const cerrarFormulario = () => {
    if (inputNombre.value == '' || inputNumero.value == '' || inputCCV.value == '' || contFormulario.selectMes.value == '' || contFormulario.selectAnno.value == '' || inputNumero.value.length < 19) {
        swal.fire({
            'icon': 'error',
            'title': 'No se ha podido añadir la tarjeta',
            'text': 'Por favor rellene los campos resaltados',
            'background': '#EEEEEE',
            'confirmButtonColor': '#FBD46D',
            'confirmButtonText': 'Entendido',
            'confirmButtonAriaLabel': 'Verdana, Geneva, Tahoma, sans-serif',
        })

        if (inputNumero.value == '' || inputNumero.value.length < 19) {
            inputNumero.style.borderColor = 'red';
        } else {
            inputNumero.style.borderColor = '#30475E';
        }

        if (inputNombre.value == '') {
            inputNombre.style.borderColor = 'red';
        } else {
            inputNombre.style.borderColor = '#30475E';
        }

        if (contFormulario.selectMes.value == '') {
            contFormulario.selectMes.style.borderColor = 'red';
        } else {
            contFormulario.selectMes.style.borderColor = '#30475E';
        }

        if (contFormulario.selectAnno.value == '') {
            contFormulario.selectAnno.style.borderColor = 'red';
        } else {
            contFormulario.selectAnno.style.borderColor = '#30475E';
        }

        if (inputCCV.value == '' || inputCCV.value.length < 3) {
            inputCCV.style.borderColor = 'red';
        } else {
            inputCCV.style.borderColor = '#30475E';
        }

    }

    if (inputNombre.value != '' && inputNumero.value != '' && inputCCV.value != '' && contFormulario.selectMes.value != '' && contFormulario.selectAnno.value != '' && inputNumero.value.length == 19 && inputCCV.value.length >= 3) {
        Swal.fire({
            'icon': 'success',
            'title': 'Tarjeta añadida con exito',
            'text': 'Se ha actualizado sus metodos de pago con exito',
            'background': '#EEEEEE',
            'confirmButtonColor': '#FBD46D',
            'confirmButtonText': 'Entendido',
            'confirmButtonAriaLabel': 'Verdana, Geneva, Tahoma, sans-serif',
        }).then(() => {
            inputNumero.value = '';
            inputNombre.value = '';
            contFormulario.selectMes.value = '';
            contFormulario.selectAnno.value = '';
            inputCCV.value = '';
        });
        logoMarca.innerHTML = '';
        contFormulario.style.display = 'none';
        botonAbrirFormulario.style.display = 'block';
        inputNumero.style.borderColor = '#30475E';
        inputNombre.style.borderColor = '#30475E';
        contFormulario.selectMes.style.borderColor = '#30475E';
        contFormulario.selectAnno.style.borderColor = '#30475E';
        inputCCV.style.borderColor = '#30475E';
    }

}

const cancelarFormulario = () => {
    contFormulario.style.display = 'none';
    botonAbrirFormulario.style.display = 'block';
}



botonAbrirFormulario.addEventListener('click', abrirFormulario);
botonCerrarFormulario.addEventListener('click', cerrarFormulario);
botonCancelarFormulario.addEventListener('click', cancelarFormulario);