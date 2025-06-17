import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink 
        to="/" 
        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
      >
        Home
      </NavLink>

      <NavLink 
        to="/notes" 
        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
      >
        Notes
      </NavLink>
    </nav>
  )
}

export default Navbar
