const seccionListaLibros = document.querySelector('#list-libros');
const inputFiltro = document.getElementById('txt-filtro');

let listaLibros = [];

const inicializar = async() => {
    listaLibros = await obtenerListaDatos('/listar-libros');
    mostrarDatos();
};


const mostrarDatos = () => {
    seccionListaLibros.innerHTML = '';
    listaLibros.forEach(libroAUX => {
        if (libroAUX.titulo.toLowerCase().includes(inputFiltro.value.toLowerCase()) || libroAUX.autor.toLowerCase().includes(inputFiltro.value.toLowerCase())) {
            let carta = document.createElement('div');
            carta.classList.add('cont-infoLibros');

            //div imagen 
            let divImagen = document.createElement('div');
            divImagen.classList.add('cont-imagen');
            let aLibro = document.createElement('a');
            aLibro.href = '../perfilLibro.html';
            let imagen = document.createElement('img');
            imagen.src = libroAUX.foto;

            aLibro.appendChild(imagen);
            divImagen.appendChild(aLibro);


            //div informacion libro
            let divInformacion = document.createElement('div');
            divInformacion.classList.add('cont-informacion-libro');

            //div autor y titulo 
            let divTituloAutor = document.createElement('div');
            divTituloAutor.classList.add('cont-info-libro');

            let aTitulo = document.createElement('a');
            aTitulo.classList.add('txt-titulo-libro');
            aTitulo.href = '../perfilLibro.html';
            aTitulo.textContent = libroAUX.titulo;
            aTitulo.classList.add('txt-titulo-libro')

            let aAutor = document.createElement('a');
            aAutor.classList.add('txt-autor-libro');
            aAutor.href = '../perfildeautor.html';
            aAutor.textContent = libroAUX.autor;
            aAutor.classList.add('txt-autor-libro')

            divTituloAutor.appendChild(aTitulo);
            divTituloAutor.appendChild(aAutor);
            divInformacion.appendChild(divTituloAutor)

            //div monto
            let divMonto = document.createElement('div');
            divMonto.classList.add('cont-monto')

            let hTextoMonto = document.createElement('h2');
            hTextoMonto.classList.add('txt');
            hTextoMonto.textContent = 'Monto:'

            let hMonto = document.createElement('h2');
            hMonto.textContent = libroAUX.precio;

            divMonto.appendChild(hTextoMonto);
            divMonto.appendChild(hMonto);
            divInformacion.appendChild(divMonto);

            //div editorial
            let divEditorial = document.createElement('div');
            divEditorial.classList.add('cont-info-fecha');

            let hEditorial = document.createElement('h2');
            hEditorial.classList.add('txt');
            hEditorial.textContent = 'Editorial:';

            let hNombreEditorial = document.createElement('h2');
            hNombreEditorial.classList.add('txt-fecha-compra');
            hNombreEditorial.textContent = libroAUX.editorial;

            divEditorial.appendChild(hEditorial);
            divEditorial.appendChild(hNombreEditorial);
            divInformacion.appendChild(divEditorial);

            //boton
            let aBoton = document.createElement('a');
            aBoton.href = 'editarLibro.html';

            let boton = document.createElement('button');
            boton.classList.add('btn');
            boton.textContent = 'Editar';

            aBoton.appendChild(boton);

            //Union de todos los elementos en el div principal
            carta.appendChild(divImagen);
            carta.appendChild(divInformacion);
            carta.appendChild(aBoton);
            seccionListaLibros.appendChild(carta);

        }
    })
};

inicializar();
inputFiltro.addEventListener('keyup', () => {
    mostrarDatos();
});