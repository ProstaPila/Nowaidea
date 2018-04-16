import React from 'react'
import Link from 'gatsby-link'
import logo from '../img/logosmall.png'

const Navbar = () => (
  <nav className='navbar is-fixed-top' aria-label='main navigation'>
    <div className="container">
      <div className="navbar-brand">
     
        
      </div>
      <div className="navbar-start">
      <button className='button navbar-burger' data-target='navMenu'>
          <span />
          <span />
          <span />
        </button>
      <Link className="navbar-item" to="/">
          Strona Głowna
        </Link>
      <Link className="navbar-item" to="/projekty">
          Projekty
        </Link>
        <Link className="navbar-item" to="/ofundacji">
          O fundacji
        </Link>
        <Link className="navbar-item" to="/cele">
          Cele
        </Link>
        <Link className="navbar-item" to="/kontakt">
          Kontakt
        </Link>
      </div>
      <div className="navbar-end">
      
       
      </div>
    </div>
  </nav>
)

export default Navbar
