const seccionListaLibros = document.querySelector('#list-libros');

let listaLibros = [];

const inicializar = async() => {
    listaLibros = await obtenerListaDatos('/listar-libros');

    mostrarDatos();
};

const mostrarDatos = () => {
    seccionListaLibros.innerHTML = '';

    listaLibros.forEach(libroAUX => {
        let carta = document.createElement('div');
        carta.classList.add('carousel__elemento');

        //div imagen 
        let divImagen = document.createElement('div');
        divImagen.classList.add('cont-img-libro');
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
        aTitulo.classList.add('titulo-libro');
        aTitulo.href = '../perfilLibro.html';
        aTitulo.textContent = libroAUX.titulo;
        aTitulo.classList.add('titulo-libro')

        let aAutor = document.createElement('a');
        aAutor.classList.add('detalle-secundario');
        aAutor.href = '../perfildeautor.html';
        aAutor.textContent = libroAUX.autor;
        aAutor.classList.add('detalle-secundario')

        divTituloAutor.appendChild(aTitulo);
        divTituloAutor.appendChild(aAutor);
        divInformacion.appendChild(divTituloAutor);

        //div monto
        let divMonto = document.createElement('div');
        divMonto.classList.add('detalle-secundario')

        let hTextoMonto = document.createElement('h2');
        hTextoMonto.classList.add('txt');
        hTextoMonto.textContent = 'Monto:'

        let hMonto = document.createElement('h2');
        hMonto.textContent = libroAUX.precio;

        divMonto.appendChild(hTextoMonto);
        divMonto.appendChild(hMonto);
        divInformacion.appendChild(divMonto);

        carta.appendChild(divImagen);
        carta.appendChild(divInformacion);
        carta.appendChild(aBoton);
        seccionListaLibros.appendChild(carta);
    })

};

inicializar();