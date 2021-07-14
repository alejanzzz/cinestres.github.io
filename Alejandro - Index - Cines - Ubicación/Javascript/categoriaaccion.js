const storageRef = firebase.storage().ref();

const baseDeDatos = firebase.firestore();

const logo = document.getElementById("logo");
const eva = document.getElementById("eva");
const wayDown = document.getElementById("waydown");
const kingsman = document.getElementById("kingsman");
const quietPlace = document.getElementById("quietplace");
const boku = document.getElementById("boku");
const mark = document.getElementById("mark");
const nobody = document.getElementById("nobody");
const justice = document.getElementById("justice");
const tomorrow = document.getElementById("tomorrow");
const hitman = document.getElementById("hitman");
const gun = document.getElementById("gun");
const wrath = document.getElementById("wrath");
const under = document.getElementById("under");
const beyond = document.getElementById("beyond");
const angel = document.getElementById("angel");


const obteniendoImagenes = (funcionObtener) => {
    baseDeDatos.collection("imagenes", "imagenes_accion").onSnapshot(funcionObtener);
}


window.addEventListener('DOMContentLoaded', mostrarLogo(), mostrarWayDown(), mostrarEva(), mostrarKingsman(), mostrarQuietPlace(), mostrarBoku(), mostrarMark(), mostrarNobody(), mostrarJustice(), mostrarTomorrow(), mostrarHitman(), mostrarGun(), mostrarWrath(), mostrarUnder(), mostrarBeyond(), mostrarAngel());

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
function mostrarBoku() {
    obteniendoImagenes(
        (listaDeImagenes) => {
            boku.innerHTML = ``;
            listaDeImagenes.forEach(
                (a) => {
                    a = boku.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/cinestres-firebase.appspot.com/o/Alejandro%2Fimages-categor%C3%ADa-acci%C3%B3n%2Fpeli_4.webp?alt=media&token=befc4405-7f98-4c14-812e-be74376e4b10 />`;
                }
            )
        }
    )
}
function mostrarMark() {
    obteniendoImagenes(
        (listaDeImagenes) => {
            mark.innerHTML = ``;
            listaDeImagenes.forEach(
                (a) => {
                    a = mark.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/cinestres-firebase.appspot.com/o/Alejandro%2Fimages-categor%C3%ADa-acci%C3%B3n%2Fac6.jpg?alt=media&token=dd1a0615-caf0-4f64-a92e-f02fa0ae03fc />`;
                }
            )
        }
    )
}
function mostrarNobody() {
    obteniendoImagenes(
        (listaDeImagenes) => {
            nobody.innerHTML = ``;
            listaDeImagenes.forEach(
                (a) => {
                    a = nobody.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/cinestres-firebase.appspot.com/o/Alejandro%2Fimages-categor%C3%ADa-acci%C3%B3n%2Fac7.jpg?alt=media&token=2953ac24-830f-4f75-846e-3912ee0452f5 />`;
                }
            )
        }
    )
}
function mostrarJustice() {
    obteniendoImagenes(
        (listaDeImagenes) => {
            justice.innerHTML = ``;
            listaDeImagenes.forEach(
                (a) => {
                    a = justice.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/cinestres-firebase.appspot.com/o/Alejandro%2Fimages-categor%C3%ADa-acci%C3%B3n%2Fac8.jpg?alt=media&token=46fd5153-fa38-4c6a-a328-469f00503f9f />`;
                }
            )
        }
    )
}
function mostrarTomorrow() {
    obteniendoImagenes(
        (listaDeImagenes) => {
            tomorrow.innerHTML = ``;
            listaDeImagenes.forEach(
                (a) => {
                    a = tomorrow.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/cinestres-firebase.appspot.com/o/Alejandro%2Fimages-categor%C3%ADa-acci%C3%B3n%2Fac9.jpg?alt=media&token=83ba1e0f-e7d0-471b-8bcf-aee2d38de9b2 />`;
                }
            )
        }
    )
}
function mostrarHitman() {
    obteniendoImagenes(
        (listaDeImagenes) => {
            hitman.innerHTML = ``;
            listaDeImagenes.forEach(
                (a) => {
                    a = hitman.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/cinestres-firebase.appspot.com/o/Alejandro%2Fimages-categor%C3%ADa-acci%C3%B3n%2Fac10.jpg?alt=media&token=51fb05d3-6a02-41e2-90fb-3098774ad32b />`;
                }
            )
        }
    )
}
function mostrarGun() {
    obteniendoImagenes(
        (listaDeImagenes) => {
            gun.innerHTML = ``;
            listaDeImagenes.forEach(
                (a) => {
                    a = gun.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/cinestres-firebase.appspot.com/o/Alejandro%2Fimages-categor%C3%ADa-acci%C3%B3n%2Fac11.jpg?alt=media&token=5b783dc3-67b9-4f4c-a6df-86a4b84ee199 />`;
                }
            )
        }
    )
}
function mostrarWrath() {
    obteniendoImagenes(
        (listaDeImagenes) => {
            wrath.innerHTML = ``;
            listaDeImagenes.forEach(
                (a) => {
                    a = wrath.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/cinestres-firebase.appspot.com/o/Alejandro%2Fimages-categor%C3%ADa-acci%C3%B3n%2Fac12.jpg?alt=media&token=3ce6d1ab-fe0a-4614-a8da-94f8b97eb215 />`;
                }
            )
        }
    )
}
function mostrarUnder() {
    obteniendoImagenes(
        (listaDeImagenes) => {
            under.innerHTML = ``;
            listaDeImagenes.forEach(
                (a) => {
                    a = under.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/cinestres-firebase.appspot.com/o/Alejandro%2Fimages-categor%C3%ADa-acci%C3%B3n%2Fac13.jpg?alt=media&token=037dbe82-a1f1-4cbb-bde2-3145463dea76 />`;
                }
            )
        }
    )
}
function mostrarBeyond() {
    obteniendoImagenes(
        (listaDeImagenes) => {
            beyond.innerHTML = ``;
            listaDeImagenes.forEach(
                (a) => {
                    a = beyond.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/cinestres-firebase.appspot.com/o/Alejandro%2Fimages-categor%C3%ADa-acci%C3%B3n%2Fac14.jpg?alt=media&token=904746f6-7711-45d6-8b0e-47efe637ba9c />`;
                }
            )
        }
    )
}
function mostrarAngel() {
    obteniendoImagenes(
        (listaDeImagenes) => {
            angel.innerHTML = ``;
            listaDeImagenes.forEach(
                (a) => {
                    a = angel.innerHTML = `<img src=https://firebasestorage.googleapis.com/v0/b/cinestres-firebase.appspot.com/o/Alejandro%2Fimages-categor%C3%ADa-acci%C3%B3n%2Fac15.jpg?alt=media&token=70e75c78-d553-43eb-850f-47c3da701dbc />`;
                }
            )
        }
    )
}