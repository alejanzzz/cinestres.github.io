const storageRef = firebase.storage().ref();

const db = firebase.firestore();

const logo = 'a41FDD4fte0TjkibvjT0';
const accion1 = 'yGXMzVAG1vyW50O9Eup5';
const accion2 = 'vyVTqjbZz5d6QUZsyTbr';
const accion3 = 'P7UKz4p1qZJ5lC02bPJG';
const accion4 = 'W1o5BMfXwC7To0bkQybi';
const accion5 = '5SJG9hBNbvtySAzbWSr9';
const accion6 = '6WaJffXt7XWu0GfaObF4';
const accion7 = '74KFK9R9zqMFOs0faquu';
const accion8 = 'BLlxOdpZ20Aw76kaXNUu';
const accion9 = 'ckpTmaY8R4TjhhxnaFy8';
const accion10 = 'pl0BPsKhh83FiBpC1n5u';
const accion11 = 'wjolXDCZysJJ9lS6tqbg';
const accion12 = 'APbjpY957AEEQWO5gBRS';
const accion13 = 'A07dwgwTj5aUjEi0aYk8';
const accion14 = '1XOCAlInxBOR77FRN9D8';
const accion15 = 'nx7eaVQzNMc2h339CmRf';


db.collection("imagenes_accion").get().then((querySnapshot) =>{
    querySnapshot.forEach((doc)=>{
        if (doc.id == logo){
            document.querySelector('#logo').src = doc.data().ruta;
        } else if (doc.id == accion1){
            document.querySelector('#img1').src = doc.data().ruta;
            document.getElementById('nombre1').innerHTML = doc.data().nombre;
            document.getElementById('descrip1').innerHTML = doc.data().descripcion;
        } else if (doc.id == accion2){
            document.querySelector('#img2').src = doc.data().ruta;
            document.getElementById('nombre2').innerHTML = doc.data().nombre;
            document.getElementById('descrip2').innerHTML = doc.data().descripcion;
        } else if (doc.id == accion3){
            document.querySelector('#img3').src = doc.data().ruta;
            document.getElementById('nombre3').innerHTML = doc.data().nombre;
            document.getElementById('descrip3').innerHTML = doc.data().descripcion;
        } else if (doc.id == accion4){
            document.querySelector('#img4').src = doc.data().ruta;
            document.getElementById('nombre4').innerHTML = doc.data().nombre;
            document.getElementById('descrip4').innerHTML = doc.data().descripcion;
        } else if (doc.id == accion5){
            document.querySelector('#img5').src = doc.data().ruta;
            document.getElementById('nombre5').innerHTML = doc.data().nombre;
            document.getElementById('descrip5').innerHTML = doc.data().descripcion;
        } else if (doc.id == accion6){
            document.querySelector('#img6').src = doc.data().ruta;
            document.getElementById('nombre6').innerHTML = doc.data().nombre;
            document.getElementById('descrip6').innerHTML = doc.data().descripcion;
        } else if (doc.id == accion7){
            document.querySelector('#img7').src = doc.data().ruta;
            document.getElementById('nombre7').innerHTML = doc.data().nombre;
            document.getElementById('descrip7').innerHTML = doc.data().descripcion;
        } else if (doc.id == accion8){
            document.querySelector('#img8').src = doc.data().ruta;
            document.getElementById('nombre8').innerHTML = doc.data().nombre;
            document.getElementById('descrip8').innerHTML = doc.data().descripcion;
        } else if (doc.id == accion9){
            document.querySelector('#img9').src = doc.data().ruta;
            document.getElementById('nombre9').innerHTML = doc.data().nombre;
            document.getElementById('descrip9').innerHTML = doc.data().descripcion;
        } else if (doc.id == accion10){
            document.querySelector('#img10').src = doc.data().ruta;
            document.getElementById('nombre10').innerHTML = doc.data().nombre;
            document.getElementById('descrip10').innerHTML = doc.data().descripcion;
        } else if (doc.id == accion11){
            document.querySelector('#img11').src = doc.data().ruta;
            document.getElementById('nombre11').innerHTML = doc.data().nombre;
            document.getElementById('descrip11').innerHTML = doc.data().descripcion;
        } else if (doc.id == accion12){
            document.querySelector('#img12').src = doc.data().ruta;
            document.getElementById('nombre12').innerHTML = doc.data().nombre;
            document.getElementById('descrip12').innerHTML = doc.data().descripcion;
        } else if (doc.id == accion13){
            document.querySelector('#img13').src = doc.data().ruta;
            document.getElementById('nombre13').innerHTML = doc.data().nombre;
            document.getElementById('descrip13').innerHTML = doc.data().descripcion;
        } else if (doc.id == accion14){
            document.querySelector('#img14').src = doc.data().ruta;
            document.getElementById('nombre14').innerHTML = doc.data().nombre;
            document.getElementById('descrip14').innerHTML = doc.data().descripcion;
        } else if (doc.id == accion15){
            document.querySelector('#img15').src = doc.data().ruta;
            document.getElementById('nombre15').innerHTML = doc.data().nombre;
            document.getElementById('descrip15').innerHTML = doc.data().descripcion;
        }
    })
})