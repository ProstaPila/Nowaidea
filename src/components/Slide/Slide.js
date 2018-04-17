import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import Link from 'gatsby-link'
import './Slide.sass'

const Slide = (props) => (
<div key={props.myKey}
className="myslide"
style={{padding: '2em 1em',margin: '20px'}}


>
  <figure className="image is-256x256">
    <img src={props.thumbnail} alt={props.excerpt} />
  </figure>

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