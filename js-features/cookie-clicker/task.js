const counter = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');

cookie.onclick = () => {
    counter.textContent = (Number(counter.textContent) + 1).toString();
    if (Number(counter.textContent) % 2 === 0) {
        cookie.width = cookie.width * 1.1;
        cookie.height = cookie.height * 1.1;
    } else {
        cookie.width = cookie.width * 0.9;
        cookie.height = cookie.height * 0.9;
    }
};