class Menu {
    constructor(menu) {
        const menuSubs = menu.getElementsByClassName('menu_sub');
        const menuActive = menu.getElementsByClassName('menu_active');

        for (let menuItem of menuSubs) {
            menuItem.closest('.menu__item').getElementsByTagName('a')[0].onclick = (item) => {
                if (menuItem.classList.contains('menu_active')) {
                    menuItem.classList.remove('menu_active')
                } else {
                    if (menuActive.length) menuActive[0].classList.remove('menu_active');
                    menuItem.classList.add('menu_active');
                }
                return false;
            }
        }
    }
}

Array.from(document.getElementsByClassName('menu menu_main')).forEach((menu) => new Menu(menu));