import React from 'react'
import Link from 'gatsby-link'
import logo from '../img/logosmall.png'

const Footer = () => (
    <footer>
      <div className="container">
      <div className="columns">
        <div className="column">
          <div className="logofoot">
        <Link to="/" >
          <figure className="image is-128x128">
            <img src={logo} alt="Fundacja Idea Nowa"  />
          </figure>
        </Link>
        </div>
        </div>
        <div className="column">
          <div className="menu">
          
        <Link  to="/">
          Strona Głowna
        </Link>
      <Link  to="/projekty">
          Projekty
        </Link>
        <Link to="/ofundacji">
          O fundacji
        </Link>
        <Link  to="/cele">
          Cele
        </Link>
        <Link  to="/kontakt">
          Kontakt
        </Link>
        </div>
      </div>

      <div className="column">
      
          
        </div>

        <div className="column">
        <p>IDEA NOWA<br />
      ul. Armii Krajowej<br />
      137A/12 81-824 Sopot</p>
      <p>tel: 58 341 88 94<br />
        kom 501 761 361<br />  
        e-mail: fundacja@ideanova.pl</p>
          
        </div>

        
    </div>
  </div>
  <p style={{ textAlign: 'center', color: 'white'}}>
  <small>Designed by spaceout.pl</small>
  </p>
  </footer>
)

export default Footer