import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../slices/todoSlice'
import { useState } from 'react'
const FormTodo = () => {
    const [input, setInput] = useState("")
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault()
        if (input.trim() === "") return;
        dispatch(addTodo(input))
        setInput('')

    }
    return (
        <div className='flex flex-col bg-zinc-200 border-black'>
            <form className=' w-30 flex flex-row gap-2 p-4' onSubmit={handleSubmit}>
                <input className='p-3 ' type="text " placeholder='Adicione a tarefa' value={input} onChange={(e) => setInput(e.target.value)} />
                <button className='bg-zinc-100 p-2' type='submit'> Enviar</button>
            </form>
        </div>
    )
}

export default FormTodo
