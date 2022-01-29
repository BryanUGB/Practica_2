//boton ocultar o mostrar los div que contienen la lista 
const hide = document.querySelector('#hideElements');
const listDiv = document.querySelector('#list');

//costanstes para mostrar elementos de la lita 
const addItemInput = document.querySelector('#addItem'); //imput 
const addItemButton= document.querySelector('button#addItemButton'); //button

//eliminar ultimo item 
const removeItemButton = document.querySelector('button#removeItemButton');

//eliminar elemento seleccionado
const removeItem = document.querySelector('button#removeItem');

//mostrar y ocultar lista 
hide.addEventListener('click', () =>{
    if(listDiv.style.display == 'none'){
        listDiv.style.display = 'block';
        hide.textContent= '<<';
    } else{
        listDiv.style.display = 'none';
        hide.textContent ='>>';
    }
});


//agregar elementos a la lista
addItemButton.addEventListener('click',() =>{
    let list = document.querySelector('ul');
    let li = document.createElement('li');
    li.textContent = addItemInput.value;
    list.appendChild(li); // agregar elemento a la lista
    addItemInput.value="";
});



// eliminar ultimo elemnto de la lista

removeItemButton.addEventListener('click', () =>{
    let list = document.querySelector('ul');
    let li = document.querySelector('li:last-child');
    list.removeChild(li);
});


//optener index de elementos seleccionados 
function findIndex(elem){
    var i, len = items.length;
    for(i=0; i<len; i++){
        if (items[i]===elem){
            return i; 
        }
    }
    return -1;
};

//optener index de los elementos de la lista 
 var list = document.getElementById("listItems"),
 items = list.getElementsByTagName("li");
 list.onclick = function(e) {
     var event= e ||  window.event,
     src = event.target || event.srcElement;
     var myIndex = findIndex(src);
     //alert (myIndex);
     index=myIndex;
     console.log(myIndex);

     //cambiar el color del elemento seleccionado
     if(event.target.tagName === 'LI'){
         list.querySelectorAll('li').forEach(el=>el.classList.remove('alert', 'alert-success'));//clases de boostrap agregadas
         items[index].classList.add('alert', 'alert-success');
     }
 };

//eliminar elementos selccionado

removeItem.addEventListener('click', () =>{
let showDiv = document.getElementById('list');
let divAlert = document.createElement('div');
let label = document.createElement('label');
label.innerHTML='Se elimino  el elemento'+ index;
divAlert.classList.add('alert', 'alert danger');// clase de la alerta


items[index].parentNode.removeChild(items[index]);
divAlert.appendChild(label)
showDiv.appendChild(divAlert)
});
