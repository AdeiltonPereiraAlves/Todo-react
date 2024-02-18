import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTodo, removeTodo, filterTodos } from '../slices/todoSlice'

const ListTodo = () => {
    const { list, filter } = useSelector((state) => state.todos)
    const filteredList = list.filter((todo) => {
        if (filter === "all") return true;
        if (filter === 'completed') return todo.completed;
        if (filter === 'incomplete') return !todo.completed;
        return true;
    })
    const dispatch = useDispatch()
    return (
        <div className='flex flex-col bg-zinc-200 w-30'>
            <div className='flex gap-3 flex-row mb-3'>
                <button onClick={() => dispatch(filterTodos("all"))} className='bg-zinc-100 p-2' type='submit'>Todos</button>
                <button onClick={() => dispatch(filterTodos("completed"))} className='bg-zinc-100 p-2' type='submit'>Completas</button>
                <button onClick={() => dispatch(filterTodos("incomplete"))} className='bg-zinc-100 p-2' type='submit'>incompletas</button>
            </div>

            <ul className='flex flex-col gap-3'>
                {filteredList.map((item) => (
                    <li key={item.id} className='flex flex-row gap-3 bg-zinc-300 p-4 justify-between' >
                        <span onClick={() => dispatch(toggleTodo(item.id))} className={item.completed ? "line-through" : ""} >{item.text}</span>
                        <button onClick={() => dispatch(removeTodo(item.id))}>Remover</button>
                    </li>


                ))}
            </ul>
        </div>
    )
}

export default ListTodo
