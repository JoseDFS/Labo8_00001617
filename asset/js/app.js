
const navSlide = ()=>{
    const burger = document.querySelector(".burger"); 
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener("click", ()=>{
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) =>{
            
            if(link.style.animation)
            {
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+0.3}s`;
            }
            
        });
        burger.classList.toggle('toggle');
    });

}

navSlide();
/*********************************Colocar aca el desarrollo de su ejercicio***************************/

var cont = 1;
var bitacoras = [];
var formulario = document.getElementById("bitacora");
/*1.Contiene una coleccion del elemento seleccionado con el id especificado*/

formulario.addEventListener("submit", (evt) => {

});
formulario.addEventListener("submit", (evt) => {
    evt.preventDefault(); 
 });
/*2.La accion que sucede al dar boton submit no sucedera por ese metodo*/

formulario.addEventListener("submit", (evt) => {
    evt.preventDefault(); 
    let bitacora = { 
    cant:cont, 
    fecha: formulario[1].value, 
    descripcion: formulario[2].value, 
    cantidad: formulario[3].value 
  } 
    bitacoras.push(bitacora);
    cont++;
    mostrar();
 }); 
/*3.Contiene el input dentro del formulario segun el indice que va en orden de escritura en el html*/

const crearElemento = (bitacora, tbody) =>{ 
    let tr = document.createElement("tr");
    Object.values(bitacora).forEach(item => { 
        let td = document.createElement("td");
        let content = document.createTextNode(item);
        td.appendChild(content);
        tr.appendChild(td);
        
    });
    tbody.appendChild(tr); 
    tr.setAttribute('class','click'); 

} 
//4.Contienen una coleccion de las etiquetas creadas anteiormente td y tr respectivamente que hacen referancia a una tabla
//5.Contiene un nodo de texto.
//6.Contiene los elementos td y tr creados despues de la iteracion.
//7.Lo que realiza esta funcion es que toma el contenido de cada campo de la bitacora y lo agrgega como una celda a la fila nueva en la tbal que contiene tbody


const eliminar= (tbody)=>{
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
}
//8.Devuelve el primer elemento como un nodo, un textnode o un commentnode
//9.Vacio

const agregar= ()=>{ 
    var eventtr = document.querySelectorAll(".click"); 
        eventtr.forEach((item, index) => { 
        item.addEventListener("click", () => { 
        document.querySelector("#fecha").value = item.childNodes[0].textContent; 
        document.querySelector("#descp").value = item.childNodes[1].textContent; 
        document.querySelector("#cant").value = item.childNodes[2].textContent; 
        }); 
    }) 
}
//10.Obtenemos el objeto nodo hijo en el indice indicado y el contenido de este.

const mostrar = ()=>{ 
    if (document.querySelector(".tabla-btc tbody").childElementCount > 0) { 
     eliminar(document.querySelector(".tabla-btc tbody")); 
    } 
    bitacoras.forEach(item => { 
     crearElemento(item, document.querySelector(".tabla-btc tbody")); 
    }); 
    agregar(); 
} 
//11.Obtenemos el elemento html cuya clase sea la indicada.
//12.Retorna el numero de hijos que contiene un nodo.
//13.Lo que hace es copiar al formualrio el contenido del elemento seleccionado.
//14.Se agrega una fila a la tabla que esta en la derecha con el econtenido que tiene el formulario.
