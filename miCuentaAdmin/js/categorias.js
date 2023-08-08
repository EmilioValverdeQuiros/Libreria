const botonAnnadir = document.getElementById('btn-annadir-categoria')
const botonEliminar1 = document.getElementById('btn-eliminar1')
const botonEliminar2 = document.getElementById('btn-eliminar2')
const botonEliminar3 = document.getElementById('btn-eliminar3')
const inputCategoria = document.getElementById('input-categoria')


const anadirCategoria = () => {

    if (inputCategoria.value == '') {
        inputCategoria.style.border = 'red solid 2px'
        swal.fire({
            'icon': 'error',
            'title': 'No se ha podido añadir la categoría',
            'text': 'Ingrese el nombre de la categoría',
            'background': '#EEEEEE',
            'confirmButtonColor': '#FBD46D',
            'confirmButtonText': 'Entendido',
            'confirmButtonAriaLabel': 'Verdana, Geneva, Tahoma, sans-serif',
        })
    } else {
        inputCategoria.style.border = '#30475E solid 2px'
        Swal.fire({
            'icon': 'success',
            'title': 'Categoría añadida con exito',
            'background': '#EEEEEE',
            'confirmButtonColor': '#FBD46D',
            'confirmButtonText': 'Entendido',
            'confirmButtonAriaLabel': 'Verdana, Geneva, Tahoma, sans-serif',
        }).then(() => {
            inputCategoria.value = ''
        });;
    }

}

const eliminarCategoria = () => {
    Swal.fire({
        title: '¿Está seguro de eliminar la categoría?',
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, estoy seguro'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Categoría eliminada con éxito',
                '',
                'success'
            )
        }
    })
}

botonAnnadir.addEventListener('click', anadirCategoria)
botonEliminar1.addEventListener('click', eliminarCategoria)
botonEliminar2.addEventListener('click', eliminarCategoria)
botonEliminar3.addEventListener('click', eliminarCategoria)