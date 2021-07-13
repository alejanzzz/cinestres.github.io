const storageRef = firebase.storage().ref();

const baseDeDatos = firebase.firestore();

const logo = document.getElementById("logo");
const eva = document.getElementById("eva");
const wayDown = document.getElementById("waydown");
const kingsman = document.getElementById("kingsman");
const quietPlace = document.getElementById("quietplace");
const getBack = document.getElementById("getback");
const nomadland = document.getElementById("nomadland");
const minari = document.getElementById("minari");
const druk = document.getElementById("druk");
const aida = document.getElementById("aida");
const asistente = document.getElementById("asistente");
const swallow = document.getElementById("swallow");
const judas = document.getElementById("judas");
const relic = document.getElementById("relic");
const nadie = document.getElementById("nadie");
const mauri = document.getElementById("mauri");

const obteniendoImagenes = (funcionObtener) => {
    baseDeDatos.collection("imagenes").onSnapshot(funcionObtener);
}

window.addEventListener('DOMContentLoaded', mostrarLogo(), mostrarWayDown(), mostrarEva(), mostrarKingsman(), mostrarQuietPlace(), mostrarGetBack(), mostrarNomadland(), mostrarMinari(), mostrarDruk(), mostrarAida(), mostrarSwallow(), mostrarAsistente(), mostrarJudas(), mostrarRelic(), mostrarNadie(), mostrarMauri());

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
function mostrarEva() {
    obteniendoImagenes(
        (listaDeImagenes) => {
            eva.innerHTML = ``;
            listaDeImagenes.forEach(
                (a) => {
                    a = eva.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/cinestres-firebase.appspot.com/o/Alejandro%2Fimages-cartelera%2Fcartelera1.jpg?alt=media&token=6e18dbfb-3009-4653-b7de-1d22d0628bb8 />`;
                }
            )
        }
    )
}
function mostrarWayDown() {
    obteniendoImagenes(
        (listaDeImagenes) => {
            wayDown.innerHTML = ``;
            listaDeImagenes.forEach(
                (a) => {
                    a = wayDown.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/cinestres-firebase.appspot.com/o/Alejandro%2Fimages-cartelera%2Fcartelera2.jpg?alt=media&token=58812c1d-6824-4c65-8a2b-ca474372cece />`;
                }
            )
        }
    )
}
function mostrarKingsman() {
    obteniendoImagenes(
        (listaDeImagenes) => {
            kingsman.innerHTML = ``;
            listaDeImagenes.forEach(
                (a) => {
                    a = kingsman.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/cinestres-firebase.appspot.com/o/Alejandro%2Fimages-cartelera%2Fcartelera3.jpg?alt=media&token=558f25dc-c92e-47f9-883d-ede928732582 />`;
                }
            )
        }
    )
}
function mostrarQuietPlace() {
    obteniendoImagenes(
        (listaDeImagenes) => {
            quietPlace.innerHTML = ``;
            listaDeImagenes.forEach(
                (a) => {
                    a = quietPlace.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/cinestres-firebase.appspot.com/o/Alejandro%2Fimages-cartelera%2Fcartelera4.jpg?alt=media&token=2a15ca7e-8289-494f-8030-348500180a3c />`;
                }
            )
        }
    )
}
function mostrarGetBack() {
    obteniendoImagenes(
        (listaDeImagenes) => {
            getBack.innerHTML = ``;
            listaDeImagenes.forEach(
                (a) => {
                    a = getBack.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/cinestres-firebase.appspot.com/o/Alejandro%2Fimages-cartelera%2Fcartelera5.jpg?alt=media&token=e4d6f84f-a120-4b5a-a00b-0247d36d811a />`;
                }
            )
        }
    )
}
function mostrarNomadland() {
    obteniendoImagenes(
        (listaDeImagenes) => {
            nomadland.innerHTML = ``;
            listaDeImagenes.forEach(
                (a) => {
                    a = nomadland.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/cinestres-firebase.appspot.com/o/Alejandro%2Fimages-cartelera%2Fcartelera6.jpg?alt=media&token=54f3b610-4185-4359-9eff-b6d097c8dbd0 />`;
                }
            )
        }
    )
}
function mostrarMinari() {
    obteniendoImagenes(
        (listaDeImagenes) => {
            minari.innerHTML = ``;
            listaDeImagenes.forEach(
                (a) => {
                    a = minari.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/cinestres-firebase.appspot.com/o/Alejandro%2Fimages-cartelera%2Fcartelera7.jpg?alt=media&token=0c9cedef-c706-458e-86e7-310b052514b7 />`;
                }
            )
        }
    )
}
function mostrarDruk() {
    obteniendoImagenes(
        (listaDeImagenes) => {
            druk.innerHTML = ``;
            listaDeImagenes.forEach(
                (a) => {
                    a = druk.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/cinestres-firebase.appspot.com/o/Alejandro%2Fimages-cartelera%2Fcartelera8.jpg?alt=media&token=ea106a1a-5697-4781-ba33-9b5280137464 />`;
                }
            )
        }
    )
}
function mostrarAida() {
    obteniendoImagenes(
        (listaDeImagenes) => {
            aida.innerHTML = ``;
            listaDeImagenes.forEach(
                (a) => {
                    a = aida.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/cinestres-firebase.appspot.com/o/Alejandro%2Fimages-cartelera%2Fcartelera9.jpg?alt=media&token=b150fe41-7a8d-4e05-a9e1-698250fa37e1/>`;
                }
            )
        }
    )
}
function mostrarAsistente() {
    obteniendoImagenes(
        (listaDeImagenes) => {
            asistente.innerHTML = ``;
            listaDeImagenes.forEach(
                (a) => {
                    a = asistente.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/cinestres-firebase.appspot.com/o/Alejandro%2Fimages-cartelera%2Fcartelera10.jpg?alt=media&token=d80362f7-904b-41ae-bc50-a2e48623b4b1/>`;
                }
            )
        }
    )
}
function mostrarSwallow() {
    obteniendoImagenes(
        (listaDeImagenes) => {
            swallow.innerHTML = ``;
            listaDeImagenes.forEach(
                (a) => {
                    a = swallow.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/cinestres-firebase.appspot.com/o/Alejandro%2Fimages-cartelera%2Fcartelera11.jpg?alt=media&token=38f519d0-5272-447c-bd88-f274879c1853/>`;
                }
            )
        }
    )
}
function mostrarJudas() {
    obteniendoImagenes(
        (listaDeImagenes) => {
            judas.innerHTML = ``;
            listaDeImagenes.forEach(
                (a) => {
                    a = judas.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/cinestres-firebase.appspot.com/o/Alejandro%2Fimages-cartelera%2Fcartelera12.jpg?alt=media&token=e9b6da4c-76fc-45cc-ab20-66cc04ecb661/>`;
                }
            )
        }
    )
}
function mostrarRelic() {
    obteniendoImagenes(
        (listaDeImagenes) => {
            relic.innerHTML = ``;
            listaDeImagenes.forEach(
                (a) => {
                    a = relic.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/cinestres-firebase.appspot.com/o/Alejandro%2Fimages-cartelera%2Fcartelera13.jpg?alt=media&token=37a9ec5e-497c-440c-b6ff-1e10c870d4d1/>`;
                }
            )
        }
    )
}
function mostrarNadie() {
    obteniendoImagenes(
        (listaDeImagenes) => {
            nadie.innerHTML = ``;
            listaDeImagenes.forEach(
                (a) => {
                    a = nadie.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/cinestres-firebase.appspot.com/o/Alejandro%2Fimages-cartelera%2Fcartelera14.jpg?alt=media&token=c288f83d-0220-4f5e-9e3d-e69b464f1c3a/>`;
                }
            )
        }
    )
}
function mostrarMauri() {
    obteniendoImagenes(
        (listaDeImagenes) => {
            mauri.innerHTML = ``;
            listaDeImagenes.forEach(
                (a) => {
                    a = mauri.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/cinestres-firebase.appspot.com/o/Alejandro%2Fimages-cartelera%2Fcartelera15.jpg?alt=media&token=313a183f-8c1d-4988-bf9c-4165b47fe498/>`;
                }
            )
        }
    )
}