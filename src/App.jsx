import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import NewTask from './Pages/NewTask'

export default function App () {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/new-task' element={<NewTask/>}/>
    </Routes>
    </>
  )
}
