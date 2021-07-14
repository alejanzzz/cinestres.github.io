const storageRef = firebase.storage().ref();

const db = firebase.firestore();

const logo = 'QkDfHrqcytdphWNF50iQ';
const prox1 = 'm2s0KdHhyU9Lz8aLn3E4';
const prox2 = 'RcRWSvkdMBVsMsNOSGMm';
const prox3 = 'GrC505As9b3qOq3zsNPM';
const prox4 = 'PkSQDpAGit5QtdRMiywo';
const prox5 = 'Rb0N8OWebl0BYQV8UC2f';
const prox6 = '8UxOkeJ9nh9DafBz4Cmj';
const prox7 = 'jnoNjXTPh32Pa3sklDzs';
const prox8 = 'McNGCuVupGbuyp9nBWIm';
const prox9 = 'BWnnvM8iPUzgO5Zfafcv';
const prox10 = 'fBBYsxvcawlMRRUAoWNw';
const prox11 = 'aMNDng1wPXEm3rBG1mYG';
const prox12 = '0Qp16dhZJKZSdEjA5Kr1';
const prox13 = 'JVJDmhTbSx6DJ7AlRKWN';
const prox14 = 'LC8ONgbKGJwpKJmgQOXD';
const prox15 = 'eEiEbx99TAGtDdv3U0Cc';


db.collection("imagenes_prox_estrenos").get().then((querySnapshot) =>{
    querySnapshot.forEach((doc)=>{
        if (doc.id == logo){
            document.querySelector('#logo').src = doc.data().ruta;
        } else if (doc.id == prox1){
            document.querySelector('#img1').src = doc.data().ruta;
            document.getElementById('nombre1').innerHTML = doc.data().nombre;
            document.getElementById('descrip1').innerHTML = doc.data().descripcion;
        } else if (doc.id == prox2){
            document.querySelector('#img2').src = doc.data().ruta;
            document.getElementById('nombre2').innerHTML = doc.data().nombre;
            document.getElementById('descrip2').innerHTML = doc.data().descripcion;
        } else if (doc.id == prox3){
            document.querySelector('#img3').src = doc.data().ruta;
            document.getElementById('nombre3').innerHTML = doc.data().nombre;
            document.getElementById('descrip3').innerHTML = doc.data().descripcion;
        } else if (doc.id == prox4){
            document.querySelector('#img4').src = doc.data().ruta;
            document.getElementById('nombre4').innerHTML = doc.data().nombre;
            document.getElementById('descrip4').innerHTML = doc.data().descripcion;
        } else if (doc.id == prox5){
            document.querySelector('#img5').src = doc.data().ruta;
            document.getElementById('nombre5').innerHTML = doc.data().nombre;
            document.getElementById('descrip5').innerHTML = doc.data().descripcion;
        } else if (doc.id == prox6){
            document.querySelector('#img6').src = doc.data().ruta;
            document.getElementById('nombre6').innerHTML = doc.data().nombre;
            document.getElementById('descrip6').innerHTML = doc.data().descripcion;
        } else if (doc.id == prox7){
            document.querySelector('#img7').src = doc.data().ruta;
            document.getElementById('nombre7').innerHTML = doc.data().nombre;
            document.getElementById('descrip7').innerHTML = doc.data().descripcion;
        } else if (doc.id == prox8){
            document.querySelector('#img8').src = doc.data().ruta;
            document.getElementById('nombre8').innerHTML = doc.data().nombre;
            document.getElementById('descrip8').innerHTML = doc.data().descripcion;
        } else if (doc.id == prox9){
            document.querySelector('#img9').src = doc.data().ruta;
            document.getElementById('nombre9').innerHTML = doc.data().nombre;
            document.getElementById('descrip9').innerHTML = doc.data().descripcion;
        } else if (doc.id == prox10){
            document.querySelector('#img10').src = doc.data().ruta;
            document.getElementById('nombre10').innerHTML = doc.data().nombre;
            document.getElementById('descrip10').innerHTML = doc.data().descripcion;
        } else if (doc.id == prox11){
            document.querySelector('#img11').src = doc.data().ruta;
            document.getElementById('nombre11').innerHTML = doc.data().nombre;
            document.getElementById('descrip11').innerHTML = doc.data().descripcion;
        } else if (doc.id == prox12){
            document.querySelector('#img12').src = doc.data().ruta;
            document.getElementById('nombre12').innerHTML = doc.data().nombre;
            document.getElementById('descrip12').innerHTML = doc.data().descripcion;
        } else if (doc.id == prox13){
            document.querySelector('#img13').src = doc.data().ruta;
            document.getElementById('nombre13').innerHTML = doc.data().nombre;
            document.getElementById('descrip13').innerHTML = doc.data().descripcion;
        } else if (doc.id == prox14){
            document.querySelector('#img14').src = doc.data().ruta;
            document.getElementById('nombre14').innerHTML = doc.data().nombre;
            document.getElementById('descrip14').innerHTML = doc.data().descripcion;
        } else if (doc.id == prox15){
            document.querySelector('#img15').src = doc.data().ruta;
            document.getElementById('nombre15').innerHTML = doc.data().nombre;
            document.getElementById('descrip15').innerHTML = doc.data().descripcion;
        }
    })
})