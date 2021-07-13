const storageRef = firebase.storage().ref();

const baseDeDatos = firebase.firestore();

const logo = document.getElementById("logo");
const time = document.getElementById("time");
const viuda = document.getElementById("viuda");
const suicide = document.getElementById("suicide");
const cruella = document.getElementById("cruella");
const space = document.getElementById("space");
const venom = document.getElementById("venom");
const conjuro = document.getElementById("conjuro");
const espiral = document.getElementById("espiral");
const woman = document.getElementById("woman");
const pinocho = document.getElementById("pinocho");
const army = document.getElementById("army");
const fast = document.getElementById("fast");
const halloween = document.getElementById("halloween");
const blonde = document.getElementById("blonde");
const escape = document.getElementById("escape");

const obteniendoImagenes = (funcionObtener) => {
    baseDeDatos.collection("imagenes_prox_estrenos", "imagenes").onSnapshot(funcionObtener);
}

window.addEventListener('DOMContentLoaded',mostrarLogo(), mostrarTime(), mostrarViuda(), mostrarSuicide(), mostrarCruella(), mostrarSpace(), mostrarVenom(), mostrarConjuro(), mostrarEspiral(), mostrarWoman(), mostrarPinocho(), mostrarArmy(), mostrarFast(), mostrarHalloween(), mostrarBlonde(), mostrarEscape());

function mostrarLogo() {
    obteniendoImagenes(
        (listaDeImagenes) => {
            logo.innerHTML = ``;
            listaDeImagenes.forEach(
                (a) => {
                    a = logo.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/cinestres-firebase.appspot.com/o/Alejandro%2Flogo-iconos%2Flogo.png?alt=media&token=cd20e4eb-e125-464a-a80d-05fbfa617364 />`;
                }
            )
        }
    )
}
function mostrarTime() {
    obteniendoImagenes(
        (listaDeImagenes) => {
            time.innerHTML = ``;
            listaDeImagenes.forEach(
                (a) => {
                    a = time.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/cinestres-firebase.appspot.com/o/Alejandro%2Fimages-prox-estrenos%2Fprox1.jpg?alt=media&token=83af2bfa-9f82-4749-a2b9-9314cdf045e1 />`;
                }
            )
        }
    )
}
function mostrarViuda() {
    obteniendoImagenes(
        (listaDeImagenes) => {
            viuda.innerHTML = ``;
            listaDeImagenes.forEach(
                (a) => {
                    a = viuda.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/cinestres-firebase.appspot.com/o/Alejandro%2Fimages-prox-estrenos%2Fprox2.jpg?alt=media&token=fb025026-1c8a-440c-93d4-ee22f8c2d342 />`;
                }
            )
        }
    )
}
function mostrarSuicide() {
    obteniendoImagenes(
        (listaDeImagenes) => {
            suicide.innerHTML = ``;
            listaDeImagenes.forEach(
                (a) => {
                    a = suicide.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/cinestres-firebase.appspot.com/o/Alejandro%2Fimages-prox-estrenos%2Fprox3.jpg?alt=media&token=38a011ae-5cff-4ec6-8a13-240611ae672c />`;
                }
            )
        }
    )
}
function mostrarCruella() {
    obteniendoImagenes(
        (listaDeImagenes) => {
            cruella.innerHTML = ``;
            listaDeImagenes.forEach(
                (a) => {
                    a = cruella.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/cinestres-firebase.appspot.com/o/Alejandro%2Fimages-prox-estrenos%2Fprox4.jpg?alt=media&token=08932f7c-fd0b-41f4-8fc9-64e2be5347d4 />`;
                }
            )
        }
    )
}
function mostrarSpace() {
    obteniendoImagenes(
        (listaDeImagenes) => {
            space.innerHTML = ``;
            listaDeImagenes.forEach(
                (a) => {
                    a = space.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/cinestres-firebase.appspot.com/o/Alejandro%2Fimages-prox-estrenos%2Fprox5.jpeg?alt=media&token=acd5aed2-db73-43e4-81a5-b8763c809d42 />`;
                }
            )
        }
    )
}
function mostrarVenom() {
    obteniendoImagenes(
        (listaDeImagenes) => {
            venom.innerHTML = ``;
            listaDeImagenes.forEach(
                (a) => {
                    a = venom.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/cinestres-firebase.appspot.com/o/Alejandro%2Fimages-prox-estrenos%2Fprox6.jpg?alt=media&token=e325b251-362f-4ef2-bc66-01eadfbf5705 />`;
                }
            )
        }
    )
}
function mostrarConjuro() {
    obteniendoImagenes(
        (listaDeImagenes) => {
            conjuro.innerHTML = ``;
            listaDeImagenes.forEach(
                (a) => {
                    a = conjuro.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/cinestres-firebase.appspot.com/o/Alejandro%2Fimages-prox-estrenos%2Fprox7.jpg?alt=media&token=2d3eacfa-a753-48f1-bf2d-18a56a0d6b9d />`;
                }
            )
        }
    )
}
function mostrarEspiral() {
    obteniendoImagenes(
        (listaDeImagenes) => {
            espiral.innerHTML = ``;
            listaDeImagenes.forEach(
                (a) => {
                    a = espiral.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/cinestres-firebase.appspot.com/o/Alejandro%2Fimages-prox-estrenos%2Fprox8.jpg?alt=media&token=79369c15-8649-441e-bf88-389267136ac6 />`;
                }
            )
        }
    )
}
function mostrarWoman() {
    obteniendoImagenes(
        (listaDeImagenes) => {
            woman.innerHTML = ``;
            listaDeImagenes.forEach(
                (a) => {
                    a = woman.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/cinestres-firebase.appspot.com/o/Alejandro%2Fimages-prox-estrenos%2Fprox9.jpg?alt=media&token=9fa9c9c5-d494-4b7a-a023-91175ad63d82 />`;
                }
            )
        }
    )
}
function mostrarPinocho() {
    obteniendoImagenes(
        (listaDeImagenes) => {
            pinocho.innerHTML = ``;
            listaDeImagenes.forEach(
                (a) => {
                    a = pinocho.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/cinestres-firebase.appspot.com/o/Alejandro%2Fimages-prox-estrenos%2Fprox10.jpg?alt=media&token=18cc6c2a-2035-4177-b368-970ba7576037 />`;
                }
            )
        }
    )
}
function mostrarArmy() {
    obteniendoImagenes(
        (listaDeImagenes) => {
            army.innerHTML = ``;
            listaDeImagenes.forEach(
                (a) => {
                    a = army.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/cinestres-firebase.appspot.com/o/Alejandro%2Fimages-prox-estrenos%2Fprox11.jpg?alt=media&token=f9a90fa1-b5de-42c8-bd19-168a657be8c2 />`;
                }
            )
        }
    )
}
function mostrarFast() {
    obteniendoImagenes(
        (listaDeImagenes) => {
            fast.innerHTML = ``;
            listaDeImagenes.forEach(
                (a) => {
                    a = fast.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/cinestres-firebase.appspot.com/o/Alejandro%2Fimages-prox-estrenos%2Fprox12.jpg?alt=media&token=6d6ff346-2913-4d31-b624-7ff54f99b446 />`;
                }
            )
        }
    )
}
function mostrarHalloween() {
    obteniendoImagenes(
        (listaDeImagenes) => {
            halloween.innerHTML = ``;
            listaDeImagenes.forEach(
                (a) => {
                    a = halloween.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/cinestres-firebase.appspot.com/o/Alejandro%2Fimages-prox-estrenos%2Fprox13.jpg?alt=media&token=7030732c-6fc5-4963-ac91-92639fa6dc71 />`;
                }
            )
        }
    )
}
function mostrarBlonde() {
    obteniendoImagenes(
        (listaDeImagenes) => {
            blonde.innerHTML = ``;
            listaDeImagenes.forEach(
                (a) => {
                    a = blonde.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/cinestres-firebase.appspot.com/o/Alejandro%2Fimages-prox-estrenos%2Fprox14.jpg?alt=media&token=241a1f47-3363-44e4-bfc8-1c062d21975b />`;
                }
            )
        }
    )
}
function mostrarEscape() {
    obteniendoImagenes(
        (listaDeImagenes) => {
            escape.innerHTML = ``;
            listaDeImagenes.forEach(
                (a) => {
                    a = escape.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/cinestres-firebase.appspot.com/o/Alejandro%2Fimages-prox-estrenos%2Fprox15.jpg?alt=media&token=2c6718eb-202f-47f8-83d4-d2a84e94a08c/>`;
                }
            )
        }
    )
}