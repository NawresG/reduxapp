import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FilterTodoList } from '../../JS/Actions/Actions'
import "./Filtre.css"

const FilterTodo = () => {
    const dispatch= useDispatch()
  return (

<div className='contFilter'> 

  <label style={{padding:"20px", color: "#002610",
textShadow: '2px 2px 0 #bcbcbc, 4px 4px 0 #9c9c9c', fontSize: "1.5rem", fontWeight:'bold' }}>Choose your Filter:</label>

  <button className='btnfltr' onClick={()=>dispatch(FilterTodoList("ALL"))}>ALL</button>
  <button  className='btnfltr' onClick={()=>dispatch(FilterTodoList("COMPLETED"))}>Done</button>
  <button className='btnfltr' onClick={()=>dispatch(FilterTodoList("INCOMPLETED"))}>UnDone</button>
</div>

  )
}

export default FilterTodo