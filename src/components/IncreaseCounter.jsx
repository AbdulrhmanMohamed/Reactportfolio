import {React,useState} from 'react'


import { useDispatch } from 'react-redux';
function IncreaseCounter({counterFun,countVal}) {
  const useDisp=useDispatch();



  return (
    <>
    <button className="btn btn-primary btn-lg"  onClick={()=>counterFun(++countVal)}>
        Increse
    </button>

    {/* <h2>{count}</h2> */}
    </>
  )
}

export default IncreaseCounter