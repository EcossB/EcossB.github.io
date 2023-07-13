//creacion del objeto tarea.
const arrayTarea = [{
    nombre: '', // en blanco para que sea el usuario que agregue el nombre de la tarea.
    completada: false // empieza en false porque la tarea no esta completada.
}];

// arrayTarea.push({"nombre":"tarea1", "completada":false}); un ejemplo de como se deberia de implementar un nuevo elemento.

//obteniendo el valor del input del html a traves de un getElementById.
const input = document.getElementById("input-box");
const list = document.getElementById("list-container"); //esto es para adentrar la nuevas tareas en el UL con LI

//funcion que llama el html con la propiedad onclick
function addTask(){
    if(input.value === ''){
        alert("Debes de escribir en la caja de texto primero");
    }else{
        arrayTarea.push({"nombre":input.value, "completada":false});
        input.value = '';
        mostrarLista2();
    }
   
}


function mostrarLista2(){
    list.innerHTML= ""; //inicializamos la lista vacia para cuando eliminemos sea lo primero que aparezca. 
    arrayTarea.forEach(function(elemento, i){ //creamos un foreach para que se recorra el objeto.
        console.log(i);
        list.innerHTML +=  "<li>"+elemento.nombre+"<a onclick='borrar("+i+")'>&times;</a></li>";
        //tomamos el li y le asociamos el elemento y en este caso el nombre.   
    });
}

list.addEventListener("click", function(e){
    if(e.target.tagName === "LI" ){ // hacemos esta condicion para cuando marque el li con una rayita.
        e.target.classList.toggle("checked"); 
        arrayTarea.completada = true; //aqui cambiamos el estatus de la tarea a true.
    } 
});

function borrar(i){ // funcion que puedo borrar las li del ul 
    console.log(arrayTarea[i]); 
    arrayTarea.splice(i,1); // usando splice en la fgun
    mostrarLista2();
}
