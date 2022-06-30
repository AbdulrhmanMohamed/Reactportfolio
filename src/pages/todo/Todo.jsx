import React,{useState} from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import FormList from '../../components/todo/FormList';
import FormTodo from '../../components/todo/FormTodo';
import { addTodoAction ,deletTodoAction} from '../../reduxStore';
function Todo() {
  
 const useDisp=useDispatch();
  const counter=useSelector((state)=>{
    console.log(state)
    return state;
  })

  const AddTodo=(task)=>{
    console.log(task)
    useDisp(addTodoAction(task))
   


  }
  const DeleteTodo=(index)=>{
    useDisp(deletTodoAction(index))
  }
 
  
  return (
    <>
    <div className="container my-5 ">
    <div className="row justify-content-center">
      <div className="col-lg-8">
      <FormTodo AddTodo={AddTodo}/>
      <FormList DeleteTodo={DeleteTodo}/>

      </div>
    </div>
    </div>
    </>
  )
}

export default Todo