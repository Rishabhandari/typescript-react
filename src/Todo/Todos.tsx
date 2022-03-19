import React, { BaseSyntheticEvent, useState } from 'react'
import TodoList from './TodoList';


export default function ChildComponent() {
    const [todo, setTodo] = useState<string>('');
    const [todos, setTodos] = useState([]);
    const handleTodos = (e: BaseSyntheticEvent) => {
        e.preventDefault();
        setTodos([
            ...todos,
            {
                id: Date.now(),
                todo: todo,
                isDone: false
            }
        ]);
        setTodo("");
    }

    const handleIsDone = (TodoId: number) => {
        console.log(TodoId);
        setTodos(todos.map((todo) => todo.id === TodoId ? { ...todo, isDone: !todo.isDone } : todo));
    }

    const handleRemoveTodo = (id: number) => {
        const newTodo = todos.filter((todo) => todo.id !== id)
        setTodos(newTodo);

    }
    const handleEditTodo = (e: React.ChangeEvent<HTMLInputElement>, id: number,) => {

        setTodos(todos.map((todo) => todo.id === id ? { ...todo, todo: e.target.value } : todo));
    }

    return (
        <div>
            <h1></h1>
            <form onSubmit={(e) => handleTodos(e)}>
                <input type='text' value={todo} onChange={e => setTodo(e.target.value)} />
                <button type='submit' >Submit</button>
            </form>
            <TodoList todos={todos} handleIsDone={(TodoId) => handleIsDone(TodoId)}
                handleRemoveTodo={(id) => handleRemoveTodo(id)}
                handleEditTodo={(e, id) => handleEditTodo(e, id)} />
        </div>
    )
}
