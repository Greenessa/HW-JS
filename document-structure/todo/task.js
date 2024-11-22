let formEl = document.querySelector('.tasks__control');
// console.log(formEl);
let listTask = [];
formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    let taskAfterLoad = localStorage.getItem('tasks_list');
    if (taskAfterLoad) {
        listTask = taskAfterLoad.split(',');
    };
    let input = formEl.querySelector('input');
    let task = (input.value).trim();
    // console.log(task);
    if (task) {
        let toDoEl = document.createElement('div');
        toDoEl.classList.add('task');
        toDoEl.innerHTML = `<div class="task__title">
        ${task}
        </div>
        <a href="#" class="task__remove">&times;</a>`;
        let listToDo = formEl.nextElementSibling;
        listToDo.appendChild(toDoEl);
        // console.log(listToDo);
        // localStorage.setItem('tasks_list', listToDo.innerHTML);
        listTask.push(task);
        localStorage.setItem('tasks_list', listTask);
        // console.log(listTask);
        input.value = "";
    }  
})

let listEl = document.querySelector('.tasks__list');
// console.log(listEl);
listEl.addEventListener('click', (e) => {
    let el = e.target;
    let elDel = el.closest('.task');
    // elDel.querySelector(".task__title");
    let taskText = elDel.querySelector(".task__title").textContent.trim();
    let listTask = localStorage.getItem('tasks_list').split(',');
    // console.log(taskText);
    // console.log(listTask);
    elDel.remove();
    let n = listTask.findIndex(el => el === taskText);
    console.log(n);
    listTask.splice(n, 1);
    // console.log(listTask);

    // let taskList = document.querySelectorAll('.task');
    // if (taskList) {
    //     // localStorage.removeItem('tasks_list');
    //     localStorage.setItem('tasks_list', listEl.innerHTML);
    // } else {
    //     localStorage.removeItem('tasks_list');
    // }
    if (listTask) {
        localStorage.setItem('tasks_list', listTask);
    } else {
        localStorage.removeItem('tasks_list');
    }

}) 

document.addEventListener("DOMContentLoaded", () => {
    // let returnEl = localStorage.getItem('tasks_list');
    // let listEl = document.querySelector(".tasks__list");
    // // console.log(returnEl);
    //     if (returnEl) {
    //         listEl.innerHTML = returnEl;
    //     }
    // localStorage.removeItem('tasks_list');
    let taskAfterLoad = localStorage.getItem('tasks_list');
    // console.log(taskAfterLoad);
    let listEl = document.querySelector(".tasks__list");
    if (taskAfterLoad) {
        // taskAfterLoad.split(',');
        for (const t of taskAfterLoad.split(',')) {
            // console.log(t);
            let toDoEl = document.createElement('div');
            toDoEl.classList.add('task');
            toDoEl.innerHTML = `<div class="task__title">
            ${t}
            </div>
            <a href="#" class="task__remove">&times;</a>`;
            listEl.appendChild(toDoEl);
        }
    }
    
})
