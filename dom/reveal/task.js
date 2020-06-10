const reveal = document.getElementsByClassName('reveal')[0];

window.addEventListener('scroll',() => {
    const top = reveal.getBoundingClientRect().top;

    if (top < window.innerHeight) {
        reveal.classList.add('reveal_active');
    }
})