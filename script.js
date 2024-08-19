let taskInput = document.getElementById('task-input');
let addTaskBtn = document.getElementById('add-task-btn');
let todoList = document.getElementById('todo-list');
let doneList = document.getElementById('done-list');

let tasks = [];
let doneTasks = [];

addTaskBtn.addEventListener('click', () => {
    let task = taskInput.value.trim();
    if (task) {
        tasks.push({ text: task, completed: false });
        taskInput.value = '';
        renderTasks();
    }
});

function renderTasks() {
    todoList.innerHTML = '';
    tasks.forEach((task, index) => {
        let taskElement = document.createElement('li');
        let taskNumber = document.createElement('span');
        taskNumber.className = 'task-number';
        taskNumber.textContent = `${index + 1}.`;
        let taskText = document.createElement('span');
        taskText.className = 'task-text';
        taskText.textContent = task.text;
        let deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'X';
        deleteBtn.addEventListener('click', () => {
            tasks.splice(index, 1);
            renderTasks();
        });
        let doneBtn = document.createElement('button');
        doneBtn.className = 'done-btn';
        doneBtn.textContent = 'Done';
        doneBtn.addEventListener('click', () => {
            doneTasks.push(task);
            tasks.splice(index, 1);
            renderTasks();
            renderDoneTasks();
        });
        taskElement.appendChild(taskNumber);
        taskElement.appendChild(taskText);
        taskElement.appendChild(deleteBtn);
        taskElement.appendChild(doneBtn);
        todoList.appendChild(taskElement);
    });
}

function renderDoneTasks() {
    doneList.innerHTML = '';
    doneTasks.forEach((task, index) => {
        let taskElement = document.createElement('li');
        let taskNumber = document.createElement('span');
        taskNumber.className = 'task-number';
        taskNumber.textContent = `${index + 1}.`;
        let taskText = document.createElement('span');
        taskText.className = 'task-text';
        taskText.textContent = task.text;
        taskText.style.textDecoration = 'line-through';
        taskElement.appendChild(taskNumber);
        taskElement.appendChild(taskText);
        doneList.appendChild(taskElement);
    });
}

renderTasks();
renderDoneTasks();