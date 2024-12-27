import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

function Todos() {
    const todos = useSelector((state) => state.todos); 
    const dispatch = useDispatch();

    return (
        <>
            <h1>Todos</h1>
            <ul className="list-none">
                {todos.map((todo) => (
                    <li
                        className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
                        key={todo.id}
                    >
                        <div className="text-white">{todo.title}</div> {/* ✅ Correct property */}
                        <button
                            onClick={() => dispatch(removeTodo({ id: todo.id }))} // ✅ Pass as an object
                            className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Todos;
