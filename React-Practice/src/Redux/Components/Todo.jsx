import React, {useState} from 'react'
import { addTodo, deleteTodo, removeTodo } from '../actions'
import {useDispatch, useSelector} from 'react-redux'
import './Todo.css'
const Todo = () => {
    const [inputData, setInputData] = useState();
    const dispatch = useDispatch();
    const list = useSelector((state) => state.TodoReducers.list)
    // console.log(list); // [{..}, {..}]
    // console.log(list[0].id);
  return (
    <>
        <div className='main-div'>
            <div className='child-div'>
                <figure>
                    <figcaption>Add Your List Here</figcaption>
                </figure>
                
                {/* This part for input box to add item */}
                <div className='addItems'>
                    <input type="text" value={inputData} onChange={(e) => setInputData(e.target.value)} placeholder='Add Items...' />
                    <i className="fa fa-plus add-btn" onClick={() => dispatch(addTodo(inputData), setInputData(""))}></i>
                </div>

                {/* This part for show list */}
                <div className="showItems">
                    {
                        list.map((elem) => {
                            return (
                                <div className="eachItem" key={elem.id}>
                                    <h3>{elem.data}</h3>
                                    <div className="todo-btn">
                                        <i className='far fa-trash-alt add-btn' title='Delete Item' onClick={() => dispatch(deleteTodo(elem.id))}></i>
                                    </div>
                                </div>
                            )
                        }) 
                    }
                    
                </div>

                {/* This part for check list button */}
                <div className="showItem">
                    <button className='btn effect04' data-sm-link-text="remove All" onClick={() => dispatch(removeTodo())}><span>Check List</span></button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Todo