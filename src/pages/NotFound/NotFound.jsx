import React from 'react'
import Image from '../../assets/images/404.svg'
function NotFound() {
  return (
    <div className="container my-5">
        <div className="row align-items-center justify-content-center">
            <div className="col-lg-10">
               <img src={Image} alt=""  className='img-fluid'/ >
            </div>

           
        </div>
    </div>
  )
}

export default NotFound
