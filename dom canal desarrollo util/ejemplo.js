// aceso al document con f12 veo por consola
// seletor por id
// console.log(document.getElementById("cabecera"));

// sino existe el id sale null
// console.log(document.getElementById("meloinvento"));

// selector por clase
// me devuelve html collection length 0
// console.log(document.getElementsByClassName("meloinvento"));

// me devuelve un array con todos los elementos de esa clase
// console.log(document.getElementsByClassName("border-grey"));

// seleccion por tagname
// console.log(document.getElementsByTagName("li"));

// selector por nobre elemento
// console.log(document.getElementsByName("cabecera"));

// query selector para seleccionar etiquetas css evez de anteriores este:
// de forma individual la1º etiqueta que encuentre de arriba a abjo
// console.log(document.querySelector("li"));
// seleccionar de forma lisatada
// console.log(document.querySelectorAll("li"));
// console.log(document.querySelectorAll(".border-grey"));

// seleccionar por id
// console.log(document.querySelectorAll("#header"));
// console.log(document.querySelector("#header"));

// por name
// console.log(document.querySelector("[name=cabecera]"));

// const elemento = document.getElementById("header");
// escribo en consola lo de abajo para ver
// elemento.children
// document.children
// elemento.parentElement
// document.parentElement

// const lista1 = document.getElementsByClassName("border-grey");
// const lista2 = document.querySelectorAll(".border-grey");


// creando y modificando el html desde javascript min 2 52

// creando un h2 desde javascript
// const titulo2 = document.createElement('h2');
// creando texto desde javascript
// const textotitulo2 = document.createTextNode("Nuevo titulo para el video");
// hacer comentario desde javascript
// const comentario = document.createComment("Comentario random");

// selecionar un selector por tag
// const articulo =document.getElementsByTagName nos devolveria una lista
// const articulo =document.querySelector('article');

// articulo.cloneNode() estamos creando en la consola en memoria no en la pagina sino pongo true no copia hijos
// articulo.cloneNode(true) estamos creando en la consola en memoria no en la pagina  copia hijos con true

// const articulo2 = articulo.cloneNode(true) creado en memoria,hacemos copia pero son objetos diferentes
// const articulo2 = articulo2.cloneNode(true);

// en consola para ver articulo padre true el hijo la copia false
// articulo.isConnected

// seleccionamos section con el id
// const section=document.getElementById("section");

// para añadir copia de section de la memoria a dom: section.appendChild(articulo2)
// lo mete el como ultimo hijo con appendChild

// para insertar arriba de un hijo o debajo
// section.insertAdjacentElement('beforebegin',articulo2)
// section.insertAdjacentElement('beforeend',articulo2)

// añadir texto
// section.insertAdjacentText('beforeend','Aqui acaba la sesion')

// añadir etiquetas html 
// section.insertAdjacentHTML('beforeend','<h3>Esto es un titulo inventado</h3>')

// eliminar nodo
// section.remove()

// reemplazar contenido de etiqueta
// section.innerHTML = '<h2>Nuevo titulo de la seccion</h2>'

// sustitulle el html de dentro por el que yo le hay puesto
// section.outerHTML

// sustituir el elemnto de h2 dentro de section
// section.children[0].textContent ='otro titulo mas'

// obtener el nombre de cualquier etiqueta que contenga section por atributo
// section.getAttribute('id') me devuelve 'section'
// un atajo section.id me da 'section'

// obtener por atributo
// section.getAttribute('nombre'); devuelve'meloinvento'

// me permite meter 2paretros nombre valor ,cambiamos el nombre del atributo a otro
// section.setAttribute('nombre','otrovalor')

// otra manera 
// section.getAttribute('class'); no da 'border-grey'


// para ver las clases de un elemento
// section.classList
// section.className; nos devuelve el  string de la clase

// para cambiar el nombre de la clase de un elemnto
// section.className += 'nuevaclaseCss'

// section.classList.add('nuevaclase')
// eliminar clase de elemento
// section.classList.remove('nuevaclase')

// metodo toogle sino la tiene que la quite y sino la tiene que la ponga: para los interruptores
// section.classList.toggle('nuevayeaclase');