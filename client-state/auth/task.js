const signIn = document.getElementById('signin');
const loginForm = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const user_id = document.getElementById('user_id');
const signOut = document.getElementById('signout__btn');

const userId = localStorage.getItem('user_id');
if (userId) {
    user_id.innerText = userId;
    welcome.classList.add('welcome_active');
} else {
    signIn.classList.add('signin_active');
}

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const sighInFromData = new FormData(loginForm);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    xhr.send(sighInFromData);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            const json = JSON.parse(xhr.responseText);

            if (Boolean(json.success)) {
                localStorage.setItem('user_id', json.user_id);
                signIn.classList.remove('signin_active');

                user_id.innerText = json.user_id;

                welcome.classList.add('welcome_active');
            } else {
                alert('Неверный логин/пароль');
                loginForm.reset();
            }
        }
    }
})

signOut.addEventListener('click', (e) => {
    e.preventDefault();

    localStorage.removeItem('user_id');
    document.location.reload();
})
