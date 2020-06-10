const fontSizes = document.getElementsByClassName('font-size');
const activeFontSizes = document.getElementsByClassName('font-size_active');

Array.from(fontSizes).forEach((fontSize) => {
    fontSize.addEventListener('click',function (e) {
        e.preventDefault();

        fontSize.closest('.book').classList.remove('book_fs-small');
        fontSize.closest('.book').classList.remove('book_fs-big');

        const size = fontSize.dataset.size;
        if (size) fontSize.closest('.book').classList.add('book_fs-' + size);

        activeFontSizes[0].classList.remove('font-size_active');
        fontSize.classList.add('font-size_active');
    })
});

const colors = document.getElementsByClassName('color');

Array.from(colors).forEach((color) => {
    color.addEventListener('click',function (e) {
        e.preventDefault();

        const book = color.closest('.book');
        const bookColor = color.closest('.book__control');
        const dataColor = color.dataset.color;
        let whatColor;

        if (bookColor.classList.contains('book__control_color')) {
            whatColor = 'book_color-';
        } else {
            whatColor = 'book_bg-';
        }

        const regExp = new RegExp("\\b" + whatColor + "\\S+","g");
        book.className = book.className.replace(regExp, '');
        console.log(book.className);
        if (dataColor) color.closest('.book').classList.add(whatColor + dataColor);

        bookColor
            .getElementsByClassName('color_active')[0]
            .classList
            .remove('color_active');
        color.classList.add('color_active');
    })
});

