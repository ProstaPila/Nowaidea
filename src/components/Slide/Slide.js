import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import Link from 'gatsby-link'

const Slide = (props) => (
<div key={props.myKey}
className="myslide"
style={{padding: '2em 4em' }}

>
<p>
  <Link className="has-text-primary" to={props.slug}>
  <img src={props.thumbnail} alt={props.description} />
    {props.title}
  </Link>
  <span> &bull; </span>
  
  <small>{props.date}</small>
</p>
<p>
  {props.excerpt}
  <br />
  <br />
  <Link className="button is-big" to={props.slug}>
    Czytaj Więcej →
  </Link>
</p>

</div>)

export default Slide 