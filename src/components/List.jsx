import React from 'react'
import { BiEdit,BiTrash } from "react-icons/bi";

const List = (props) => {
    const {id,title,removeItem,editItem} = props
  return (
    <div className='list-item'>
        <p id={id} className='title'>{title}</p>
        <div className="button-container">
          <BiEdit onClick={()=>editItem(id)} className='btn'/>
          <BiTrash onClick={()=>removeItem(id)} className='btn'/>
        </div>
    </div>
    
  )
}

export default List