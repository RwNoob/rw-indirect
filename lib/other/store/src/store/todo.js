import { ref, watchEffect } from 'rw-indirect';
import { defineStore } from 'rw-indirect-store';

export const useTodoStore = defineStore('todos', () => {
    const todos = ref(read());

    watchEffect(() => save(todos.value));

    function toggleCompleted(item) {
        item.completed = !item.completed;
    }

    function editTodo(item) {
        const edit = prompt('Edit the todo:');
        if (edit === null || edit.length === 0) return;
        item.value = edit;
    }

    function addTodo(value) {
        todos.value.unshift({
            id: window.crypto.randomUUID(),
            value,
            completed: false,
        });
    }

    function removeTodo(id) {
        const index = todos.value.findIndex((todo) => todo.id === id);
        if (index > -1) {
            todos.value.splice(index, 1);
        }
    }

    return {
        todos,
        addTodo,
        removeTodo,
        toggleCompleted,
        editTodo,
    };
});
const TODO_KEY = 'rw-indirect-todo';
function save(todos) {
    localStorage.setItem(TODO_KEY, JSON.stringify(todos));
}
function read() {
    const item = localStorage.getItem(TODO_KEY);
    if (!item) {
        return [
            {
                id: '7cf5c94a-dc52-44ea-9207-dca422f1e8f0',
                value: 'Laundry',
                completed: false,
            },
            {
                id: '00426616-93f3-4c63-bff7-d0ab4673aa5b',
                value: 'Homework',
                completed: false,
            },
            {
                id: 'e1029132-a386-4f10-ad6a-8abd550202ff',
                value: 'Work',
                completed: false,
            },
        ];
    }
    return JSON.parse(item);
}
