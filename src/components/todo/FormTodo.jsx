import React ,{useState} from 'react'

function FormTodo({AddTodo}) {
    const [title,setTitle]=useState('');
    const [description,setDescription]=useState('');
  const  submitFun=(e)=>{
        e.preventDefault();
        console.log('submitted')
        console.log(title)
        console.log(description)
        AddTodo({title,description})
    }


  return (
    <form onSubmit={submitFun}>
  
    <legend className='text-center'>  TODO LIST</legend>
    <div className="mb-3">
      <label htmlFor="disabledTextInput" className="form-label">The Title of The Todo</label>
      <input  type="text" id="disabledTextInput"  onChange={(e)=>setTitle(e.target.value)} className="form-control" placeholder="Disabled input"/>
    </div>

    <div className="mb-3">
      <label htmlFor="disabledTextInput" className="form-label">The description of The Todo</label>
     <textarea name="" id="" cols="30" rows="5" className='form-control' onChange={(e)=>setDescription(e.target.value)}></textarea>
    </div>

   
   
    <button type="submit" className="btn btn-primary">Add Todo</button>
  
</form>
  )
}

export default FormTodo