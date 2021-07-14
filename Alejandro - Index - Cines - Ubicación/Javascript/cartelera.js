const storageRef = firebase.storage().ref();

const db = firebase.firestore();

const logo = 'HRDnuxUsxQJNmUTTOdy4';
const cartelera1 = 'rMOCv8omq3ilRceeZwB0';
const cartelera2 = 'p3W2Zyncz84YZouHk7gn';
const cartelera3 = 'SCwI5RBhr7bXrk612YR6';
const cartelera4 = 'bbXBZU36Nonv9RItyHrl';
const cartelera5 = 'yoycXQXABlRp208sNVFQ';
const cartelera6 = 'MTovkMl04mQVMLUZTYbg';
const cartelera7 = 'IrCljcEZtSUnH61bAzfx';
const cartelera8 = 'tHg9S2SfRGhkvK74ZVgf';
const cartelera9 = 'og8cqTrA98d1TKHHnpjy';
const cartelera10 = 'YiIiGcFq7QxaH3ACLvrM';
const cartelera11 = 'AXvlMYWVBRKeXojB20ts';
const cartelera12 = 'ul0UQpkae1NIidiVkuy0';
const cartelera13 = 'qTulLExnGRzmoAX02pRp';
const cartelera14 = 'uvskKQWcbbQLMboGRkHd';
const cartelera15 = '70ankA4fQOqDC8ilH68f';

db.collection("imagenes").get().then((querySnapshot) =>{
    querySnapshot.forEach((doc)=>{
        if (doc.id == logo){
            document.querySelector('#logo').src = doc.data().ruta;
        } else if (doc.id == cartelera1){
            document.querySelector('#img1').src = doc.data().ruta;
            document.getElementById('nombre1').innerHTML = doc.data().nombre;
            document.getElementById('descrip1').innerHTML = doc.data().descripcion;
        } else if (doc.id == cartelera2){
            document.querySelector('#img2').src = doc.data().ruta;
            document.getElementById('nombre2').innerHTML = doc.data().nombre;
            document.getElementById('descrip2').innerHTML = doc.data().descripcion;
        } else if (doc.id == cartelera3){
            document.querySelector('#img3').src = doc.data().ruta;
            document.getElementById('nombre3').innerHTML = doc.data().nombre;
            document.getElementById('descrip3').innerHTML = doc.data().descripcion;
        } else if (doc.id == cartelera4){
            document.querySelector('#img4').src = doc.data().ruta;
            document.getElementById('nombre4').innerHTML = doc.data().nombre;
            document.getElementById('descrip4').innerHTML = doc.data().descripcion;
        } else if (doc.id == cartelera5){
            document.querySelector('#img5').src = doc.data().ruta;
            document.getElementById('nombre5').innerHTML = doc.data().nombre;
            document.getElementById('descrip5').innerHTML = doc.data().descripcion;
        } else if (doc.id == cartelera6){
            document.querySelector('#img6').src = doc.data().ruta;
            document.getElementById('nombre6').innerHTML = doc.data().nombre;
            document.getElementById('descrip6').innerHTML = doc.data().descripcion;
        } else if (doc.id == cartelera7){
            document.querySelector('#img7').src = doc.data().ruta;
            document.getElementById('nombre7').innerHTML = doc.data().nombre;
            document.getElementById('descrip7').innerHTML = doc.data().descripcion;
        } else if (doc.id == cartelera8){
            document.querySelector('#img8').src = doc.data().ruta;
            document.getElementById('nombre8').innerHTML = doc.data().nombre;
            document.getElementById('descrip8').innerHTML = doc.data().descripcion;
        } else if (doc.id == cartelera9){
            document.querySelector('#img9').src = doc.data().ruta;
            document.getElementById('nombre9').innerHTML = doc.data().nombre;
            document.getElementById('descrip9').innerHTML = doc.data().descripcion;
        } else if (doc.id == cartelera10){
            document.querySelector('#img10').src = doc.data().ruta;
            document.getElementById('nombre10').innerHTML = doc.data().nombre;
            document.getElementById('descrip10').innerHTML = doc.data().descripcion;
        } else if (doc.id == cartelera11){
            document.querySelector('#img11').src = doc.data().ruta;
            document.getElementById('nombre11').innerHTML = doc.data().nombre;
            document.getElementById('descrip11').innerHTML = doc.data().descripcion;
        } else if (doc.id == cartelera12){
            document.querySelector('#img12').src = doc.data().ruta;
            document.getElementById('nombre12').innerHTML = doc.data().nombre;
            document.getElementById('descrip12').innerHTML = doc.data().descripcion;
        } else if (doc.id == cartelera13){
            document.querySelector('#img13').src = doc.data().ruta;
            document.getElementById('nombre13').innerHTML = doc.data().nombre;
            document.getElementById('descrip13').innerHTML = doc.data().descripcion;
        } else if (doc.id == cartelera14){
            document.querySelector('#img14').src = doc.data().ruta;
            document.getElementById('nombre14').innerHTML = doc.data().nombre;
            document.getElementById('descrip14').innerHTML = doc.data().descripcion;
        } else if (doc.id == cartelera15){
            document.querySelector('#img15').src = doc.data().ruta;
            document.getElementById('nombre15').innerHTML = doc.data().nombre;
            document.getElementById('descrip15').innerHTML = doc.data().descripcion;
        }
    })
})