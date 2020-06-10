class Rotator {
    constructor(rotator) {
        this.elements = rotator.getElementsByClassName('rotator__case');
        this.active = rotator.getElementsByClassName('rotator__case_active');

        this.startIt();
    }

    startIt() {
        this.active[0].style.color = this.active[0].dataset.color;
        setTimeout(() => this.getNext(), this.active[0].dataset.speed);
    }

    getNext() {
        const next = this.active[0].nextElementSibling;
        this.active[0].classList.remove('rotator__case_active');
        if (next) {
            next.classList.add('rotator__case_active');
        } else {
            this.elements[0].classList.add('rotator__case_active');
        }
        this.startIt();
    }
}

Array.from(document.getElementsByClassName('rotator'))
    .forEach((r) => new Rotator(r));