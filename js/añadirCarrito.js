const botonAnnadirCarrito1 = document.getElementById('añadirCarrito1')
const botonAnnadirCarrito2 = document.getElementById('añadirCarrito2')
const botonAnnadirCarrito3 = document.getElementById('añadirCarrito3')
const botonAnnadirCarrito4 = document.getElementById('añadirCarrito4')
const botonAnnadirCarrito5 = document.getElementById('añadirCarrito5')
const botonAnnadirCarrito6 = document.getElementById('añadirCarrito6')
const botonAnnadirCarrito7 = document.getElementById('añadirCarrito7')
const botonAnnadirCarrito8 = document.getElementById('añadirCarrito8')

const annadirCarrito = () => {
    Swal.fire({
        'icon': 'success',
        'title': 'Libro añadido al carrito con éxito',
        'background': '#EEEEEE',
        'confirmButtonColor': '#FBD46D',
        'confirmButtonText': 'Entendido',
        'confirmButtonAriaLabel': 'Verdana, Geneva, Tahoma, sans-serif',
    });
}

botonAnnadirCarrito1.addEventListener('click', annadirCarrito)
botonAnnadirCarrito2.addEventListener('click', annadirCarrito)
botonAnnadirCarrito3.addEventListener('click', annadirCarrito)
botonAnnadirCarrito4.addEventListener('click', annadirCarrito)
botonAnnadirCarrito5.addEventListener('click', annadirCarrito)
botonAnnadirCarrito6.addEventListener('click', annadirCarrito)
botonAnnadirCarrito7.addEventListener('click', annadirCarrito)
botonAnnadirCarrito8.addEventListener('click', annadirCarrito)