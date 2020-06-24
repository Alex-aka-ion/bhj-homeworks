const interests = document.querySelectorAll('.interests_main > ul > li.interest');

interests.forEach((interest) => {
    const parentCheckBox = interest.querySelector('li > label > input.interest__check');
    parentCheckBox.addEventListener('change', (e) => {
        const childCheckBoxes = interest.querySelectorAll('ul.interests li input.interest__check');
        childCheckBoxes.forEach((checkbox) => checkbox.checked = !checkbox.checked)
    })
})