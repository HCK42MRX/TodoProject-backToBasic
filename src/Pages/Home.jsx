import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaPencilAlt } from 'react-icons/fa'
import CardTodo from '../Components/CardTodo'

// utils
import { fetchLocalStorage } from '../utils/handleLocalStorage'

export default function Home () {
  const [todos, setTodos] = useState()
  useEffect(() => {
    const result = fetchLocalStorage()
    setTodos(result)
  }, [])
  return (
    <>
     <div className="flex items-center justify-between">
      <h1 className='text-2xl font-medium text-white'>App Todo</h1>
      <Link to='/new-task' className='bg-white bg-opacity-20 py-2 px-4 text-white flex items-center gap-x-3' ><FaPencilAlt /> New Task</Link>
      </div>
      <hr className='mt-4'/>
      <div className="content mt-5 flex flex-wrap gap-5">
      {todos ? todos.map(todo => <CardTodo key={Math.random()} title={todo.title} description={todo.description}/>) : null}
      </div>
    </>
  )
}
