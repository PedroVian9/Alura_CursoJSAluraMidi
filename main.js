function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < listaDeTeclas.length) {
    listaDeTeclas[contador].onclick = function {
        tocaSom('#som_tecla_pom');
    }

    contador = contador + 1;

    console.log(contador);
}

// listaDeTeclas[0].onclick = tocaSomPom;
// document.querySelector('.tecla_pom').onclick = tocaSomPom;