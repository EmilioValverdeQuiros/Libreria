const botonEliminarCupon = document.getElementById('btn-eliminar')
const botonAgregarCupon = document.getElementById('btn-agregar')
const inputPorcentajeDescuento = document.getElementById('input-porcentaje')

const eliminarCupon = () => {
    Swal.fire({
        title: '¿Está seguro de eliminar el cupón?',
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, estoy seguro'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Cupón  eliminado con éxito',
                '',
                'success'
            )
        }
    })
}

const annadirCupon = () => {
    if (inputPorcentajeDescuento.value == '') {
        inputPorcentajeDescuento.style.border = 'red solid 2px'
        swal.fire({
            'icon': 'error',
            'title': 'No se ha podido añadir el cupón',
            'text': 'Ingrese el porcentaje de descuento',
            'background': '#EEEEEE',
            'confirmButtonColor': '#FBD46D',
            'confirmButtonText': 'Entendido',
            'confirmButtonAriaLabel': 'Verdana, Geneva, Tahoma, sans-serif',
        })
    } else {
        inputPorcentajeDescuento.style.border = '#30475E solid 2px'
        Swal.fire({
            'icon': 'success',
            'title': 'Cupón añadido con éxito',
            'background': '#EEEEEE',
            'confirmButtonColor': '#FBD46D',
            'confirmButtonText': 'Entendido',
            'confirmButtonAriaLabel': 'Verdana, Geneva, Tahoma, sans-serif',
        }).then(() => {
            inputPorcentajeDescuento.value = ''
        });;
    }
}

botonEliminarCupon.addEventListener('click', eliminarCupon)
botonAgregarCupon.addEventListener('click', annadirCupon)