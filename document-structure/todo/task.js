const input = document.getElementById('task__input');
const button = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');
const deleteButtons = document.getElementsByClassName('task__remove');

const clickDeleteButton = (e) => {
    e.preventDefault();

    e.target.parentElement.remove();
}

const addTask = () => {
    tasksList.insertAdjacentHTML('beforeend',`
            <div class="task">
              <div class="task__title">
                ${input.value}
              </div>
              <a href="#" class="task__remove">&times;</a>
            </div>`);

    input.value = '';

    deleteButtons[deleteButtons.length - 1].addEventListener('click', clickDeleteButton );
}

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && input.value) {
        addTask();
    }
});

button.addEventListener('click', (e) => {
    e.preventDefault();

    if (input.value) {
        addTask();
    }
})

