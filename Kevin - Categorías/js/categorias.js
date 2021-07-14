const dataBaseRef = firebase.firestore();
const storageRef = firebase.storage().ref();


const obteniendoImg = (unaFuncionX) => {
    dataBaseRef.collection('Categorias').onSnapshot(unaFuncionX)
}

window.addEventListener('DOMContentLoaded', mostrarImgdeFirebase());


function mostrarImgdeFirebase() {
    obteniendoImg((listaDeImagenes) => {
        listaDeImagenes.forEach((imagen) => {
            if(imagen.data().nombre == 'Evangelion 3.0+1.0'){
                var peliUno = document.getElementById('imagen-one')
            peliUno.innerHTML =`<div><img src="` + imagen.data().ruta + `"></div><div><h4>`+imagen.data().nombre+`</h4></div>`;
            }

            if(imagen.data().nombre == 'Asalto a la Casa de Moneda'){
                var peliDos = document.getElementById('imagen-two')
            peliDos.innerHTML =`<div><img src="` + imagen.data().ruta + `"></div><div><h4>`+imagen.data().nombre+`</h4></div>`;
            }

            if(imagen.data().nombre == 'The Kings Man'){
                var peliTres = document.getElementById('imagen-three')
            peliTres.innerHTML =`<div><img src="` + imagen.data().ruta + `"></div><div><h4>`+imagen.data().nombre+`</h4></div>`;
            }

            if(imagen.data().nombre == 'My Hero Academy'){
                var peliCuatro = document.getElementById('imagen-for')
            peliCuatro.innerHTML =`<div><img src="` + imagen.data().ruta + `"></div><div><h4>`+imagen.data().nombre+`</h4></div>`;
            }

            if(imagen.data().nombre == 'Un Lugar en Silencio II'){
                var peliCinco = document.getElementById('imagen-five')
            peliCinco.innerHTML =`<div><img src="` + imagen.data().ruta + `"></div><div><h4>`+imagen.data().nombre+`</h4></div>`;
            }

            if(imagen.data().nombre == 'The Beatles - Get Back'){
                var peliSeis = document.getElementById('imagen-six')
            peliSeis.innerHTML =`<div><img src="` + imagen.data().ruta + `"></div><div><h4>`+imagen.data().nombre+`</h4></div>`;
            }


            if(imagen.data().nombre == 'Viuda Negra'){
                var peliSiete = document.getElementById('imagen-seven')
            peliSiete.innerHTML =`<div><img src="` + imagen.data().ruta + `"></div><div><h4>`+imagen.data().nombre+`</h4></div>`;
            }

            if(imagen.data().nombre == 'No Time To Die'){
                var peliOcho = document.getElementById('imagen-eight')
            peliOcho.innerHTML =`<div><img src="` + imagen.data().ruta + `"></div><div><h4>`+imagen.data().nombre+`</h4></div>`;
            }

            if(imagen.data().nombre == 'The Suicide Squad'){
                var peliNueve = document.getElementById('imagen-nine')
            peliNueve.innerHTML =`<div><img src="` + imagen.data().ruta + `"></div><div><h4>`+imagen.data().nombre+`</h4></div>`;
            }

            if(imagen.data().nombre == 'Space Jam'){
                var peliDies = document.getElementById('imagen-ten')
            peliDies.innerHTML =`<div><img src="` + imagen.data().ruta + `"></div><div><h4>`+imagen.data().nombre+`</h4></div>`;
            }

        })
    })
}























// const obteniendoImg = (funcion) => {
//     dataBaseRef.collection("Cinestres_Imgs").onSnapshot(funcion)
// }

// window.addEventListener('DOMContentLoaded',  function () {
//     imgOneRef.getDownloadURL().then(function (downloadURL) {
//         registerInDataBase(imgOneRef.name,downloadURL)
//     })

//     function registerInDataBase(paramNombre, paramRuta) {
//         dataBaseRef.collection("Cinestres_Imgs").doc().set({ nombre: paramNombre, ruta: paramRuta})

//     }
//     showIt();
//     function showIt()
//     {
//         obteniendoImg(
//             (e) => {
//                 e.forEach((img) =>{
//                     peliUno.innerHTML=`<div><img src=`+img.data().ruta+`"></div><div><h4>`+img.data().nombre+`</h4></div>`;

//                 })
//             }
//         )
//     }
// })







































// const storageRef = firebase.storage().ref();
// const dataBaseRef = firebase.firestore();

// //----------------------------------------------------------------------------------//
// const peliUno = document.getElementById('imagen-one');
// const peliDos = document.getElementById('imagen-two');
// const peliTres = document.getElementById('imagen-three');
// const peliCuatro = document.getElementById('imagen-for');
// const peliCinco = document.getElementById('imagen-five');
// const peliSeis = document.getElementById('imagen-six');
// const peliSiete = document.getElementById('imagen-seven');
// const peliOcho = document.getElementById('imagen-eight');
// const peliNueve = document.getElementById('imagen-nine');
// const peliDies = document.getElementById('imagen-ten');
// //-----------------------------------------------------------------//
// var todo = [imgOneRef,imgTwoRef,imgThreeRef,imgForRef,imgFiveRef,imgSixRef,imgSevenRef,imgEightRef,imgNineRef,imgTenRef]
// var imgOneRef = storageRef.child('peli1.webp');
// var imgTwoRef = storageRef.child('peli2.webp');
// var imgThreeRef = storageRef.child('peli3.webp');
// var imgForRef = storageRef.child('peli4.webp');
// var imgFiveRef = storageRef.child('peli5.webp');
// var imgSixRef = storageRef.child('peli6.webp');
// var imgSevenRef = storageRef.child('peli7.webp');
// var imgEightRef = storageRef.child('peli8.webp');
// var imgNineRef = storageRef.child('peli9.webp');
// var imgTenRef = storageRef.child('peli10.webp');
// //--------------------------------------------------------------------------------------//


// const obteniendoImg = (funcion) => {
//     dataBaseRef.collection("Categorias").onSnapshot(funcion)
// }

// window.addEventListener('DOMContentLoaded',  function () {
//     todo.getDownloadURL().then(function (downloadURL) {
//         registerInDataBase(imgOneRef.name,downloadURL)
//     })
//     function registerInDataBase(paramNombre, paramRuta) {
//         dataBaseRef.collection('Categorias').doc().set(
//             {
//                 nombre: paramNombre,
//                 ruta: paramRuta
//             }
//         )
//     }
//     const obteniendoImg = (funcion) => {
//     dataBaseRef.collection("Categorias").onSnapshot(funcion)
// }
//     showIt();
//     function showIt()
//     {
//         obteniendoImg(
//             (e) => {
//                 e.forEach((img) =>{
//                     peliUno.innerHTML=`<div><img src=`+img.data().ruta+`"></div><div><h4>`+img.data().nombre+`</h4></div>`;
//                     peliDos.innerHTML=`<div><img src=`+img.data().ruta+`"></div><div><h4>`+img.data().nombre+`</h4></div>`;
//                     peliTres.innerHTML=`<div><img src=`+img.data().ruta+`"></div><div><h4>`+img.data().nombre+`</h4></div>`;
//                     peliCuatro.innerHTML=`<div><img src=`+img.data().ruta+`"></div><div><h4>`+img.data().nombre+`</h4></div>`;
//                     peliCinco.innerHTML=`<div><img src=`+img.data().ruta+`"></div><div><h4>`+img.data().nombre+`</h4></div>`;
//                     peliSeis.innerHTML=`<div><img src=`+img.data().ruta+`"></div><div><h4>`+img.data().nombre+`</h4></div>`;
//                     peliSiete.innerHTML=`<div><img src=`+img.data().ruta+`"></div><div><h4>`+img.data().nombre+`</h4></div>`;
//                     peliOcho.innerHTML=`<div><img src=`+img.data().ruta+`"></div><div><h4>`+img.data().nombre+`</h4></div>`;
//                     peliNueve.innerHTML=`<div><img src=`+img.data().ruta+`"></div><div><h4>`+img.data().nombre+`</h4></div>`;
//                     peliDies.innerHTML=`<div><img src=`+img.data().ruta+`"></div><div><h4>`+img.data().nombre+`</h4></div>`;
//                 })
//             }
//         )
//     }
// })


