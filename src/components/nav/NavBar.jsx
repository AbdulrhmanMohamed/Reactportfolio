import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <>
        <div className="">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <Link className="nav-link" to ='/counter'>Counter</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to ='/home'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to ='/shop'>Shop</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to ='/todo'>TodoRedux</Link>
        </li>

      
       
      </ul>
      
    </div>
  </div>
</nav>
        </div>
    </>
  )
}

export default NavBar