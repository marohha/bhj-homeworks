const taskText  = document.getElementById('task__input');
const addBtn = document.getElementById('tasks__add');
const task = document.querySelector('.task')[0];
const taskTitle = document.querySelector('.task__title');
const tasksList = document.getElementById('tasks__list');

addBtn.addEventListener('click', (el) => {
    el.preventDefault();
    tasksList.appendChild(task.cloneNode(true));
})
