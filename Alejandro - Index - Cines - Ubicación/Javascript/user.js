const auth = firebase.auth()
const database = firebase.database()

function register() {
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    full_name = document.getElementById('full_name').value
    favourite_movie = document.getElementById('favourite_movie').value
    movies_before_series = document.getElementById('movies_before_series').value

    if (validate_email(email) == false || validate_password(password) == false) {
        swal('Error', 'Email y/o contraseña incorrectos.', 'error')
        return
    }
    if (validate_field(full_name) == false || validate_field(favourite_movie) == false || validate_field(movies_before_series) == false) {
        swal('Error', 'Uno o más campos incorrectos.', 'error')
        return
    }

    auth.createUserWithEmailAndPassword(email, password)
        .then(function () {
            var user = auth.currentUser

            var database_ref = database.ref()

            var user_data = {
                email: email,
                full_name: full_name,
                favourite_movie: favourite_movie,
                movies_before_series: movies_before_series,
                last_login: Date.now()
            }

            database_ref.child('users/' + user.uid).set(user_data)

            swal('¡Felicidades!', 'Cuenta Creada', 'success')
        })
        .catch(function (error) {
            var error_code = error.code
            var error_message = error.message

            alert(error_message)
        })
}

function login() {
    email = document.getElementById('email').value
    password = document.getElementById('password').value

    if (validate_email(email) == false || validate_password(password) == false) {
        swal('Error', 'Email y/o contraseña incorrectos.', 'error')
        return
    }

    auth.signInWithEmailAndPassword(email, password)
        .then(function () {
            var user = auth.currentUser

            var database_ref = database.ref()

            var user_data = {
                last_login: Date.now()
            }

            database_ref.child('users/' + user.uid).update(user_data)

            swal('¡Bienvenido!', 'Iniciaste Sesión', 'success')

        })
        .catch(function (error) {
            var error_code = error.code
            var error_message = error.message

            alert(error_message)
        })
}



function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
        return true
    } else {
        return false
    }
}

function validate_password(password) {
    if (password < 6) {
        return false
    } else {
        return true
    }
}

function validate_field(field) {
    if (field == null) {
        return false
    }

    if (field.length <= 0) {
        return false
    } else {
        return true
    }
}