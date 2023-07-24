import React from 'react'
import './todo.css'
const Box = (props) => {
  return (
    <div className='box' onClick={props.onclick}>{props.value}</div>
  )
}

export default Box