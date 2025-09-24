import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className="navbar position-fixed navbar-expand-lg">
    <div className="container-fluid">
    <NavLink className="navbar-brand text-white fs-2 fw-bold p-2 mx-5" to="/home">START FRAMEWORK</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse px-5" id="navbarNav">
      <ul className="navbar-nav ms-auto px-5">
        <li className="nav-item px-2">
          <NavLink className="nav-link text-uppercase text-white fw-bold" aria-current="page" to="/about">About</NavLink>
        </li>
        <li class="nav-item px-2">
          <NavLink className="nav-link text-uppercase text-white fw-bold" aria-current="page" to="/portfolio">Portfolio</NavLink>
        </li>
        <li className="nav-item px-2">
          <NavLink className="nav-link text-uppercase text-white fw-bold" aria-current="page" to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar