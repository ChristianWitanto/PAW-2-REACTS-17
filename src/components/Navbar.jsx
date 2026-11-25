import React from 'react'
import ThemeSwap from './ThemeSwap'
import { Bell, Search } from 'lucide-react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li>
              <NavLink to="/">HomePage</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Hehehaw</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2 bg-base-100 w-40 z-1">
            <li><NavLink to="/">HomePage</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/register">Register</NavLink></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div className="navbar-end gap-x-3">
    <Bell/>
    <Search/>
    <ThemeSwap/>
  </div>
</div>
  )
}

export default Navbar