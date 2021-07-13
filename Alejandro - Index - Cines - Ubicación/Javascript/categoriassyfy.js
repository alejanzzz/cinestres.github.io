const storageRef = firebase.storage().ref();

const baseDeDatos = firebase.firestore();

const logo = document.getElementById("logo");
const viuda = document.getElementById("viuda");
const time = document.getElementById("time");
const suicide = document.getElementById("suicide");
const space = document.getElementById("space");
const cruella = document.getElementById("cruella");
const godzilla = document.getElementById("godzilla");
const thunder = document.getElementById("thunder");
const voyagers = document.getElementById("voyagers");
const mortal = document.getElementById("mortal");
const purge = document.getElementById("purge");
const matrix = document.getElementById("matrix");
const tides = document.getElementById("tides");
const eternals = document.getElementById("eternals");
const boss = document.getElementById("boss");
const reminiscence = document.getElementById("reminiscence");


const obteniendoImagenes = (funcionObtener) => {
    baseDeDatos.collection("imagenes_syfy", "imagenes", "imagenes_prox_estrenos").onSnapshot(funcionObtener);
}

window.addEventListener('DOMContentLoaded',mostrarLogo(), mostrarViuda(), mostrarTime(), mostrarSuicide(), mostrarSpace(), mostrarCruella(),mostrarGodzilla(), mostrarThunder(), mostrarVoyagers(), mostrarMortal(), mostrarPurge(), mostrarMatrix(), mostrarTides(), mostrarEternals(), mostrarBoss(), mostrarReminiscence());

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
function mostrarGodzilla() {
    obteniendoImagenes(
        (listaDeImagenes) => {
            godzilla.innerHTML = ``;
            listaDeImagenes.forEach(
                (a) => {
                    a = godzilla.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/cinestres-firebase.appspot.com/o/Alejandro%2Fimages-categoria-syfy%2Fsyfy6.jpeg?alt=media&token=8512b535-5206-44fb-9992-517e91a086e9 />`;
                }
            )
        }
    )
}
function mostrarThunder() {
    obteniendoImagenes(
        (listaDeImagenes) => {
            thunder.innerHTML = ``;
            listaDeImagenes.forEach(
                (a) => {
                    a = thunder.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/cinestres-firebase.appspot.com/o/Alejandro%2Fimages-categoria-syfy%2Fsyfy7.jpg?alt=media&token=e5c2cfb4-3b09-4eee-a71f-7cfafdece915/>`;
                }
            )
        }
    )
}
function mostrarVoyagers() {
    obteniendoImagenes(
        (listaDeImagenes) => {
            voyagers.innerHTML = ``;
            listaDeImagenes.forEach(
                (a) => {
                    a = voyagers.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/cinestres-firebase.appspot.com/o/Alejandro%2Fimages-categoria-syfy%2Fsyfy8.jpg?alt=media&token=47705f18-8ac1-4aa9-84d5-baab38440e70 />`;
                }
            )
        }
    )
}
function mostrarMortal() {
    obteniendoImagenes(
        (listaDeImagenes) => {
            mortal.innerHTML = ``;
            listaDeImagenes.forEach(
                (a) => {
                    a = mortal.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/cinestres-firebase.appspot.com/o/Alejandro%2Fimages-categoria-syfy%2Fsyfy9.jpg?alt=media&token=163ff6bd-febb-4fff-b4e7-9dabc187c87f />`;
                }
            )
        }
    )
}
function mostrarPurge() {
    obteniendoImagenes(
        (listaDeImagenes) => {
            purge.innerHTML = ``;
            listaDeImagenes.forEach(
                (a) => {
                    a = purge.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/cinestres-firebase.appspot.com/o/Alejandro%2Fimages-categoria-syfy%2Fsyfy10.jpg?alt=media&token=478c4968-c89e-4c9d-adcb-f9910a8344cf />`;
                }
            )
        }
    )
}
function mostrarMatrix() {
    obteniendoImagenes(
        (listaDeImagenes) => {
            matrix.innerHTML = ``;
            listaDeImagenes.forEach(
                (a) => {
                    a = matrix.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/cinestres-firebase.appspot.com/o/Alejandro%2Fimages-categoria-syfy%2Fsyfy11.jpg?alt=media&token=98b30110-92a6-4909-98c7-fc76fc5cd8db />`;
                }
            )
        }
    )
}
function mostrarTides() {
    obteniendoImagenes(
        (listaDeImagenes) => {
            tides.innerHTML = ``;
            listaDeImagenes.forEach(
                (a) => {
                    a = tides.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/cinestres-firebase.appspot.com/o/Alejandro%2Fimages-categoria-syfy%2Fsyfy12.jpg?alt=media&token=ff0982f2-7e08-4dd4-9f64-7d12d4b9e9cb />`;
                }
            )
        }
    )
}
function mostrarEternals() {
    obteniendoImagenes(
        (listaDeImagenes) => {
            eternals.innerHTML = ``;
            listaDeImagenes.forEach(
                (a) => {
                    a = eternals.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/cinestres-firebase.appspot.com/o/Alejandro%2Fimages-categoria-syfy%2Fsyfy13.jpg?alt=media&token=70e76052-d329-4091-9daf-5ae72c6f2598 />`;
                }
            )
        }
    )
}
function mostrarBoss() {
    obteniendoImagenes(
        (listaDeImagenes) => {
            boss.innerHTML = ``;
            listaDeImagenes.forEach(
                (a) => {
                    a = boss.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/cinestres-firebase.appspot.com/o/Alejandro%2Fimages-categoria-syfy%2Fsyfy14.jpg?alt=media&token=3837c0e5-0624-43e5-aa49-908cec948609 />`;
                }
            )
        }
    )
}
function mostrarReminiscence() {
    obteniendoImagenes(
        (listaDeImagenes) => {
            reminiscence.innerHTML = ``;
            listaDeImagenes.forEach(
                (a) => {
                    a = reminiscence.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/cinestres-firebase.appspot.com/o/Alejandro%2Fimages-categoria-syfy%2Fsyfy15.jpg?alt=media&token=48ebf1f9-6afe-4770-b72a-28f03bbccbe8 />`;
                }
            )
        }
    )
}