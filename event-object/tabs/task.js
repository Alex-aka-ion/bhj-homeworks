const tabs = document.getElementsByClassName('tab');
const tab_contents = document.getElementsByClassName('tab__content');
const tab_active = document.getElementsByClassName('tab_active');
const tab_content_active = document.getElementsByClassName('tab__content_active');

Array.from(tabs).forEach((tab, index) => {
    tab.onclick = () => {
        tab_active[0].classList.remove('tab_active');
        tab_content_active[0].classList.remove('tab__content_active');

        tabs[index].classList.add('tab_active');
        tab_contents[index].classList.add('tab__content_active');

        return false;
    }
});