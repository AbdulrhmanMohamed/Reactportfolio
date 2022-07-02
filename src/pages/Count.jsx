import {React,useState} from 'react'
import DecreaseCounter from '../components/DecreaseCounter';
import IncreaseCounter from '../components/IncreaseCounter'
import { useSelector } from 'react-redux';

function Count() {
  
 
 let [count,setCount]=useState(0);
  return (
    <div className='my-5 py-3 bg-light text-black rounded text-center' style={{width:'500px',margin:'auto'}}>
        <h1>Counter State </h1>
        <IncreaseCounter countVal={count} counterFun={setCount}/>
        <h2>{count}</h2>
        <DecreaseCounter countVal={count} counterFun={setCount}/>
       
    </div>
  )
}

export default Count