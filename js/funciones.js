/* Funciones */

function createArray(cantFotos, carouselContenedor, category, classname, description) {
    const ARRAY_PRODUCTS = Array.from({ length: cantFotos }, (_, i) => i + 1)
    for (const product of ARRAY_PRODUCTS) {
        carouselContenedor.appendChild(carouselItemBuilder(product, category, classname, description))
    }
}

function carouselItemBuilder(number, category, classname, description) {
    const IMAGE_CONTAINER = document.createElement('div')
    IMAGE_CONTAINER.className = `producto ${classname}`
    const IMAGE = document.createElement('img')
    IMAGE.src = `img/Productos/${category}/${number}.jpg`
    IMAGE.alt = `${description}`
    IMAGE_CONTAINER.appendChild(IMAGE)
    return IMAGE_CONTAINER
}

function createCarouselArrow(selectorFila, selectorFlechaIzq, selectorFlechaDer, selectorIndicador) {
    const FILA = document.querySelector(selectorFila);

    const FLECHA_IZQ = document.getElementById(selectorFlechaIzq);
    const FLECHA_DER = document.getElementById(selectorFlechaDer);

    FLECHA_DER.addEventListener('click', () => {
        FILA.scrollLeft += FILA.offsetWidth;
        const indicadorActivo = document.querySelector(`${selectorIndicador} .activo`);
        if (indicadorActivo.nextSibling) {
            indicadorActivo.nextSibling.classList.add('activo');
            indicadorActivo.classList.remove('activo');
        }
    });

    FLECHA_IZQ.addEventListener('click', () => {
        FILA.scrollLeft -= FILA.offsetWidth;
        const indicadorActivo = document.querySelector(`${selectorIndicador} .activo`);
        if (indicadorActivo.previousSibling) {
            indicadorActivo.previousSibling.classList.add('activo');
            indicadorActivo.classList.remove('activo');
        }
    });
}

function calculoIndicadores(selectorIndicador, selectorFila, selectorProduct) {
    const FILA = document.querySelector(selectorFila);
    const PRODUCTO = document.querySelectorAll(selectorProduct);
    const NUM_PAGINAS_TAZAS_WEB = Math.ceil(PRODUCTO.length / 5);
    const NUM_PAGINAS_TAZAS_TABLET = Math.ceil(PRODUCTO.length / 4);
    const NUM_PAGINAS_TAZAS_MOBIL = Math.ceil(PRODUCTO.length / 2);

    const INDICADORES = document.querySelector(selectorIndicador);
    INDICADORES.innerHTML = ''
    if (window.innerWidth < 576) {
        for (let i = 0; i < NUM_PAGINAS_TAZAS_MOBIL; i++) {
            const INDICADOR = document.createElement('button');
            INDICADORES.appendChild(INDICADOR);
            indicadorActivo(INDICADOR, FILA, i, selectorIndicador)
        }
    } else if (window.innerWidth < 768) {
        for (let i = 0; i < NUM_PAGINAS_TAZAS_TABLET; i++) {
            const INDICADOR = document.createElement('button');
            INDICADORES.appendChild(INDICADOR);
            indicadorActivo(INDICADOR, FILA, i, selectorIndicador)
        }
    } else {
        for (let i = 0; i < NUM_PAGINAS_TAZAS_WEB; i++) {
            const INDICADOR = document.createElement('button');
            INDICADORES.appendChild(INDICADOR);
            indicadorActivo(INDICADOR, FILA, i, selectorIndicador)
        }
    };
}

function indicadorActivo(indicador, fila, i, selectorIndicador) {
    if (i === 0) {
        indicador.classList.add('activo');
    }
    indicador.addEventListener('click', (e) => {
        fila.scrollLeft = i * fila.offsetWidth;

        document.querySelector(`${selectorIndicador} .activo`).classList.remove('activo');
        e.target.classList.add('activo');
    });
}


/* Funcion para crear Carousel productos por categoria */

function createCarouselByCategory(selectorCarousel, cantFotos, category, classname, descriptionImg, selectorContenedorCarousel, selectorFlechaIzq, selectorFlechaDer, selectorIndicadores, selectorProduct) {
    const CAROUSEL_CONTENEDOR = document.getElementById(selectorCarousel);
    const CANT_FOTOS = cantFotos;
    const ARRAY_TAZAS = createArray(CANT_FOTOS, CAROUSEL_CONTENEDOR, category, classname, descriptionImg);
    const CAROUSEL_ARROW_TAZAS = createCarouselArrow(selectorContenedorCarousel, selectorFlechaIzq, selectorFlechaDer, selectorIndicadores);
    const INDICADORES_TAZAS = calculoIndicadores(selectorIndicadores, selectorContenedorCarousel, selectorProduct);
    window.addEventListener('resize', () => { calculoIndicadores(selectorIndicadores, selectorContenedorCarousel, selectorProduct) });

}


/* Creacion carouseles por categoria de producto */

/* Ultimos Ingresos */
const CREATE_CAROUSEL_ULTIMOS_ING = createCarouselByCategory('carousel-ultimos_ingresos', 6, 'Ultimos_Ingresos', 'producto-tazas', 'foto taza', '.contenedor-carousel-tazas', 'flecha-izquierda-tazas', 'flecha-derecha-tazas', '#indicadores-tazas', '.producto-tazas');

/* Todo para el Mate */
const CREATE_CAROUSEL_TD_MATE = createCarouselByCategory('carousel-TD_Mate', 11, 'TD_Mate', 'producto-mates', 'foto mate', '.contenedor-carousel-mates', 'flecha-izquierda-mates', 'flecha-derecha-mates', '#indicadores-mates', '.producto-mates');

/* Todo para la Cocina */
const CREATE_CAROUSEL_TD_COCINA = createCarouselByCategory('carousel-cocina', 6, 'Cocina', 'producto-cocina', 'foto cocina', '.contenedor-carousel-cocina', 'flecha-izquierda-cocina', 'flecha-derecha-cocina', '#indicadores-cocina', '.producto-cocina');

/* fragancias */
const CREATE_CAROUSEL_TD_FRAGANCIAS = createCarouselByCategory('carousel-TD_Fragancias', 11, 'TD_Fragancias', 'producto-fragancias', 'foto fragancias', '.contenedor-carousel-fragancias', 'flecha-izquierda-fragancias', 'flecha-derecha-fragancias', '#indicadores-fragancias', '.producto-fragancias');

