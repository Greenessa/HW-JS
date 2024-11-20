let formEl = document.querySelector('.tasks__control');
// console.log(formEl);
formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    let input = formEl.querySelector('input');
    let task = input.value;
    if (task) {
        let toDoEl = document.createElement('div');
        toDoEl.classList.add('task');
        toDoEl.innerHTML = `<div class="task__title">
        ${input.value}
        </div>
        <a href="#" class="task__remove">&times;</a>`;
        let listToDo = formEl.nextElementSibling;
        listToDo.appendChild(toDoEl);
        // console.log(listToDo);
        localStorage.setItem('tasks_list', listToDo.innerHTML);
    }  
})

let listEl = document.querySelector('.tasks__list');
// console.log(listEl);
listEl.addEventListener('click', (e) => {
    let el = e.target;
    let elDel = el.closest('.task');
    elDel.remove();
    let taskList = document.querySelectorAll('.task');
    if (taskList) {
        // localStorage.removeItem('tasks_list');
        localStorage.setItem('tasks_list', listEl.innerHTML);
    } else {
        localStorage.removeItem('tasks_list');
    }
}) 

document.addEventListener("DOMContentLoaded", () => {
    let returnEl = localStorage.getItem('tasks_list');
    let listEl = document.querySelector(".tasks__list");
    console.log(returnEl);
        if (returnEl) {
            listEl.innerHTML = returnEl;
        }
})
