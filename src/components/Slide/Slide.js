import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import Link from 'gatsby-link'
import './Slide.sass'

const Slide = (props) => (
<div key={props.myKey}
className="myslide"
style={{padding: '2em 1em',margin: '20px', backgroundImage: "url(" + props.thumbnail + ")"}}


>

  <Link className="slider_title" to={props.slug}>
      {props.title}
  </Link>
  
  <p>
  <small>{props.date}</small>
</p>
<p className="slider_description">
  {props.excerpt}
  <br />
  <br />
  <Link className="button is-big" to={props.slug}>
    Czytaj Więcej →
  </Link>
</p>

</div>)

export default Slide 