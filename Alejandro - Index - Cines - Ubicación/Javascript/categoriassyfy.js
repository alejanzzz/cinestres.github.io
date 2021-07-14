const storageRef = firebase.storage().ref();

const db1 = firebase.firestore();

const logo = 'GdjpZLJrcFWthqsjJ8TR';
const accion1 = 'kjT2OpQt8HDQ5qhpgVIi';
const accion2 = 'hhsMcBP0TJwgZJxPLBdo';
const accion3 = 'Pk8o3TsvcCvBZKpM5dmW';
const accion4 = 'WVazehUfZHPuSFY4KxH8';
const accion5 = 'soIqnlgH45mgbeDlYiUr';
const accion6 = 'ugFWknYcGRvVcFGyAGuZ';
const accion7 = 'wfpVTIE2ZseskvvG3BAy';
const accion8 = 'LWrDSBRDq1n7RvQIpCoR';
const accion9 = 'GiHk1cQgZJOuuECFRVmF';
const accion10 = 'delcFWro7vuiYheugp4N';
const accion11 = 'SWrufhDM3YDlMvh9Kwcm';
const accion12 = '3VnjKOleooPeEvh8tYST';
const accion13 = 'CEbHAOQqEAztLnrppXZN';
const accion14 = '9Y0ow9MGvmZYrU9YZZ0l';
const accion15 = '9XlG8xGO5W42bvOuU9bE';


db1.collection("imagenes_syfy").get().then((querySnapshot) =>{
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