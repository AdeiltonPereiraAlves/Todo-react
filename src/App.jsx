
import './App.css'
import FormTodo from './components/FormTodo'
import ListTodo from './components/ListTodo'

function App() {


  return (
    <div className='flex flex-col items-center justify-center  bg-zinc-100 h-screen' >
      <div className='flex flex-col items-center justify-center  bg-zinc-200 w-30 p-10'>
        <h1 className='text-xl '>Lista de Tarefas</h1>
        <FormTodo />
        <ListTodo />
      </div>
    </div>
  )
}

export default App
