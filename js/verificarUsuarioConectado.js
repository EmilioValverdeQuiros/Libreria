const miCuenta = document.getElementById('miCuenta')

let usuario = JSON.parse(localStorage.getItem('UsuarioConectado'));

if (usuario.tipoUsuario == 1) {
    miCuenta.href = '/miCuentaAdmin/miCuentaAdmin.html'
    miCuenta.textContent = 'Mi cuenta'
} else if (usuario.tipoUsuario == 2) {
    miCuenta.href = '/miCuenta/miCuenta.html'
    miCuenta.textContent = 'Mi cuenta'
}