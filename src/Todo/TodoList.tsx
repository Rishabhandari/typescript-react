

import { useState } from 'react';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';

export interface TodosProps {
    todos: {
        todo: string,
        id: number,
        isDone: false,
    }[], // this is how you define array of object
}
type HandleIsDone = {
    handleIsDone: (IsDone: number) => void
    handleRemoveTodo: (id: number) => void
    handleEditTodo: (e, id: number) => void
}


export default function TodoList(props: (TodosProps & HandleIsDone)) {
    const [isDisabled, setIsDisabled] = useState(true);

    const handleIsDisabled = () => {
        setIsDisabled(!isDisabled);
    }

    return (
        <div>
            {props.todos.map((todo, index) => {
                return (
                    <div key={index}>
                        <input type='text' key={index} value={todo.todo} disabled={isDisabled} onChange={(e) => props.handleEditTodo(e, todo.id)} />
                        {isDisabled ? (<><AiFillEdit onClick={handleIsDisabled} /> </>) : <button onClick={handleIsDisabled} >Save</button>}
                        <MdDone onClick={() => props.handleIsDone(todo.id)} />
                        <AiFillDelete onClick={() => props.handleRemoveTodo(todo.id)} />
                    </div>)
            })}
        </div>
    )
}