
//Colorea los inputs en el momento de seleccionar con un 'click'.

document.getElementById('ciudad').addEventListener('click',colorear)
function colorear(){
    document.getElementById('ciudad').style.backgroundColor="dimgray";
}
document.getElementById('fecha').addEventListener('click',colorear2)
function colorear2 (){
     document.getElementById('fecha').style.backgroundColor="dimgray";
}
document.getElementById('hora').addEventListener('click',colorear3)
function colorear3 (){
     document.getElementById('hora').style.backgroundColor="dimgray";
}

//Avisa la opcion que elegiste de cada input.

function selection(){
    var _ciudad = document.getElementById('ciudad');
    var seleccionarCiudad = _ciudad.value; 
    alert('Ud. a seleccionado la ciudad:  '+ seleccionarCiudad); 
}
function selection1(){
    var _fecha = document.getElementById('fecha');
    var seleccionarFecha = _fecha.value; 
    alert('Ud. a seleccionado la fecha:  '+ seleccionarFecha); 
}
function selection2(){
    var _hora = document.getElementById('hora');
    var seleccionarHora = _hora.value; 
    alert('Ud. a seleccionado el Turno:  '+ seleccionarHora); 
}

//Revisa que todos los inputs esten seleccionados, de lo contrario no se dirigira a la pagina de compra.

let ciudad = document.getElementById('ciudad');
let fecha = document.getElementById('fecha');
let hora = document.getElementById('hora');
function enviarme(){
    console.log('Permitiendo el ingreso a la compra...');
    if(ciudad.selectedIndex==0)
    {
        alert('Selecciona la ciudad');
        return false;
    }
    else if(fecha.selectedIndex==0)
    {
        alert('Selecciona la fecha');
        return false;
    }
    else if(hora.selectedIndex==0)
    {
        alert('Selecciona la hora');
        return false;
    }

}
