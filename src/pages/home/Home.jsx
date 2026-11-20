import React from 'react'
import { NavLink } from 'react-router'

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <NavLink to="/about" className="btn btn-primary">GO TO ABOUT PAGE</NavLink>
    </div>
  )
}

export default Home


