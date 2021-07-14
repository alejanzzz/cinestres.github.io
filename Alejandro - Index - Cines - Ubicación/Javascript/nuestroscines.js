const storageRef = firebase.storage().ref();

const baseDeDatos = firebase.firestore();

const clossicon = document.getElementById("clossicon");
const cinemark = document.getElementById("cinemark");
const cineplanet = document.getElementById("cineplanet");
const cinepolis = document.getElementById("cinepolis");
const cinestar = document.getElementById("cinestar");
const uvk = document.getElementById("uvk");
const cinerama = document.getElementById("cinerama");

const obteniendoImagenes = (funcionObtener) => {
    baseDeDatos.collection("imagenes_nuestros_cines").onSnapshot(funcionObtener);
}

window.addEventListener('DOMContentLoaded',mostrarClossicon(), mostrarCinemark(), mostrarCineplanet(), mostrarCinepolis(), mostrarCinestar(), mostrarUvk(), mostrarCinerama());

function mostrarClossicon() {
    obteniendoImagenes(
        (listaDeImagenes) => {
            clossicon.innerHTML = ``;
            listaDeImagenes.forEach(
                (a) => {
                    a = clossicon.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/cinestres-firebase.appspot.com/o/Alejandro%2Flogo-iconos%2Fclose.png?alt=media&token=7c258089-add4-476a-97db-626045a725dd />`;
                }
            )
        }
    )
}
function mostrarCinemark() {
    obteniendoImagenes(
        (listaDeImagenes) => {
            cinemark.innerHTML = ``;
            listaDeImagenes.forEach(
                (a) => {
                    a = cinemark.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/cinestres-firebase.appspot.com/o/Alejandro%2Fimages-nuestros-cines%2F1.png?alt=media&token=8e295ab1-6d6f-4284-9b67-ebabcf7becef />`;
                }
            )
        }
    )
}
function mostrarCineplanet() {
    obteniendoImagenes(
        (listaDeImagenes) => {
            cineplanet.innerHTML = ``;
            listaDeImagenes.forEach(
                (a) => {
                    a = cineplanet.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/cinestres-firebase.appspot.com/o/Alejandro%2Fimages-nuestros-cines%2F2.png?alt=media&token=714049b6-7951-43d0-b20f-18d9e637070c />`;
                }
            )
        }
    )
}
function mostrarCinepolis() {
    obteniendoImagenes(
        (listaDeImagenes) => {
            cinepolis.innerHTML = ``;
            listaDeImagenes.forEach(
                (a) => {
                    a = cinepolis.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/cinestres-firebase.appspot.com/o/Alejandro%2Fimages-nuestros-cines%2F3.png?alt=media&token=47da093e-03ee-4f92-9d92-a75bc44d1886 />`;
                }
            )
        }
    )
}
function mostrarCinestar() {
    obteniendoImagenes(
        (listaDeImagenes) => {
            cinestar.innerHTML = ``;
            listaDeImagenes.forEach(
                (a) => {
                    a = cinestar.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/cinestres-firebase.appspot.com/o/Alejandro%2Fimages-nuestros-cines%2F4.png?alt=media&token=eaf92a05-fa40-4982-be72-49f07576ebac />`;
                }
            )
        }
    )
}
function mostrarUvk() {
    obteniendoImagenes(
        (listaDeImagenes) => {
            uvk.innerHTML = ``;
            listaDeImagenes.forEach(
                (a) => {
                    a = uvk.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/cinestres-firebase.appspot.com/o/Alejandro%2Fimages-nuestros-cines%2F5.png?alt=media&token=22cb697f-657f-4e37-91ae-beac9150091e />`;
                }
            )
        }
    )
}
function mostrarCinerama() {
    obteniendoImagenes(
        (listaDeImagenes) => {
            cinerama.innerHTML = ``;
            listaDeImagenes.forEach(
                (a) => {
                    a = cinerama.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/cinestres-firebase.appspot.com/o/Alejandro%2Fimages-nuestros-cines%2F6.png?alt=media&token=2e6b18b3-aacb-4e81-8ec3-faaa683bfee3 />`;
                }
            )
        }
    )
}