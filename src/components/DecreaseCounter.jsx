import React from 'react'

function DecreaseCounter({countVal,counterFun}) {
  return (
    <button className="btn-primary btn-lg" onClick={()=>counterFun(--countVal)}>Decrease</button>
  )
}

export default DecreaseCounter