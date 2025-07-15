import React, { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TodoList from './Router/TodoList'
import HomePage from './Router/HomePage'
import Hh from './Router/Hh'


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/todo' element={<TodoList/>}/>
        <Route path='/hh' element={<Hh/>}/>
      </Routes>   
    </BrowserRouter>
    </>
  )
}

export default App