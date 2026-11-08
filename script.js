
import {
    addTask,
    completeTask,
    deleteTask
} from './task.js';

let tasks = [];

const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');


// Display tasks
function displayTasks() {

    taskList.innerHTML = '';

    tasks.forEach(task => {

        const li = document.createElement('li');
        li.className = 'task-item';

        const title = document.createElement('span');
        title.textContent = task.title;

        if (task.completed) {
            title.classList.add('completed');
        }

        const completeButton = document.createElement('button');
        completeButton.textContent = task.completed
            ? 'Completed'
            : 'Complete';

        completeButton.disabled = task.completed;

        completeButton.addEventListener('click', () => {
            tasks = completeTask(tasks, task.id);
            displayTasks();
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';

        deleteButton.addEventListener('click', () => {
            tasks = deleteTask(tasks, task.id);
            displayTasks();
        });

        li.append(title, completeButton, deleteButton);

        taskList.appendChild(li);
    });
}


// Add task
taskForm.addEventListener('submit', function(event) {

    event.preventDefault();

    try {

        tasks = addTask(tasks, taskInput.value);

        displayTasks();

        taskInput.value = '';

    } catch (error) {

        alert(error.message);

    }
});
