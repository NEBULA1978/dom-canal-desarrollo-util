function clickTitulo(){
    console.log("El usuario hizo click en el titulo");
}

// seleccionamos por id y guardamos en constante
const titulo2 = document.getElementById("tituloForm");

// cuando hagamos click detecta
titulo2.onclick =clickTitulo;

// las 2anteriores tienen limitaciones de eventos

// la manera buena
titulo2.addEventListener("click",clickTitulo);