const storageRef = firebase.storage().ref();

const db = firebase.firestore();

const close = 'YuZOMvpW6lihtMCB8Kwa';
const cine1 = 'sI9Hrh6gSkm1pZj6RIQn';
const cine2 = 'iobAp8lyMYk1dtHfzdyy';
const cine3 = '1Ty8AVR57Wllf3Qh0VvN';
const cine4 = 'nGDP1MtBszGGRpvDPiu1';
const cine5 = 'p2cwunBzs2SaAk6jTpCn';
const cine6 = '9Y5cG51WBOxc8ZkwkkSl';


db.collection("imagenes_nuestros_cines").get().then((querySnapshot) =>{
    querySnapshot.forEach((doc)=>{
        if (doc.id == close){
            document.querySelector('#close').src = doc.data().ruta;
        } else if (doc.id == cine1){
            document.querySelector('#img1').src = doc.data().ruta;
        } else if (doc.id == cine2){
            document.querySelector('#img2').src = doc.data().ruta;
        } else if (doc.id == cine3){
            document.querySelector('#img3').src = doc.data().ruta;
        } else if (doc.id == cine4){
            document.querySelector('#img4').src = doc.data().ruta;
        } else if (doc.id == cine5){
            document.querySelector('#img5').src = doc.data().ruta;
        } else if (doc.id == cine6){
            document.querySelector('#img6').src = doc.data().ruta;
        }
    })
})