import React from 'react'
import Img from 'gatsby-image'


const BgImage = (props) => (
 <Img
  sizes={props.dataSizes}
  style={{
    
    left: 0,
    top: 0,
    width: "100%",
    height: "100%"
  }}
/>
);

export default BgImage