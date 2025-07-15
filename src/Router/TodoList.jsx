import React, { useContext, useEffect } from 'react'
import "./todo.css"
import { useState } from 'react'
import { nanoid } from 'nanoid'
import { todoListContext } from '../Context/Wrapper'
import { toast } from 'react-toastify'
const TodoList = () => {
  const [completed, setcompleted] = useState(false)
  const [tittle, settittle] = useState("")
  const [arr, setarr] = useState([])
  const [description, setdescription] = useState("")
  const [todoList, setTodoList] = useContext(todoListContext)

  const SubmitHandler = (e) => {
    e.preventDefault()
    if (tittle.trim() === "" || description.trim() === "") {
      toast.error("Please fill all the fields")
      return;
    }
    const obj={
      id: nanoid(),
      tittle: tittle,
      description: description,
      completed: completed,
    }
  
    setTodoList([...todoList,obj])
    toast.success("Todo added successfully")
    settittle("")
    setdescription("")
    setcompleted(false) 
 }
 const submitEvent=(id)=>{
  const array=todoList.filter((object)=>{
    if(object.id!=id){
      return object
    }
  })
  setTodoList(array) 
  toast.success("Todo deleted successfully")
 }
const submitComp=(id)=>{
  
    todoList.forEach((data)=>{
      if(data.id==id){
        if(data.completed){
          data.completed=false;
        }
        else{
          data.completed=true
        }
      }
      setarr([...arr,data])
    })
 }
 console.log(arr)
  return (
    <>
    <div className="mains">
      <nav className='main_nav'>
        <h1>Todo List </h1>
        <button onClick={()=>window.location.href="/"}>Close</button>
      </nav>
    <div className="mide">
      <section className='main_section_1'>
          <input value={tittle} onChange={(e)=>{settittle(e.target.value)}}  className='todo_input_box' type="text" placeholder='Add a tittle' />
          <textarea value={description} onChange={(e)=>{setdescription(e.target.value)}} className='w-full h-30 bg-white outline-none placeholder:px-2 ' placeholder='Enter the descriptions' name="" id=""></textarea>
          <div className='checkbox'>
            <input 
          type="checkbox"
          checked={completed}
          onChange={(e) => {
            setcompleted(e.target.checked)
          }}
        />
       <label> Task Complete</label>
           </div>
          <button onClick={SubmitHandler} className='todo_button'>Add</button>
      </section>
      <section className='main_section_2'>
        {
          todoList.map((data,index)=>{
            return (
              <>
                <div  className='todo_list'>
                  <div className='todo_list_item'>
                    <h1>{index+1}</h1>
                    <div className=' text-white'>
                      <h2 className='font-bold'>{data.tittle}</h2>
                      <h3 className='text-sm text-gray-400  '>{data.description}</h3>
                    </div>
                  </div>
                   <div className='flex gap-4'>
                     {data.completed ==true ? <button onClick={()=>{submitComp(data.id)}}  className='delete_items1'>Completed</button> : <button onClick={()=>{submitComp(data.id)}}  className='delete_items '>InCompleted</button>}
                    <button onClick={()=>{submitEvent(data.id)}}  className='delete_items'>Delete</button> 
                   </div>
                </div>
              </>
            )
          })
        }
      </section>
    </div>
    </div>
    </>
  )
}

export default TodoList