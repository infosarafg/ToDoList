
import { addTask } from './task.js';
import {
    addTask,
    completeTask,
    deleteTask,
    updateTask
} from './task.js';
let tasks = [];

const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Display all tasks
function displayTasks() {

    taskList.innerHTML = '';

    tasks.forEach(task => {

        const li = document.createElement('li');

        li.textContent = task.title;

        taskList.appendChild(li);

    });
    const editButton = document.createElement('button');

editButton.textContent = 'Edit';

editButton.addEventListener('click', () => {

    const newTitle = prompt('Enter the new task title:', task.title);

    if (newTitle === null) {
        return;
    }

    try {
        tasks = updateTask(tasks, task.id, newTitle);
        displayTasks();
    } catch (error) {
        alert(error.message);
    }

});
}

// Add a new task
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

