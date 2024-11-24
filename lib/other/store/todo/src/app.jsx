import { For, ref } from 'rw-indirect';
import { useTodoStore } from './store/todo';

export function App() {
    const textRef = ref('');
    const todoStore = useTodoStore();
    const addItem = () => {
        if (!textRef.value.trim()) return;
        todoStore.addTodo(textRef.value);
        textRef.value = '';
    };
    return (
        <div id='app'>
            <header>
                <nav class='navbar'>
                    <div class='logo'>
                        <h2>Rw Indirect Store</h2>
                    </div>
                </nav>
            </header>
            <div class='container'>
                <h1 class='title'>TODO LIST</h1>
                <hr />
                <div class='input-group'>
                    <input
                        type='text'
                        class='form-control'
                        placeholder='Add item...'
                        bind:value={textRef}
                        onKeyup={$event.code === 'Enter' && addItem()}
                    />
                    <button class='btn btn-success' onClick={addItem()}>
                        ADD
                    </button>
                </div>
                <div class='todo-table'>
                    <div class='table-header'>
                        <div class='table-cell'>Task</div>
                        <div class='table-cell'>Actions</div>
                    </div>
                    <div class='table-body'>
                        <For each={todoStore.todos} key={(item) => item.id}>
                            {(item, index) => (
                                <div
                                    class={[
                                        'table-row',
                                        index.value % 2 === 0 && 'even-row',
                                        item.value.completed && 'completed',
                                    ]}>
                                    <div
                                        class={[
                                            'table-cell',
                                            item.value.completed && 'completed-cell',
                                        ]}>
                                        {item.value.value}
                                    </div>
                                    <div class='table-cell'>
                                        <button
                                            class='btn btn-primary'
                                            onClick={todoStore.toggleCompleted(item.value)}>
                                            {item.value.completed ? 'Undo' : 'Complete'}
                                        </button>
                                        <button
                                            class='btn btn-info'
                                            onclick={todoStore.editTodo(item.value)}>
                                            Edit
                                        </button>
                                        <button
                                            class='btn btn-danger'
                                            onclick={todoStore.removeTodo(item.value.id)}>
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            )}
                        </For>
                    </div>
                </div>
            </div>
        </div>
    );
}
