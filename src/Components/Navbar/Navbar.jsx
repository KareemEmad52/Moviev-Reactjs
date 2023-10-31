import React from 'react'
import { Link } from "react-router-dom";
import logo from '../../Assets/image/logo-dark.webp'
import style from './Navbar.module.css'
export default function Navbar() {
  return <>

<nav className={`navbar ${style.bgColor} navbar-expand-lg bg-body-tertiary`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><img src={logo} alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon d-flex justify-content-center align-items-center "><i className="fa-solid fa-bars"></i> </span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 mt-2 text-center">
        <li className="nav-item">
          <Link className="nav-link text-white" to=''>Home</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-white" to='movie'>Movie</Link>
        </li>



        <li className="nav-item">
          <Link className="nav-link text-white" to='tvshow'>Tv Show</Link>
        </li>



        <li className="nav-item">
          <Link className="nav-link text-white" to='people'>People</Link>
        </li>



        <li className="nav-item">
          <Link className="nav-link text-white" to='about'>About</Link>
        </li>


      </ul>


      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mt-2">
        <li className='nav-item text-white d-flex justify-content-center align-items-center'>
          <i className="fa-brands fa-facebook me-2"></i>
          <i className="fa-brands fa-spotify me-2"></i>
          <i className="fa-brands fa-instagram me-2"></i>
          <i className="fa-brands fa-youtube me-2"></i>
        </li>
      </ul>

    </div>
  </div>
</nav>
  
  </>
}
