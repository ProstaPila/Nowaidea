import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Footer from '../components/Footer/Footer'

import Navbar from '../components/Navbar/Navbar'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Navbar />
    <div>{children()}</div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
