//boton ocultar o mostrar los div que contienen la lista 
const hide = document.querySelector('#hideElements');
const listDiv = document.querySelector('#list');

//costanstes para mostrar elementos de la lita 
const addItemInput = document.querySelector('#addItem'); //imput 
const addItemButton= document.querySelector('button#addItemButton'); //button

//eliminar ultimo item 
const removeItemButton = document.querySelector('button#removeItemButton');

//eliminar elemento seleccionado
const removeItem = document.querySelector('button#removeItem')

//mostrar y ocultar lista 
hide.addEventListener('click', () =>{
    if(listDiv.style.display == 'none'){
        listDiv.style.display = 'block';
        hide.textContent= '<<';
    } else{
        listDiv.style.display = 'none'
        hide.textContent ='>>';
    }
});

