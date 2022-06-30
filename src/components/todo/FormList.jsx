import React from 'react'
import {useSelector} from 'react-redux'
function FormList({DeleteTodo}) {
    const todos = useSelector((state) => {
        console.log(state)
        return state.todos
    })
    console.log(todos)
    return (
        <div className='my-4 wrapper bg-light p-3 '>
            {
            todos.map((ele, index) => {
                return (
                    <div className="bg-secondary my-3 rounded" key={index}>
                        <div className="card">
                            <div className="card-body">
                                <div className="ele_wrapper d-flex align-items-center justify-content-between">
                                    <div className="card-title">
                                        {
                                        ele.title
                                    } </div>
                                    <button class=" bg-danger p-3 text-white bg-danger rounded" style={{border:'0',cursor:'pointer'}} onClick={()=>DeleteTodo(index)}>X</button>
                                </div>

                                <div className="card-text">
                                    {
                                    ele.description
                                } </div>
                            </div>
                        </div>
                    </div>
                )
            })
        } </div>
    )
}

export default FormList
