const dropDowns = document.getElementsByClassName('dropdown');

Array.from(dropDowns).forEach((dropDown) => {
    const dropDownValue = dropDown.getElementsByClassName('dropdown__value')[0];
    const dropDownList = dropDown.getElementsByClassName('dropdown__list')[0];
    const dropDownLinks = dropDown.getElementsByClassName('dropdown__link');

    dropDownValue.addEventListener('click', () => {
        dropDownList.classList.add('dropdown__list_active');
    });

    Array.from(dropDownLinks).forEach((link) => {
        link.onclick = () => {
            dropDownList.classList.remove('dropdown__list_active');
            dropDownValue.textContent = link.textContent;
            return false;
        }
    });
});