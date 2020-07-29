const getCookie = (name) => {
    const value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length === 2) {
        return parts.pop().split(";").shift();
    }
}

const popup = document.getElementById('subscribe-modal');

if (getCookie('popup_opened') !== 'true') {
    popup.classList.add('modal_active');
}

const close = popup.getElementsByClassName('modal__close')[0];

close.addEventListener('click', (e) => {
    e.preventDefault();

    popup.classList.remove('modal_active');

    document.cookie = 'popup_opened=true;';
})