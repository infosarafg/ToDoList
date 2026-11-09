
import { describe, it, expect } from 'vitest';
import { addTask } from '../task.js';
import {
    addTask,
    completeTask,
    deleteTask,
    updateTask
} from '../task.js';

describe('Add Task', () => {

    it('should add a new task to the list', () => {

        const tasks = [];

        const result = addTask(tasks, 'Study JavaScript');

        expect(result).toHaveLength(1);
        expect(result[0].title).toBe('Study JavaScript');

    });

});
it('should reject an empty task', () => {

    const tasks = [];

    expect(() => addTask(tasks, '   '))
        .toThrow('Task title cannot be empty');

});

import { describe, it, expect } from 'vitest';
import { addTask, completeTask, deleteTask } from '../task.js';

describe('Complete Task', () => {

    it('should mark a task as completed', () => {

        const tasks = [
            { id: 1, title: 'Study JavaScript', completed: false }
        ];

        const result = completeTask(tasks, 1);

        expect(result[0].completed).toBe(true);

    });

});

describe('Delete Task', () => {

    it('should delete a task from the list', () => {

        const tasks = [
            { id: 1, title: 'Study JavaScript', completed: false },
            { id: 2, title: 'Read a book', completed: false }
        ];

        const result = deleteTask(tasks, 1);

        expect(result).toHaveLength(1);
        expect(result[0].id).toBe(2);

    });

});

describe('Modify Task', () => {

    it('should update the task title', () => {

        const tasks = [
            {
                id: 1,
                title: 'Study HTML',
                completed: false
            }
        ];

        const result = updateTask(
            tasks,
            1,
            'Study JavaScript'
        );

        expect(result[0].title).toBe('Study JavaScript');

    });

});

