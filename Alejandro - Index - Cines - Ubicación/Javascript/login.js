const googleButton = document.querySelector("#googleLogin");

googleButton.addEventListener("click", (e) => {

  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).
    then((result) => {
      console.log(result);
      console.log("google sign in");
    })
    .catch(error => {
      console.error(error);
    })
});


const facebookButton = document.querySelector('#facebookLogin');

facebookButton.addEventListener('click', e => {

    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then((result) => {
        console.log(result);
        console.log("facebook sign in");
    })
        .catch(error => {
            console.error(error);
        })

})