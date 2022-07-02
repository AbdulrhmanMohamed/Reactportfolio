import React from 'react'
import {useSelector} from 'react-redux'
function FormList({DeleteTodo}) {
    const todos = useSelector((state) => {
      
        return state.todo.todos
    })

    return (
        todos.length>0&&
        <div className='my-4 wrapper bg-light p-3 '>
            {
            todos.map((ele, index) => {
                return (
                    <div className="bg-secondary my-3 rounded" key={index}>
                        <div className="card">
                            <div className="card-body">
                                <div className="ele_wrapper d-flex align-items-center justify-content-between">
                                    <div className="card-title" style={{minWidth:'50%'}}>
                                        TITLE:
                                        {
                                        ele.title
                                    }
                                    <div className="divider rounded mt-2" style={{background:'red',height:'3px',width:'100%'}}>
                                    </div> 
                                    </div>
                                    <button className=" bg-danger p-3 text-white bg-danger rounded" style={{border:'0',cursor:'pointer'}} onClick={()=>DeleteTodo(index)} >X</button>
                                </div>

                                <div className="card-text">
                                    DESCRIPTION:
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
