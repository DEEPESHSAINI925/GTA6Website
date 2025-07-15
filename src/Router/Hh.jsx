import React, { useState } from 'react'

const Hh = () => {
    const [value, setvalue] = useState()
    
  return (
    <>
   <input type="radio" checked={value} value="male" onChange={(e)=>{console.log(e.target.value)}}  id="" />
   male
   <input type="radio" checked={value} value="female" onChange={(e)=>{console.log(e.target.value)}} id="" />
   female
    </>
  )
}

export default Hh