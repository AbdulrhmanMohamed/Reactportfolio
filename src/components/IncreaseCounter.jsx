import {React,useState} from 'react'

function IncreaseCounter({counterFun,countVal}) {




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