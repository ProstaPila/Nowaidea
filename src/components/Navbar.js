import React, { Component } from 'react'
import Link from 'gatsby-link'
import logo from '../img/logosmall.png'

class Navbar extends Component {
 
  state= { active: false};

    
  toggleNav() {
    this.setState({active: !this.state.active});
} 
  

  render(){
  
    let css = " ";
    if(this.state.active) {
      css ="is-active"
    }

  return(
  <nav className='navbar is-fixed-top' aria-label='main navigation'>
    <div className="container">
    
      <div className="navbar-brand">
      <button className={['button navbar-burger', css].join(" ")} data-target='navMenu' onClick={this.toggleNav.bind(this)}>
          <span />
          <span />
          <span />
        </button>
        
      </div>
      <div className={['navbar-menu', css].join(" ")} id='navMenu'>
      <div className="navbar-start">
      
       
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
      </div>
    
  </nav>
);
}};

export default Navbar
