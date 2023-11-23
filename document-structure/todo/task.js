const taskText  = document.getElementById('task__input');
const addBtn = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');

taskText.addEventListener('keydown', el => {
    if (el.key === 'Enter' && taskText.value.length != 0) {
        tasksList.innerHTML += 
        `<div class="task">
            <div class="task__title">
                ${taskText.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>`;
        taskText.value = null; 
    }
})
