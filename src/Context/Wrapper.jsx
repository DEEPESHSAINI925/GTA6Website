import React, { createContext, useState } from 'react'
export const todoListContext=createContext()
const Wrapper = ({children}) => {
const [todoList, setTodoList] = useState([{
    id:1,
    tittle: "Kam kar le bhai",
    completed: false,
  }])
  return (
    <todoListContext.Provider value={[todoList,setTodoList]}>
        {children}
    </todoListContext.Provider>
  )
}

export default Wrapper