import React from 'react'
import { NavLink } from 'react-router'

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Navlink to="/about" className="btn btn-primary">GO TO ABOUT PAGE</Navlink>
    </div>
  )
}

export default Home


