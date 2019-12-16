//event listener click al buscador
/*
document.querySelector("#submit-buscador").addEventListener("click", ejecutaBoton);

function ejecutaBoton(e){
  e.preventDefault();  //Detiene la accion por defecto
  let elemento;
  elemento = e;
  elemento = e.target;
  elemento = e.target.id;
  console.log(elemento);
}

//Puede ser cualquier elemeno, aquí un ejemplo dandole click a "cursos en linea"

document.querySelector("#encabezado").addEventListener("click", evento);

function evento(e){
  e.preventDefault;
  let a;
  a = e.target;
  //Si hago algo como lo de abajo, puedo cambiar el texto
  e.target.innerText = "Cambiando el texto desde js";

  console.log(a.innerText);
}
*/
//const encabezado = document.getElementById("#encabezado");
//const enlaces = document.querySelectorAll(".enlace");
//const boton = document.querySelector("#vaciar-carrito");

//click
//boton.addEventListener("click", obtieneEvento);

//doble click
//boton.addEventListener("dblclick", obtieneEvento);

//Mouse Enter, basta ponerse en cima del boton
//boton.addEventListener("mouseenter", obtieneEvento);

//Mouse leave, cuando despues de situarse en el boton, sales de él
//boton.addEventListener("mouseleave", obtieneEvento);

//mouse over, cuando me posiciono encima del boton
//boton.addEventListener("mouseover", obtieneEvento);

//mouse down, cuando doy click y presiono
//boton.addEventListener("mousedown", obtieneEvento);

//mouse up, doy click y funciona cuando se suelta
//boton.addEventListener("mouseup", obtieneEvento);

//Eventos para los inputs
//keydown obtiene lo que escribo
const busqueda = document.querySelector("#buscador");

//busqueda.addEventListener("keydown", obtieneEvento);
//busqueda.addEventListener("keyup", obtieneEvento); //Cada que sulto la tecla presionada
//busqueda.addEventListener("focus", obtieneEvento); //Cada que me situo en la barra de busqueda
//busqueda.addEventListener("blur", obtieneEvento); //Cada que doy click fuera del buscador

//También exiten, copy, paste  y cut


//con esto creo una especia de blog de notas
/*
document.querySelector("#encabezado").innerText = busqueda.value;
*/

function obtieneEvento(e){
  console.log(`Evento: ${e.type}`);
}

//Event bubbling
const card = document.querySelector(".card");
const infoCurso = document.querySelector(".info-card");
const agregarCarrito = document.querySelector(".agregar-carrito");

card.addEventListener("click", function(e){
  e.stopPropagation(); //Con esto se detiene el bubbling
  console.log("click en card");
});

infoCurso.addEventListener("click", function(e){
  e.stopPropagation();
  console.log("click en infoCurso");
});

agregarCarrito.addEventListener("click", function(e){
  console.log("click en agregarCarrito");
  e.stopPropagation();
});

//Delegation

document.body.addEventListener("click", eliminarElemento);

function eliminarElemento(e){
  e.preventDefault();
  console.log(e.target.classList);
  console.log("Click");
  //Si quiere eliminar un elemento puedo hacer algo como esto
  if(e.target.classList.contains("borrar-curso")){
    console.log(e.target.parentElement.parentElement.remove());
  }
  else{
    console.log("NO!");
  }
}

//Local storage y session storage
//Agregar a local storage
localStorage.setItem("nombre", "Efrain");

//agregar a session storage
sessionStorage.setItem("Apellido", "Palacios");

//Si se cierra el navegador o el usuario limpia el caché se eliminan los datos guardados en session storage

//Eliminar desde de loca storage desde js
sessionStorage.removeItem("Apellido");

const nombre = localStorage.getItem("nombre");
console.log(nombre);
