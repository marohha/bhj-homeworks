const taskText  = document.getElementById('task__input');
const addBtn = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');

addBtn.addEventListener('click', el => {
    el.preventDefault();
    if (taskText.value.trim() !== '') {
        tasksList.insertAdjacentHTML('afterBegin', 
        `<div class="task">
            <div class="task__title">
                ${taskText.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>`);
        taskText.value = null;
    }
})

document.addEventListener('click', delTask)                       
function delTask (el) {
    let task = el.target;
    if (task.classList.contains('task__remove')){
        task.parentElement.remove();
    }
}