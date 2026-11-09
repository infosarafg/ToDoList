
export function addTask(tasks, title) {

    const cleanTitle = title.trim();

    
    const newTask = {
        id: Date.now(),
        title: cleanTitle,
        completed: false
    };

    return [...tasks, newTask];
}


// Complete a task
export function completeTask(tasks, taskId) {

    return tasks.map(task => {

        if (task.id === taskId) {
            return { ...task, completed: true };
        }

        return task;
    });
}


// Delete a task
export function deleteTask(tasks, taskId) {

    return tasks.filter(task => task.id !== taskId);
}
export function updateTask(tasks, taskId, newTitle) {

    const cleanTitle = newTitle.trim();

    if (!cleanTitle) {
        throw new Error('Task title cannot be empty');
    }

    return tasks.map(task => {

        if (task.id === taskId) {
            return {
                ...task,
                title: cleanTitle
            };
        }

        return task;
    });
}

