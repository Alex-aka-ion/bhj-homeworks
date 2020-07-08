const anchors = document.getElementsByClassName('has-tooltip');
const tooltips = document.getElementsByClassName('tooltip');

Array.from(anchors).forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();

        if (tooltips.length) tooltips[0].remove();

        anchor.insertAdjacentHTML('afterend',`
            <div class="tooltip tooltip_active"  style="left: ${anchor.getBoundingClientRect().left}px; top:${anchor.getBoundingClientRect().bottom}px">${anchor.title}</div>
        `);
    })
})

document.addEventListener("scroll", () => {
    if (tooltips.length) tooltips[0].remove();
});