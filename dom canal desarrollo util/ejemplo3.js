const clickTitulo=()=>{
    console.log("El usuario hizo click en el titulo");
}

// seleccionamos por id y guardamos en constante
const titulo2 = document.getElementById("tituloForm");




// la manera buena
titulo2.addEventListener("click",clickTitulo);
titulo2.removeEventListener("click",clickTitulo);

// min 9 31 vid 3 eventos canal desarrollo util